const view = {
  showScreen: async function (screenName) {
    let app = document.querySelector("#app");
    switch (screenName) {
      case "home": {
        app.innerHTML = components.nav + components.home;
        await controller.showNewsFeed()
        controller.queryBasic()
        controller.clickNewFeed()
        const newFeed = document.querySelector('new-feed')
        
        
        break;
      }

      case "search": {
        app.innerHTML = components.nav + components.search;
        controller.queryBasic()

<<<<<<< HEAD
=======
        app.innerHTML = components.home + components.nav;
>>>>>>> 34ef7b9ec11497e0a075e4108a7e44fb1cbb84c7

        break;
      }
      case "addPost": {
        app.innerHTML = components.nav + components.addPost;
        controller.postForm()
        controller.queryBasic()

    
        break;
      }
    }
  },
};
