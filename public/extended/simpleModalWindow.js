const previewCards = document.querySelectorAll("#previewCard");
const modalWindow = document.getElementById("modalWindow");
const showImg = document.getElementById("showImg");
const closeButtons = document.querySelectorAll("#btnClose");

document.addEventListener(
  "DOMContentLoaded",
  () => (modalWindow.style.display = "none")
);
previewCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const elem = e.target;
    const startPos = elem.src.indexOf("-");
    const endPos = elem.src.indexOf("jpg") - 1;
    const sliceLine = elem.src.substring(startPos, endPos);
    const modifyLine = elem.src.replace(sliceLine, "");
    const currentAlt = elem.alt;

    if (elem.tagName != "IMG") return;

    showImg.src = modifyLine;
    showImg.alt = currentAlt;

    modalWindow.style.display = "block";
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => (modalWindow.style.display = "none"));
});
