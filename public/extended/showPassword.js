const showPassword = document.getElementById("showPassword");
const fieldPassword = document.getElementById("password");

showPassword.addEventListener("click", function () {
  if (!this.hasAttribute("checked")) {
    this.setAttribute("checked", "checked");

    fieldPassword.type == "password" ? (fieldPassword.type = "text") : "";
  } else {
    this.removeAttribute("checked", "checked");
    fieldPassword.type == "text" ? (fieldPassword.type = "password") : "";
  }
});
