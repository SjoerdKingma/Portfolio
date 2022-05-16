const bookmarks_htmlPages = [
    //  ElementId,                URL            Nav menu depth
    ["navButton-about", "pages/introduction.html", 0],
    ["navButton-about-introduction", "pages/introduction.html", 1],
    ["navButton-about-contact", "pages/contact.html", 1],
    ["navButton-projects", "pages/projects.html", 0],
    ["navButton-projects-search", "pages/projects.html", 1],
    ["navButton-projects-current", "", 1],
    ["navButton-components", "pages/components.html", 0],
    ["navButton-components-search", "pages/components.html", 1],
    ["navButton-challenges", "pages/challenges.html", 0],
    ["navButton-challenges-search", "pages/challenges.html", 1],
  ];

  const projectDetails_htmlPages = [
    //Project name                         URL
    ["My Portfolio Website", "pages/details/my-portfolio-website.html"],
    ["Online multiplayer card-game", "pages/details/online-mp-card-game.html"],
    ["Recycle bin cleaner", "pages/details/recycle-bin-cleaner.html"],
    ["PHP school assignment", "pages/details/php-school-assignment.html"],
    ["Easy Calculator", "pages/details/easy-calculator.html"],
  ];

  function getBookmarkIndexByElementId(elementId) {
    for (var i = 0; i < bookmarks_htmlPages.length; i++) {
      var currentElementId = bookmarks_htmlPages[i][0];
      if (currentElementId == elementId) {
        return i;
      }
    }
  }

  function getUrlByBookmarkIndex(index){
    return bookmarks_htmlPages[index][1];
  }

  function getUrlByDetailName(detailName){
    for(var i=0; i<projectDetails_htmlPages.length; i++){
      var currentDetailsPage = projectDetails_htmlPages[i];

      if(currentDetailsPage[0] == detailName){
        return currentDetailsPage[1];
      }
    }
  }