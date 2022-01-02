const cardItems = document.querySelectorAll("#cardGrid");
const showMore = document.getElementById("showMore");

function hidden(items) {
  for (let j = 0; j < items.length; j++) {
    j > 3 ? items[j].classList.add("is-hide") : "";
  }
}

function fadeIn(hideItem) {
  if (hideItem.classList.contains("is-hide")) {
    hideItem.classList.add("is-show");
    hideItem.classList.remove("is-hide");
  }
}

function fadeOut(btn) {
  if (btn.classList.contains("is-shown")) {
    btn.classList.add("is-hidden");
    btn.classList.remove("is-shown");
  }
}

document.addEventListener("DOMContentLoaded", hidden(cardItems));
showMore.addEventListener("click", function () {
  const hideItems = Array.from(document.querySelectorAll(".is-hide"));
  console.log(hideItems);

  for (let j = 0; j < 4; j++) {
    fadeIn(hideItems[j]);
  }

  hideItems.slice(0, 4);

  hideItems.length - 4 <= 4 ? fadeOut(this) : "";
});
