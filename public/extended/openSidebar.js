const humburger = document.querySelector("#humburger");
const hideSidebar = document.querySelector("#hide-sidebar");

humburger.addEventListener("click", () => {
  if (hideSidebar.classList.contains("is-close-sidebar")) {
    console.log(hideSidebar.classList.contains("is-close-sidebar"));
    hideSidebar.classList.remove("is-close-sidebar");
  } else {
    hideSidebar.classList.add("is-close-sidebar");
  }
});
