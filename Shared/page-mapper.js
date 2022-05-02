const bookmarks_htmlPages = [
    //ElementId, URL, Menu depth (0: no depth. 1: first sub menu.)
    ["navButton_about", "introduction.html", 0],
    ["navButton_about_introduction", "introduction.html", 1],
    ["navButton_about_contact", "contact.html", 1],
    ["navButton_projects", "projects.html", 0],
    ["navButton_projects_search", "projects.html", 1],
    ["navButton_components", "components.html", 0],
    ["navButton_components_search", "components.html", 1],
    ["navButton_challenges", "challenges.html", 0],
    ["navButton_challenges_search", "challenges.html", 1]
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