const utils = {
  getDataFromDoc(doc) {
    let data = doc.data()
    data.id = doc.id
  
    return data
  },
  getDataFromDocs(docs) {
    return docs.map(utils.getDataFromDoc)
  },
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
  }
}