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
