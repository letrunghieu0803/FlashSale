window.onload = init

function init() {
  let currentView = localStorage.getItem('currentView');
  let currentData = localStorage.getItem('keySearch')
  if(currentView){
    view.showScreen(currentView)
    switch(currentView){
      case 'search':
        controller.showSearchPage(currentData)
        break;
    }
  } else{
    view.showScreen('home')
  }
  
}
