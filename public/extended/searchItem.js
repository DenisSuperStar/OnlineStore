const search = document.getElementById("search");
const cards = document.querySelectorAll("#card");

search.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  cards.forEach((card) => {
    let price = card.querySelector("#itemPrice");
    let name = card.querySelector("#itemName");

    if (
      !(
        price.innerHTML.toLowerCase().indexOf(query) > -1 ||
        name.innerHTML.toLowerCase().indexOf(query) > -1
      )
    ) {
      card.parentElement.classList.add("is-hidden");
    }
  });
});

search.addEventListener("input", function () {
  const query = this.value;
  if (query == "") {
    cards.forEach((card) => {
      card.parentElement.classList.remove("is-hidden");
    });
  }
});
