window.onload = init

function init(){
  let currentView = localStorage.getItem('currentView');

  if(currentView){
    view.showScreen(currentView)
    switch(currentView){
      case 'search': {
        let currentData = localStorage.getItem('keySearch')
       
        controller.showSearchPage(currentData)
        break;

      }
      case 'detail':
        
        break;
    }
  } else{
    view.showScreen('home')
  }
  
}

// window.close() = outit
// function outit(){
//   localStorage.removeItem("currentUser")
//   localStorage.removeItem("currentEmail")
//   localStorage.removeItem("currentDisplayName")
//   localStorage.removeItem("currentView")
// }