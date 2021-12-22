document.addEventListener("DOMContentLoaded", () => {
  addClassToJumbotronParent();
  insertNodeBeforeJumbotron();
  selectedIcon();
});

function selectedIcon() {
  const anyUrl = document.location.pathname;
  const pathParts = anyUrl.split("/");

  pathParts.forEach((value) => {
    if (value == "private") {
      insertIconInNode(
        ".cm-imposition",
        "fas",
        "fa-file-upload",
        "cm-imposition__icon"
      );
    } else if (value == "delete") {
      insertIconInNode(
        ".cm-imposition",
        "fas",
        "fa-file-times",
        "cm-imposition__icon"
      );
    } else {
    }
  });
}

function addClassToJumbotronParent() {
  const jumbotron = document.querySelector(".cm-jumbotron");

  jumbotron.classList.add("is-marked");
}

function insertNodeBeforeJumbotron() {
  const createImposition = document.createElement("div");
  const marked = document.querySelector(".cm-jumbotron.is-marked");

  createImposition.classList.add("cm-imposition");
  marked.before(createImposition);
}

function insertIconInNode(parentSelectorName, ...iconClasses) {
  const parent = document.querySelector(parentSelectorName);
  const createIcon = document.createElement("span");

  createIcon.classList.add(iconClasses[0], iconClasses[1], iconClasses[2]);
  parent.prepend(createIcon);
}
