const view = {
  showScreen: async function (screenName) {
    let app = document.querySelector("#app");
    view.saveCurrentView(screenName);
    switch (screenName) {
      case "home": {
        app.innerHTML = components.nav + components.home + components.footer;
        await controller.showNewsFeed();
        let currentEmail = localStorage.getItem('currentEmail')
        // view.saveDatatoStorage('currentEmail',currentEmail)
        controller.queryBasic();
        controller.clickNewFeed();
        controller.searchWithCategory();
        controller.searchWithUserUse(currentEmail)
        break;
      }

      case "search": {
        app.innerHTML = components.nav + components.search;
        controller.queryBasic();

        break;
      }
      case "addPost": {
        app.innerHTML = components.nav + components.addPost;
       let currentUser = localStorage.getItem('currentEmail')
        controller.postForm(currentUser);
        controller.queryBasic();
        break;
      }
      case "details": {
        app.innerHTML = components.nav + components.details;
        controller.queryBasic();
        break;
      }

      case "login": {
        app.innerHTML =components.nav + components.login;

        const link = document.querySelector(".a");

        link.onclick = function () {
          view.showScreen("register");
        };

        const form = document.querySelector(".form-login");
        form.onsubmit = function (event) {
          event.preventDefault();
          let loginInfo = {
            email: form.email.value.trim().toLowerCase(),
            password: form.password.value,
          };

          let validateResult = [
            utils.validate(loginInfo.email, "#email-error", "Hãy nhập email"),
            utils.validate(
              loginInfo.password,
              "#password-error",
              "Hãy nhập mật khẩu"
            ),
          ];

          if (utils.allPassed(validateResult)) {
            controller.login(loginInfo);
          }
        };

        break;
      }

      case "user": {
        app.innerHTML = components.nav + components.user;
        controller.queryBasic()
        const buttonback = document.querySelector(".button-back");
        buttonback.onclick = function () {
          view.showScreen("home");
        };
        let email = view.getDataFromStorage('userEmail')
        let name = view.getDataFromStorage('userDisplayName')
        // console.log(email, name)
        controller.showUserInformations(email,name)
        controller.updateUserInformations()
        break;
      }
      case "register": {
        app.innerHTML = components.nav + components.register;

        const link = document.querySelector(".a");
        link.onclick = function () {
          view.showScreen("login");
        };

        //get data
        const form = document.querySelector(".form-register");
        form.onsubmit = function (event) {
          event.preventDefault();
          let registerInfo = {
            fisrtName: form.firstName.value.trim(),
            lastName: form.lastName.value.trim(),
            email: form.email.value.trim().toLowerCase(),
            password: form.password.value,
            comfirmPassword: form.comfirmPassword.value,
            bDay: form.bDay.value,
            gender: form.gender.value,
          };

          //validate
          let validateResult = [
            utils.validate(
              registerInfo.fisrtName,
              "#firstName-error",
              "Hãy nhập họ"
            ),
            utils.validate(
              registerInfo.lastName,
              "#lastName-error",
              "Hãy nhập tên"
            ),
            utils.validate(
              registerInfo.email,
              "#email-error",
              "Chọn một địa chỉ email"
            ),
            utils.validate(
              registerInfo.password && registerInfo.password.length >= 6,
              "#password-error",
              "Mật khẩu phải hơn 6 ký tự"
            ),
            utils.validate(
              registerInfo.comfirmPassword &&
                registerInfo.comfirmPassword === registerInfo.password,
              "#comfirmPassword-error",
              "Xác nhận sai mật khẩu"
            ),
            utils.validate(registerInfo.bDay, "#bDay-error", "Nhập ngày sinh"),
            // utils.validate(
            //   registerInfo.gender,
            //   "#gender-error",
            //   "Missing gender!"
            // ),
          ];

          //submit
          if (utils.allPassed(validateResult)) {
            controller.register(registerInfo);
          }
        };

        break;
      }
      case 'feedback' : {
        app.innerHTML = components.nav + components.feedback
        controller.queryBasic()
        controller.feedBackForm()
        break;
      }
  
    }
  },

  
  saveCurrentView: function (name) {
    localStorage.setItem("currentView", name);
  },

  saveDatatoStorage: function (key,data) {
    localStorage.setItem(key, data);
  },

  getDataFromStorage: function(key) {
    return localStorage.getItem(key)
  }

  

};
