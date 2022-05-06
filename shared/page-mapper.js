const bookmarks_htmlPages = [
    //ElementId, URL, Menu depth (0: no depth. 1: first sub menu.)
    ["navButton-about", "introduction.html", 0],
    ["navButton-about-introduction", "introduction.html", 1],
    ["navButton-about-contact", "contact.html", 1],
    ["navButton-projects", "projects.html", 0],
    ["navButton-projects-search", "projects.html", 1],
    ["navButton-components", "components.html", 0],
    ["navButton-components-search", "components.html", 1],
    ["navButton-challenges", "challenges.html", 0],
    ["navButton-challenges-search", "challenges.html", 1]
  ]

  function getBookmarkIndexByElementId(elementId) {
    for (var i = 0; i < bookmarks_htmlPages.length; i++) {
      var currentItem = bookmarks_htmlPages[i][0];
      if (currentItem == elementId) {
        return i;
      }
    }
  }

  function getUrlByIndex(index){
    return bookmarks_htmlPages[index][1];
  }