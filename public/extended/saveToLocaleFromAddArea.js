const fieldName = document.getElementById("fieldItemName");
const fieldSize = document.getElementById("fieldSize");
const fieldStuff = document.getElementById("fieldStuff");
const fieldPrice = document.getElementById("fieldPrice");

fieldName.innerHTML = JSON.parse(localStorage.getItem("product_name"));
fieldSize.innerHTML = JSON.parse(localStorage.getItem("product_size"));
fieldStuff.innerHTML = JSON.parse(localStorage.getItem("product_stuff"));
fieldPrice.innerHTML = JSON.parse(localStorage.getItem("product_price"));

const thingName = JSON.stringify(fieldName.innerHTML);
const thingSize = JSON.stringify(fieldSize.innerHTML);
const thingStuff = JSON.stringify(fieldStuff.innerHTML);
const thingPrice = JSON.stringify(fieldPrice.innerHTML);

fieldName.addEventListener("input", () => {
  localStorage.setItem("product_name", thingName);
});

fieldSize.addEventListener("input", () => {
  localStorage.setItem("product_size", thingSize);
});

fieldStuff.addEventListener("input", () => {
  localStorage.setItem("product_stuff", thingStuff);
});

fieldPrice.addEventListener("input", () => {
  localStorage.setItem("product_price", thingPrice);
});
