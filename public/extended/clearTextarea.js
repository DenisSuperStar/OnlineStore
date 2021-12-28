const textareas = Array.from(document.querySelectorAll("textarea"));

textareas.forEach((textarea) => {
  textarea.value = "";
});
