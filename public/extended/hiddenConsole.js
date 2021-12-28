window.oncontextmenu = () => false;

document.onkeydown = function (e) {
  window.event.keyCode == 123 || e.button == 2 ? false : true;
};
