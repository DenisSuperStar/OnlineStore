const transformHumburger = document.getElementById("humburger");

transformHumburger.addEventListener("click", function () {
  if (this.classList.contains("is-active")) {
    this.classList.remove("is-active");
  } else {
    this.classList.add("is-active");
  }
});
