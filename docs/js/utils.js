const utils = {

  validate(condition, queryErrorTag, messageError) {
    if(condition) {
      document.querySelector(queryErrorTag).innerHTML = ''
      return true
    } else {
      document.querySelector(queryErrorTag).innerHTML = messageError
      return false
    }
  },
  allPassed(array) {
    return array.every(function(item) {
      return item
    })
  },
  setText(queryTag, text) {
    document.querySelector(queryTag).innerText = text
  },
  enable(queryTag) {
    document.querySelector(queryTag).removeAttribute('disabled')
  },
  disable(queryTag) {
    document.querySelector(queryTag).setAttribute('disabled', true)
  },
  formatDate(isoString){
    return new Date(isoString).toLocaleDateString()
  },
  removeAccents(str) {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  },
  firebaseUser: function() {
    return currentUser = firebase.auth().currentUser
  },
  firebaseUserEmail: function() {
    return currentUserEmail = firebase.auth().currentUser.email
  },
  firebaseUserName: function() {
    return currentUser = firebase.auth().currentUser.displayName
    
  }
}