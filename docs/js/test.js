// window.onload = function(){
//   let mainA = document.querySelector(".abc");
//  console.log(mainA);
// let db = firebase.firestore();
//   db.collection("test")
//   .where("user", "==", "haha")
//   .orderBy("id")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//       console.log("a");
//       let mainContent = document.createElement("div");
//       mainContent.className = "intro-new-feed intro2";
//       let data = doc.data();
//       mainContent.innerHTML = `  
//             <div class ='information-post'>
//             <span class="title-css">Tieu De</span>
//             <label for="introduce">Mô Tả:</label>    
//             <p name="introduce" class="intro-view">${data.data}</p>
//             <label for="">ID:</label>
//             <div class='category'>${data.id}</div>
//             <div class="custom-div-end">
//                 <button >Xem Thêm</button>         
//             </div>
//         `;
//       console.log(mainContent);
//       mainA.appendChild(mainContent);
//     });
//   });

// }