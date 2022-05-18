const navButton_url = [
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

const projectDetails_url = [
  //Project name                 URL
  ["Default page", "pages/details/default.html"],
  ["My Portfolio Website", "pages/details/my-portfolio-website.html"],
  ["Online multiplayer card-game", "pages/details/online-mp-card-game.html"],
  ["Recycle bin cleaner", "pages/details/recycle-bin-cleaner.html"],
  ["PHP school assignment", "pages/details/php-school-assignment.html"],
  ["Easy Calculator", "pages/details/easy-calculator.html"],
];

function loadPage(bookmarkIndex){
  sessionStorage.setItem("BookmarkIndex", bookmarkIndex);
  location.reload();
}

function getBookmarkIndexByElementId(elementId) {
  for (var i = 0; i < navButton_url.length; i++) {
    var currentElementId = navButton_url[i][0];
    if (currentElementId == elementId) {
      return i;
    }
  }
}

function getUrlByBookmarkIndex(index) {
  return navButton_url[index][1];
}

function getProjectDetailsUrlByProjectName(detailName) {
  if (detailName) {
    for (var i = 0; i < projectDetails_url.length; i++) {
      var currentDetailsPage = projectDetails_url[i];

      if (currentDetailsPage[0] == detailName) {
        return currentDetailsPage[1];
      }
    }
  }
  else {//if detailName is null or empty
    return projectDetails_url[0][1];//Returns the default project details page.
  }
}

function generateAHREFtag(url) {
  return generateAHREFtagWithText(url, url);
}

function generateAHREFtagWithText(url, text) {
  var stringbuilder = '<a href="';
  stringbuilder += url;
  stringbuilder += '">';
  stringbuilder += text;
  stringbuilder += '</a>';
  return stringbuilder;
}