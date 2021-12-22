document.addEventListener("DOMContentLoaded", () => {
  addClassToJumbotronParent();
  insertNodeBeforeJumbotron();
  insertIconInImposition();
});

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

function insertIconInImposition() {
  const imposition = document.querySelector('.cm-imposition');
  const createIcon = document.createElement('span');

  createIcon.classList.add('fas', 'fa-file-upload', 'cm-imposition__icon');
  imposition.prepend(createIcon);
}
