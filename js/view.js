const view = {
  showScreen: async function (screenName) {
    let app = document.querySelector("#app");
    switch (screenName) {
      case "home": {
        console.log("hello")

        app.innerHTML = components.home;

        // let link = document.querySelector("a");
        // link.onclick = function () {
        //   view.showScreen("home");
        // };
        break;
      }
      
      case "search": {
        app.innerHTML = components.search;
        // let link = document.querySelector("a");
        // link.onclick = function () {
        //   view.showScreen("search");
        // };
        break;
      }
     
    }
  },
};
