window.onload = init

function init(){
  let currentView = localStorage.getItem('currentView');

  if(currentView){
    view.showScreen(currentView)
    switch(currentView){
      case 'search':
        let currentData = localStorage.getItem('keySearch')
       
        controller.showSearchPage(currentData)
        break;
    }
  } else{
    view.showScreen('home')
  }
  
}

window.addEventListener("beforeunload", function(event) {
  localStorage.removeItem('currentView')
  event.returnValue = "Write something clever here..";
});