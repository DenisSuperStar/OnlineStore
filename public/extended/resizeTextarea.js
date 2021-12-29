const fields = document.querySelectorAll("textarea");

fields.forEach((textarea) => {
  textarea.addEventListener("keydown", function () {
    this.style.height = 65 + "px";

    if (this.scrollTop > 0) {
      this.setAttribute("style", `height: ${this.scrollHeight}px`);
    }
  });
});
