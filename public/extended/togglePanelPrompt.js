const panelButton = document.getElementById("panelBtn");
const showPanel = document.getElementById("showPanel");
const resetButton = showPanel.querySelector("#resetBtn");

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
