const panelButton = document.getElementById("panelBtn");
const showPanel = document.getElementById("showPanel");
const resetButton = showPanel.querySelector("#resetBtn");
const setScroll = document.getElementById("setScrolling");

panelButton.addEventListener("click", () => {
  if (showPanel.classList.contains("reverse")) {
    showPanel.classList.remove("reverse");
    showPanel.classList.add("offset");
  }
});

resetButton.addEventListener("click", () => {
  if (showPanel.classList.contains("offset")) {
    showPanel.classList.remove("offset");
    showPanel.classList.add("reverse");
  }
});

setScroll.addEventListener("mouseover", function () {
  this.classList.add("is-scrolling");
});

setScroll.addEventListener("mouseout", function () {
  this.classList.remove("is-scrolling");
});
