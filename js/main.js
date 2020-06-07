window.onload = init

function init() {

  // databaseQueryTemplate()
  firebase.auth().onAuthStateChanged(function(user) {
    if(user && user.emailVerified){
      view.showScreen('chat')
    } 
    else{
      view.showScreen('register')
    }
  })
}
