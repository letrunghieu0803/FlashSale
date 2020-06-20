const controller = {
  showNewsFeed: async function () {
    let mainA = document.querySelector(".new-feed");
    let db = firebase.firestore();
    await db
      .collection("posts")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let mainContent = document.createElement("div");
          mainContent.className = "intro-new-feed";
          let data = doc.data();
          mainContent.innerHTML = `
        <p id="title">${data.title}</p>
        <img class="img-intro" data-atf="true" src="${data.linkanh}" alt="" />
        <p name="introduce">Mô tả : ${data.description}</p>
        <p name="time-date-new-feed">Thời hạn sử dụng: ${data.deadTime}</p>
        <p name="price-new-feed">Giá: ${data.price}</p>
        `;
          mainA.appendChild(mainContent);
        });
      });
  },


  clickNewFeed: async function () {
    let newFeed = document.querySelectorAll(".intro-new-feed");
    for (let i = 0; i < newFeed.length; i++) {
      newFeed[i].onclick = async function (e) {
        e.preventDefault();
        let introduce = newFeed[i].children[2].innerHTML;
        let key = introduce.replace("Mô tả : ", "");
        await controller.catchKey("description", key);

      };
    }

  },


  //Ham sau nay bat su kien tim kiem
  catchKey: async function (fisrtKey, secondKey) {
    let detailList = {};
    await firebase
      .firestore()
      .collection("posts")
      .where(fisrtKey, "==", secondKey)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let data = doc.data();
          console.log(data);
          object = {
            title: data.title,
            linkAnh: data.linkanh,
            description: data.description,
            deadTime: data.deadTime,
            placeUse: data.placeUse,
            price: data.price,
            userPost: data.userPost,
            contact: data.contact,
            timePost: data.createdAt,
          };
          detailList = Object.assign(detailList, object);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    controller.showDetail(detailList)
  },

  showDetail: async function (object) {
    await view.showScreen("details")
    let mainContain = document.getElementById('detailDiv')
    mainContain.innerHTML = ""
    mainContain.innerHTML = `
    <p>${object.title}</p>
    <img class="img-details"
      src="${object.linkAnh}"
      alt=""
    />
    <p>Chi tiết sản phẩm: ${object.description}</p>
    <p>Thời hạn sử dụng: ${object.deadTime}</p>
    <p>Địa điểm sử dụng: ${object.placeUse}</p>
    <p>Giá cả: ${object.price}</p>
    <p>Phương thức liên hệ: ${object.contact}</p>
    <div class="main-contain details">
    <p>Người đăng: ${object.userPost}</p>    
    <p>Ngày đăng: ${object.timePost}</p>
    <button id="flow-button">Theo dõi</button>
    </div>
    `
  },


  backHome: function () {
    let logoHome = document.getElementById("logo");
    logoHome.onclick = function () {
      view.showScreen("home");
    };
  },
  searchWithCategory: function () {
    let categoryDetail = document.querySelectorAll('.category-detail')
    for (let i = 0; i < categoryDetail.length; i++) {
      categoryDetail[i].onclick = async function (e) {
        e.preventDefault();
        let wordSearch = categoryDetail[i].innerHTML;
        console.log(wordSearch)
        if(wordSearch.includes("Thời")){
          controller.catchKey('time',wordSearch)
        } else {
          controller.catchKey('area',wordSearch)
        }
        // let key = introduce.replace("Mô tả : ", "");
        // await controller.catchKey("description",key);
      };
    }

    // view.showScreen("search")

  }

  ,
  seachForm: function () {
    let formSeach = document.querySelector(".form-search-item");
    let inputSearch = document.querySelector('#input-search')
    formSeach.onsubmit = async function (event) {
      event.preventDefault();
      // Lấy dữ liệu và hiện thị trang search theo dữ liệu.
      let data = inputSearch.value.toLowerCase()
      view.saveDatatoStorage('keySearch',data)
      console.log(key)
      // Hiện thị trang search
      view.showScreen("search");
      controller.showSearchPage(data)
    };
  },
  showSearchPage : async function(key){
    let mainA = document.querySelector("#searchPage");
      await firebase.firestore()
        .collection('posts')
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let data = doc.data()
            let title = data.title.toLowerCase()
            title = utils.removeAccents(title)
            key = utils.removeAccents(key)
            if(title.includes(key)){
              let mainContent = document.createElement("div");
            mainContent.className = "product-intro";
            let data = doc.data();
            mainContent.innerHTML = `
          <p id="title">${data.title}</p>
          <img class="img-list" data-atf="true" src="${data.linkanh}" alt="" />
          <p name="introduce">Mô tả : ${data.description}</p>
          <p name="time-date-new-feed">Thời hạn sử dụng: ${data.deadTime}</p>
          <p name="price-new-feed">Giá: ${data.price}</p>
          `;
            mainA.appendChild(mainContent);
            }
            
          });
        });
  },
  showUserInformations: async function(email,name) {
    const formUser = document.querySelector(".form-user-info");
    console.log(email)
    await firebase
      .firestore()
      .collection("users")
      .where("email", "==", email)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let data = doc.data();
          formUser.email.value = email
          formUser.name.value = name;
          formUser.phoneNumber.value = data.phoneNumber;
          formUser.birthDay.value = data.bDay;
          formUser.gender.value = data.gender;
          formUser.cmt.value = data.cmt;
          formUser.createdAt.value = data.createdAt;
          if (data.address) {
            formUser.address.value = data.address;
          } else {
            formUser.address.value = "";
          }
        });
      });
  },

  updateUserInformations: async function() {
    const formUser = document.querySelector(".form-user-info");
    formUser.onsubmit = await function (e) {
      e.preventDefault();
      firebase
      .firestore()
      .collection("users")
      .where("email", "==", firebase.auth().currentUser.email)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          firebase
          .firestore()
          .collection("users")
          .doc(doc.id)
          .update({
            phoneNumber: formUser.phoneNumber.value,
            birthDay: formUser.birthDay.value,
            gender: formUser.gender.value,
            address: formUser.address.value,
            cmt: formUser.cmt.value,
          });
        firebase.auth().currentUser.displayName = formUser.name.value
        });
      });
    };
  },

  postForm: async function (currentUser) {
    let fileButton = document.getElementById("upload-picture");
    let buttonPost = document.getElementById("form-post-btn");
    let formAddPost = document.getElementById("form-add-post");
    fileButton.addEventListener("change", async function (e) {
      e.preventDefault();
      let file = e.target.files[0];
      buttonPost.addEventListener("click", async function (event) {
        event.preventDefault();
        let storageRef = firebase.storage().ref("anh" + file.name);
        let mvp = storageRef.put(file);
        await mvp.on(
          "state_changed",
          function (snapshot) { },
          function (error) { },
          function () {
            mvp.snapshot.ref
              .getDownloadURL()
              .then(async function (downloadURL) {
                let postObject = {
                  title: formAddPost.title.value.trim(),
                  description: formAddPost.description.value.trim(),
                  deadTime: formAddPost.deadTime.value.trim(),
                  area: formAddPost.area.value.trim(),
                  time: formAddPost.time.value.trim(),
                  placeUse: formAddPost.placeUse.value.trim(),
                  price: formAddPost.price.value.trim(),
                  contact: formAddPost.contact.value.trim(),
                  linkanh: downloadURL,
                  createdAt: new Date().toDateString(),
                  userPost: currentUser,
                };
                let validateResult = [
                  utils.validate(
                    postObject.title,
                    "#title-error",
                    "Chưa nhập tên sản phẩm!"
                  ),
                  utils.validate(
                    postObject.description,
                    "#description-error",
                    "Chưa nhập mô tả sản phẩm!"
                  ),
                  utils.validate(
                    postObject.deadTime,
                    "#time-error",
                    "Chưa nhập thời hạn cho sản phẩm!"
                  ),
                  utils.validate(
                    postObject.area,
                    "#area-error",
                    "Chưa chọn vùng Miền!"
                  ),
                  utils.validate(
                    postObject.time,
                    "#time-error",
                    "Chưa chọn loại Thời hạn!"
                  ),
                  utils.validate(
                    postObject.placeUse,
                    "#placeUse-error",
                    "Chưa nhập địa chỉ cụ thể sử dụng sản phẩm !"
                  ),
                  utils.validate(
                    postObject.price,
                    "#price-error",
                    "Chưa nhập địa chỉ cụ thể sử dụng sản phẩm !"
                  ),
                  utils.validate(
                    postObject.contact,
                    "#contact-error",
                    "Chưa nhập phương thức liên lạc!"
                  ),
                ];
                if (utils.allPassed(validateResult)) {
                  await firebase
                    .firestore()
                    .collection("posts")
                    .add(postObject);
                  try {
                    alert(
                      "Bạn đã đăng bài thành công! Nhấn OK để về Trang chủ"
                    );
                    setTimeout(function () {
                      view.showScreen("home");
                    }, 1000);
                  } catch (error) { }
                }
                console.log("DONE");
              });
          }
        );
      });
    });
  },
  navStateChange: async function (){
    const logInOut = document.getElementById("item-link-logout");
    const user1 = document.getElementById("item-link-user")
    const post = document.getElementById("add-post-btn")
    const feedBack = document.getElementById('item-link-feedback')
    logInOut.innerText = 'Đăng nhập'

    // Cho nút đăng nhập vs đăng kí là 1
    firebase.auth().onAuthStateChanged(function (user) {
      if (user){
        logInOut.innerText = 'Đăng xuất'
        post.innerText = 'Đăng bài'
        feedBack.innerText = 'Góp ý'
        user1.innerText = view.getDataFromStorage('userDisplayName')
        logInOut.onclick = function () {
          firebase.auth().signOut()
        }

        feedBack.onclick = function () {
          view.showScreen('feedback')
        }
         
        user1.onclick = function () {
          view.showScreen('user')
        }
      }  else {
        post.innerText = ''
        user1.innerText = ''
        feedBack.innerText = ''
        logInOut.innerText = 'Đăng nhập'
        logInOut.onclick = function () {
          view.showScreen('login')
        }
      }
  })

  }
  ,
  queryBasic: function () {
    let linkAddPost = document.getElementById("add-post-btn");
    linkAddPost.onclick = function () {
      view.showScreen("addPost");
    }
    controller.navStateChange()
    controller.backHome();
    controller.seachForm();
    controller.searchWithCategory()
  },

  register: async function (registerInfo) {
    let email = registerInfo.email
    let password = registerInfo.password
    let name = registerInfo.fisrtName + " " + registerInfo.lastName
    let gender = registerInfo.gender
    let bDay = registerInfo.bDay
    document.querySelector(".register-btn").setAttribute('disble', true)
    document.querySelector("#register-error").innerText = ''
    firebase.firestore().collection('users').add({
      'email': email,
      'password': password,
      'name': name,
      'gender': gender,
      'bDay': bDay,
      'createdAt': new Date().toLocaleString()
    })

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      await firebase.auth().currentUser.updateProfile({
        displayName: name
      })
      await firebase.auth().currentUser.sendEmailVerification()
      alert('Đăng ký thành công, mã xác nhận đã gửi về email')
    } catch (error) {
      document.querySelector("#register-error").innerText = error.message
    }
    document.querySelector(".register-btn").removeAttribute('disble')

  },

  login: async function (loginInfo) {
    let email = loginInfo.email
    let password = loginInfo.password
    document.querySelector(".message-success").innerText = ''
    document.querySelector(".message-error").innerText = ''
    document.querySelector(".login-btn").setAttribute('disble', true)
    try {
      let result = await firebase.auth().signInWithEmailAndPassword(email, password)
      if (result.user && result.user.emailVerified) {
        view.saveDatatoStorage('currentUser', firebase.auth().currentUser)
        view.saveDatatoStorage('userEmail', firebase.auth().currentUser.email)
        view.saveDatatoStorage('userDisplayName',firebase.auth().currentUser.displayName) 
        view.showScreen("home")
      } else {
        throw new Error(`Email chưa được xác nhận`)
      }
    } catch (error) {
      document.querySelector(".message-error").innerText = error.message
    }
  },

};
