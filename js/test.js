// window.onload = function () {
//   let testButton = document.getElementById("test-button");
//   console.log(testButton);
//   let formAdd = document.querySelector(".form-add-post");
//   if (testButton) {
//     testButton.addEventListener("click", function (event) {
//       event.preventDefault();
//       formAdd.style.visibility = "visible";
//       document.querySelector(".contain").style.opacity = "0.5"
//       formAdd.style.opacity = "1"
//     });
//   }
window.onload = async function () {
  let mainA = document.querySelector(".main-contain-add");
  mainA.innerHTML = "";
  let db = firebase.firestore();
  await db
    .collection("posts")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        let mainContent = document.createElement("div");
        let data = doc.data();
        mainContent.className ='intro-new-feed'
        mainContent.innerHTML = `
      <p id="title">${data.title}</p>
      <img class="img-intro" data-atf="true" src="${data.linkanh}" alt="" />
      <div class="introduce">Mô tả : ${data.description}</div>
      <div name="time">Thời hạn sử dụng: ${data.deadTime}</div>
      <p name="price">Giá: ${data.price}</p>
      `;
        console.log(doc.id, " => ", doc.data());
        mainA.appendChild(mainContent);
      });
    });
  let newFeed = document.querySelector(".intro-new-feed");
  let intro = document.querySelector('.introduce')
  newFeed.onclick = function (e) {
    e.preventDefault();
    console.log(newFeed.children[2].innerHTML);
  };
};
