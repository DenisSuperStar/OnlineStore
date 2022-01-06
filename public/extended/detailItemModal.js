const products = Array.from(document.querySelectorAll("#card"));
const modalWindows = Array.from(document.querySelectorAll("#modalWindow"));
const images = Array.from(document.querySelectorAll("#hugeImage"));
const quickViews = Array.from(document.querySelectorAll("#quickView"));
const modalBackground = document.getElementById("modalBackground");

document.addEventListener("DOMContentLoaded", () => {
  products.forEach((card) => {
    let modalNode = card.nextSibling;
    let modal = modalNode.nextSibling;

    modal.style.display = "none";
    modalBackground.style.display = "none";
  });
});

images.forEach((image) => {
  const startPos = image.src.indexOf("-");
  const endPos = image.src.lastIndexOf(".");
  const findLine = image.src.substring(startPos, endPos);
  const changePath = image.src.replace(findLine, "");

  image.src = changePath;
});

products.forEach((item) => {
  item.addEventListener("click", function (e) {
    const elem = e.target;
    const modalNode = this.nextSibling;
    const modal = modalNode.nextSibling;

    modal.style.display = "block";
    modalBackground.style.display = "block";

    if (elem != "BUTTON") return;
  });
});

quickViews.forEach((btn) => {
  const cardItemNode = btn.nextSibling;
  const cardItem = cardItemNode.nextSibling;
  const imgItem = cardItem.querySelector("#imgItem");

  imgItem.addEventListener("mouseover", () => {
    btn.classList.add("is-appear");
  });
  imgItem.addEventListener("mouseout", () => {
    btn.classList.remove("is-appear");
  });
  btn.addEventListener("mouseover", function () {
    btn.classList.add("is-appear");
  });
});

modalWindows.forEach((modal) => {
  const btnClose = Array.from(modal.querySelectorAll("#btnClose"));

  btnClose.forEach((close) => {
    close.addEventListener("click", () => {
      modal.style.display = "none";
      modalBackground.style.display = "none";
    });

    modalBackground.addEventListener("click", function () {
      modal.style.display = "none";
      this.style.display = "none";
    });
  });
});
