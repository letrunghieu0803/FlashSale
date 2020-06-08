const view = {
    showScreen: function (screenName) {
        const app = document.querySelector('.app')
        switch (screenName) {
            case 'register': {
                app.innerHTML = components.register

                const link = document.querySelector('.a')
                link.onclick = function () {

                    view.showScreen('login')
                }

                const form = document.querySelector('.form-register')
                form.onsubmit = function (event) {
                    event.preventDefault()
                    let registerInfo = {
                        fisrtName: form.firstName.value.trim(),
                        lastName: form.lastName.value.trim(),
                        email: form.email.value.trim().toLowerCase(),
                        password: form.password.value,
                        comfirmPassword: form.comfirmPassword.value,
                        bDay: form.bDay.value,
                        gender: form.gender.value,
                    }
                    
                    view.validate(registerInfo.fisrtName, '#firstName-error' , 'Missing fisrtName!')
                    view.validate(registerInfo.lastName, '#lastName-error' , 'Missing lastName!')
                    view.validate(registerInfo.email, '#email-error' , 'Missing email!')
                    view.validate(registerInfo.password, '#password-error' , 'Missing password!')
                    view.validate(registerInfo.comfirmPassword, '#comfirmPassword-error' , 'Missing comfirmPassword!')
                    view.validate(registerInfo.bDay, '#bDay-error' , 'Missing bDay!')
                    view.validate(registerInfo.gender, '#gender-error' , 'Missing gender!')
                }

                break;
            }
            case 'login': {
                app.innerHTML = components.login

                const link = document.querySelector('.a')
                link.onclick = function () {
                    view.showScreen('register')

                }

                const form = document.querySelector('.form-login')
                form.onsubmit = function (event) {
                    event.preventDefault()
                }

                break;
            }

        }

    },
    validate: function (condition, queryErrorTag, messageError) {
        if(condition) {
            document.querySelector(queryErrorTag).innerHTML = ""
            return true
        } else {
            document.querySelector(queryErrorTag).innerHTML = messageError
            return false
        }
    }
}