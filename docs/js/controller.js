const controller = {
  showNewsFeed: async function () {
    let mainA = document.querySelector(".new-feed");
    let db = firebase.firestore();
    await db
      .collection("posts")
      .orderBy('compare')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let mainContent = document.createElement("div");
          mainContent.className = "intro-new-feed";
          let data = doc.data();
          mainContent.innerHTML = `
        <p class="title-css">${data.title}</p>
        <img class="img-intro" data-atf="true" src="${data.linkanh}" alt="" />
        <p name="introduce">Mô tả : ${data.description}</p>
        <p name="time-date-new-feed">Thời hạn sử dụng: ${data.deadTime}</p>
        <div class='custom-div'>
        <p name="price-new-feed">Giá: ${data.price}</p>
        <p id='more-info' class="hover-cursor">Xem chi tiết...</p>
        </div>
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
        await controller.catchKey("description",'==', key);
      };
    }
    view.saveDatatoStorage('searchWith','category')

  },

  //Ham sau nay bat su kien tim kiem
  catchKey: async function (fisrtKey, compare, secondKey) {
    let detailList = [];
    await firebase
      .firestore()
      .collection("posts")
      .where(fisrtKey, compare, secondKey)
      .orderBy('compare')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let data = doc.data();
          view.saveDatatoStorage('docId',doc.id)
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
          // detailList = Object.assign(detailList, object);
          detailList.push(object)
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    controller.showDetail(detailList);
  },

  showDetail: async function (array) {
    console.log(array)
    await view.showScreen("details");
    console.log('da vao detail')
      let mainA = document.getElementById("detail-main");
      mainA.innerHTML = "";
    for(let i=0; i< array.length;i++){
      let mainContent = document.createElement("div");
          mainContent.className = "intro-new-feed";
          mainContent.innerHTML = `
          <p class="title-css">${array[i].title}</p>
          <img class="img-details"
            src="${array[i].linkAnh}"
            alt=""
          />
          <p>Chi tiết sản phẩm: ${array[i].description}</p>
          <p>Thời hạn sử dụng: ${array[i].deadTime}</p>
          <p>Địa điểm sử dụng: ${array[i].placeUse}</p>
          <p>Giá cả: ${array[i].price}</p>
          <p>Phương thức liên hệ: ${array[i].contact}</p>
          <div class="footer-detail" name='footer'>
          <p>Người đăng: ${array[i].userPost}</p>    
          <p>Ngày đăng: ${array[i].timePost}</p>
          <button class="follow-button" name='followBtn'>Theo dõi</button>
          </div>
        `;
          mainA.appendChild(mainContent);
      }
      
    controller.followPost()

  },

  backHome: function () {
    let logoHome = document.getElementById("logo");
    logoHome.onclick = function () {
      view.showScreen("home");
    };
  },
  searchWithCategory: function () {
    let categoryDetail = document.querySelectorAll(".category-detail");
    for (let i = 0; i < categoryDetail.length; i++) {
      categoryDetail[i].onclick = async function (e) {
        e.preventDefault();
        let wordSearch = categoryDetail[i].innerHTML;
        view.saveDatatoStorage("keySearch", wordSearch);
        if (wordSearch.includes("Thời")) {
          controller.catchKey("time",'==', wordSearch);
        } else {
          controller.catchKey("area",'==', wordSearch);
        }
      };
    }
    view.saveDatatoStorage('searchWith','category')

    // view.showScreen("search")
  },
  searchWithUserUse: function (currentEmail) {
    let userUse = document.querySelectorAll(".user-use");
    for (let i = 0; i < userUse.length; i++) {
      userUse[i].onclick = async function (e) {
        e.preventDefault();
        let wordSearch = userUse[i].innerHTML;
        view.saveDatatoStorage("keySearch", wordSearch);
        if (wordSearch.includes("đăng")) {
          controller.catchKey('userPost',"==",currentEmail)
          // controller.catchKey("time", wordSearch);
          view.saveDatatoStorage('searchWith','userPost')

        } else {
          // controller.catchKey("area", wordSearch);
          controller.catchKey('userFollow',"array-contains",currentEmail)
          view.saveDatatoStorage('searchWith','userFollow')

        }
   
      };
    }
  },
  seachForm: function () {
    let formSeach = document.querySelector(".form-search-item");
    let inputSearch = document.querySelector("#input-search");
    formSeach.onsubmit = async function (event) {
      event.preventDefault();
      // Lấy dữ liệu và hiện thị trang search theo dữ liệu.
      let data = inputSearch.value.toLowerCase();
      view.saveDatatoStorage("keySearch", data);
      // Hiện thị trang search
      view.showScreen("search");
      controller.showSearchPage(data);
    };
  },
  showSearchPage: async function (key) {
    let mainA = document.querySelector("#searchPage");
    await firebase
      .firestore()
      .collection("posts")
      .orderBy('compare')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let data = doc.data();
          let title = data.title.toLowerCase();
          title = utils.removeAccents(title);
          key = utils.removeAccents(key);
          if (title.includes(key)) {
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
          }
        });
      });
      controller.clickNewFeed();

  },
  showUserInformations: async function (email, name) {
    const formUser = document.querySelector(".form-user-info");
    console.log(email);
    await firebase
      .firestore()
      .collection("users")
      .where("email", "==", email)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let data = doc.data();
          formUser.email.value = email;
          formUser.name.value = name;
          formUser.phoneNumber.value = data.phoneNumber;
          formUser.birthDay.value = data.birthDay;
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

  updateUserInformations: async function () {
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
            // console.log(formUser.birthDay.value)
              firebase.firestore().collection("users").doc(doc.id).update({
              phoneNumber: formUser.phoneNumber.value,
              birthDay: formUser.birthDay.value,
              gender: formUser.gender.value,
              address: formUser.address.value,
              cmt: formUser.cmt.value,
            });
            firebase.auth().currentUser.updateProfile({
              displayName: formUser.name.value,
            })  
            view.saveDatatoStorage('userDisplayName',formUser.name.value)
            view.showScreen('user')
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
        buttonPost.setAttribute('disabled',true)
        
        let storageRef = firebase.storage().ref("anh" + file.name);
        let mvp = storageRef.put(file);
        await mvp.on(
          "state_changed",
          function (snapshot) {},
          function (error) {},
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
                  createdAt: new Date().toLocaleString(),
                  userPost: currentUser,
                  userFollow: [],
                  compare : new Date().getTime()
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
                    "#time-error2",
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
                    "Chưa nhập giá sản phẩm !"
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
                    buttonPost.removeAttribute('disabled')
                  try {
                    alert(
                      "Bạn đã đăng bài thành công! Nhấn OK để về Trang chủ"
                    );
                    setTimeout(function () {
                      view.showScreen("home");
                    }, 1000);
                  } catch (error) {}
                }
            
              });
          }
        );
      });
    });
  },
  feedBackForm: function () {
    let emailReport = document.getElementById("email-report");
    let submitReport = document.getElementById("submit-report");
    let contentReport = document.getElementById("content-report");


    submitReport.onclick = function (event) {
      submitReport.setAttribute('disabled',true)
      event.preventDefault();
      console.log(emailReport.value,contentReport.value)
      var template_params = {
        "from_name": emailReport.value,
        "message_html": contentReport.value
     }
     var service_id = "default_service";
     var template_id = "template_4LscTQSN";
      let validateResult = [
        utils.validate(
          template_params.from_name,
          "#email-error",
          "Chưa nhập tên sản phẩm!"
        ),
        utils.validate(
          template_params.message_html,
          "#content-error",
          "Chưa nhập mô tả sản phẩm!"
        ),]

        if (utils.allPassed(validateResult)) {
        emailjs.send(service_id, template_id, template_params)
        .then(
          function () {
            submitReport.removeAttribute('disabled')
            alert("Cám ơn bạn vì đã góp ý! Chúng tôi sẽ xem xét góp ý của bạn! Giờ hãy trở lại trang chủ nào!");
          },
          function (err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
          }
        )
        .then(function () {
          setTimeout(function(){
            view.showScreen("home")
          },1000)
        });
        }
      
    };
  },
  navStateChange: async function () {
    const logInOut = document.getElementById("item-link-logout");
    const user1 = document.getElementById("item-link-user");
    const post = document.getElementById("add-post-btn");
    const feedBack = document.getElementById("item-link-feedback");
    logInOut.innerText = "Đăng nhập";

    // Cho nút đăng nhập vs đăng kí là 1
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        logInOut.innerText = "Đăng xuất";
        post.innerText = "Đăng bài";
        feedBack.innerText = "Góp ý";
        user1.innerText = view.getDataFromStorage("userDisplayName");
        logInOut.onclick = function () {
          firebase.auth().signOut();
          view.showScreen('home')
        };

        feedBack.onclick = function () {
          view.showScreen("feedback");
        };

        user1.onclick = function () {
          view.showScreen("user");
        };
      } else {
        post.innerText = "";
        user1.innerText = "";
        feedBack.innerText = "";
        logInOut.innerText = "Đăng nhập";
        logInOut.onclick = function () {
          view.showScreen("login");
        };
      }
    });
  },
  queryBasic: function () {
    let linkAddPost = document.getElementById("add-post-btn");
    linkAddPost.onclick = function () {
      let currentUser = utils.firebaseUser()
      let currentEmail = utils.firebaseUserEmail()
      let currentDisplayName = utils.firebaseUserName()
      view.saveDatatoStorage('currentUser',currentUser)
      view.saveDatatoStorage('currentEmail',currentEmail)
      view.saveDatatoStorage('currentDisplayName',currentDisplayName)
      view.showScreen("addPost");
    };
    controller.navStateChange();
    controller.backHome();
    controller.seachForm();
  },

  register: async function (registerInfo) {
    let email = registerInfo.email;
    let password = registerInfo.password;
    let name = registerInfo.fisrtName + " " + registerInfo.lastName;
    let gender = registerInfo.gender;
    let bDay = registerInfo.bDay;
    document.querySelector(".register-btn").setAttribute("disabled", true);
    document.querySelector("#register-error").innerText = "";
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.updateProfile({
        displayName: name,
      });
      await firebase.auth().currentUser.sendEmailVerification();
      firebase.firestore().collection("users").add({
        email: email,
        name: name,
        gender: gender,
        bDay: bDay,
        createdAt: new Date().toLocaleString(),
      });
      alert("Đăng ký thành công, mã xác nhận đã gửi về email");
    } catch (error) {
      document.querySelector("#register-error").innerText = error.message;
    }
    document.querySelector(".register-btn").removeAttribute("disabled");
  },

  login: async function (loginInfo) {
    let email = loginInfo.email;
    let password = loginInfo.password;
    document.querySelector(".message-success").innerText = "";
    document.querySelector("#message-error").innerText = "";
    document.querySelector(".login-btn").setAttribute("disabled", true);
    try {
      let result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (result.user && result.user.emailVerified) {
        view.saveDatatoStorage("currentUser", firebase.auth().currentUser);
        view.saveDatatoStorage("userEmail", firebase.auth().currentUser.email);
        view.saveDatatoStorage(
          "userDisplayName",
          firebase.auth().currentUser.displayName
        );
        view.showScreen("home");
      } else {
        throw new Error(`Email chưa được xác nhận`);
      }
    } catch (error) {
      document.querySelector("#message-error").innerText = error.message;
    }
  },

  followPost: function(){
    let searchWith = localStorage.getItem('searchWith')
    console.log('nhan dang thanh cong', searchWith)

    if(searchWith === 'category'){
    let followBtn = document.querySelector('.follow-button')
      followBtn.onclick = function(){
        e.preventDefault();
        let docId = localStorage.getItem('docId')
        console.log(docId)
        let currentEmail = localStorage.getItem('currentEmail')
        firebase.firestore().collection('posts')
        .doc(docId)
        .update({
          'userFollow': firebase.firestore.FieldValue.arrayUnion(currentEmail)
        })
      }
    }
    else if(searchWith === 'userPost'){
      let newFeed = document.querySelectorAll(".intro-new-feed");
      let currentEmail = localStorage.getItem('currentEmail')
      for (let i = 0; i < newFeed.length; i++) {
        newFeed[i].children[7].children[2].innerHTML = 'Xóa bài viết'
        newFeed[i].children[7].children[2].onclick = async function (e) {
          e.preventDefault();
          let introduce = newFeed[i].children[2].innerHTML;
          let key = introduce.replace("Chi tiết sản phẩm: ", "");
          // let haha = newFeed[i].children[1]
          // console.log(haha)
          await firebase.firestore()
          .collection('posts')
          .where('description', '==', key)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(async function (doc) {
              console.log('aaaa')
              try {
                await firebase.firestore()
                .collection('posts')
                .doc(doc.id)
                .delete()

                alert('Xóa bài viết thành công')
                controller.catchKey('userPost',"==",currentEmail)

                
              } catch (error) {
                console.log(error)
              }
              
            })
          })
        };
      }
    }
    else{
      let newFeed = document.querySelectorAll(".intro-new-feed");
      let currentEmail = localStorage.getItem('currentEmail')
      for (let i = 0; i < newFeed.length; i++) { 
        newFeed[i].children[7].children[2].innerHTML = 'Bỏ theo dõi '
        newFeed[i].children[7].children[2].onclick = async function (e) {
          e.preventDefault();
          let introduce = newFeed[i].children[2].innerHTML;
          let key = introduce.replace("Chi tiết sản phẩm: ", "");
          console.log(key)
          firebase.firestore()
          .collection('posts')
          .where('description', '==', key)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              try {
                firebase.firestore()
                .collection('posts')
                .doc(doc.id)
                .update({
                  userFollow: firebase.firestore.FieldValue.arrayRemove(currentEmail)
                })
                alert('Bỏ theo dõi bài viết thành công')
                controller.catchKey('userFollow',"array-contains",currentEmail)
                
              } catch (error) {
                console.log(error)
              }
            })
          })
        };
      }
    }    
    
  }

};
