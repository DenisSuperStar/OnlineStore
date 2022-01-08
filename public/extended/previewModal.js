const previewCards = document.querySelectorAll("#previewCard");
const modalWindow = document.getElementById("modalWindow");
const showImg = document.getElementById("showImg");
const closeButtons = document.querySelectorAll("#btnClose");

previewCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const elem = e.target;
    const startPos = elem.src.indexOf("-");
    const endPos = elem.src.lastIndexOf('.');

    showModal(elem, startPos, endPos);

    getPosForModalWindow();

    if (elem.tagName != "IMG") return;
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => (modalWindow.style.display = "none"));
});

function getPosForModalWindow() {
  const setPos_y = window.event.clientY;
  modalWindow.style.top = setPos_y + 'px';
}

function showModal(currentElem, ...range) {
  const sliceLine = currentElem.src.substring(range[0], range[1]);
  const modifyLine = currentElem.src.replace(sliceLine, "");
  const currentAlt = currentElem.alt;

  showImg.src = modifyLine;
  showImg.alt = currentAlt;

  modalWindow.style.display = "block";
}
