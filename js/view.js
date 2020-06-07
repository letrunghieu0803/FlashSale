const view = {
    showScreen: async function (screenName) {
      let app = document.querySelector("#app");
  
      switch (screenName) {
        case "register": {
          app.innerHTML = components.register;
  
          let link = document.querySelector("a");
          link.onclick = function () {
            view.showScreen("login");
          };
  
          let form = document.querySelector(".register-form");
          form.onsubmit = function (event) {
            event.preventDefault();
  
            // 1. get data
            // 2. validate data
            // 3. submit data (next session)
            let registerInfo = {
              firstname: form.firstname.value.trim(), // required
              lastname: form.lastname.value.trim(), // required
              email: form.email.value.trim().toLowerCase(), // required
              password: form.password.value, // required && length >= 6
              confirmPassword: form.confirmPassword.value, // required && length >= 6 && == password
            };
  
            let validateResult = [
              utils.validate(
                registerInfo.lastname,
                "#lastname-error",
                "Missing lastname!"
              ),
              utils.validate(
                registerInfo.firstname,
                "#firstname-error",
                "Missing firstname!"
              ),
              utils.validate(
                registerInfo.email,
                "#email-error",
                "Missing email!"
              ),
              utils.validate(
                registerInfo.password && registerInfo.password.length >= 6,
                "#password-error",
                "Password required and has at least 6 characters!"
              ),
              utils.validate(
                registerInfo.confirmPassword &&
                  registerInfo.confirmPassword.length >= 6 &&
                  registerInfo.password == registerInfo.confirmPassword,
                "#confirm-password-error",
                "Invalid confirm password!"
              ),
            ];
  
            if (utils.allPassed(validateResult)) {
              controller.register(registerInfo);
            }
          };
  
          break;
        }
        case "login": {
          app.innerHTML = components.login;
  
          let link = document.querySelector("a");
          link.onclick = function () {
            view.showScreen("register");
          };
  
          let form = document.querySelector(".login-form");
          form.onsubmit = function (e) {
            e.preventDefault();
  
            let loginInfo = {
              email: form.email.value,
              password: form.password.value,
            };
  
            let validateResult = [
              utils.validate(loginInfo.email, "#email-error", "Missing email!"),
              utils.validate(
                loginInfo.password,
                "#password-error",
                "Missing password!"
              ),
            ];
  
            if (utils.allPassed(validateResult)) {
              controller.login(loginInfo);
            }
          };
  
          break;
        }
        case "chat": {
          app.innerHTML = components.nav + components.chat;
          
          await controller.loadConversations()
          controller.setupConversationChanges() // "added", 'modified', 'removed'
          // view.showNav()
          
          view.showCurrentConversation(model.currentConversation) //addlogic show details
          //view.showListConversation()
          view.showListConversations(model.listConversations)
          view.showInformationCurrentConversation(model.currentConversation)
          //events
          view.showNavbar(firebase.auth().currentUser.email)
          await controller.addConversation()
        let formAddMessage = document.querySelector(".form-add-message")
        formAddMessage.onsubmit = async function(event){
          event.preventDefault()
         
          let messageContent =  formAddMessage.message.value.trim()
          if(messageContent && model.currentConversation){
            await controller.updateNewMessage(messageContent)
            // console.log("update succsess")
            formAddMessage.message.value = ''
          }
        }
   
          break;
        }
      }
    },
}