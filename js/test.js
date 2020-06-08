window.onload = function () {
  let testButton = document.getElementById("test-button");
  console.log(testButton);
  let formAdd = document.querySelector(".form-add-post");
  if (testButton) {
    testButton.addEventListener("click", function (event) {
      event.preventDefault();
      formAdd.style.visibility = "visible";
      document.querySelector(".contain").style.opacity = "0.5"
      formAdd.style.opacity = "1"
    });
  }
};
