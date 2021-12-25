const humburger = document.getElementById("humburger");

humburger.addEventListener("click", function () {
  if (this.classList.contains("is-active")) {
    this.classList.remove("is-active");
  } else {
    this.classList.add("is-active");
  }
});
