import { styleModule } from "https://unpkg.com/style-module?module";

const cardStyles = styleModule({
  cardItem: {
    width: "400px",
    background: "linear-gradient(-90deg, #dc3545, #ffc107);",
    border: "none",
    borderRadius: "25px",
  },
  cardWrapperWide: {
    display: "flex",
    justifyContent: "center",
  },
  cardWrapperImg: {
    width: "336px",
    borderRadius: "25px",
    marginTop: "30px",
    marginBottom: "30px",
  },
  cardImg: {
    width: "100%",
    borderRadius: "25px",
    cursor: "pointer",
  },
  cardBody: {
    position: "relative",
    height: "100%",
    paddingLeft: "0",
    paddingRight: "0",
  },
  itemPrice: {
    fontSize: "18px",
    fontWeight: 700,
    margin: 0,
  },
  itemSize: {
    fontSize: "14px",
    margin: "0 0 5px",
  },
  itemName: {
    fontSize: "14px",
  },
});

const cards = document.querySelectorAll("#card");

cardStylish(cardStyles, cards);

function cardStylish(cardCssStyles, items) {
  const {
    cardItem,
    cardWrapperWide,
    cardWrapperImg,
    cardImg,
    cardBody,
    itemPrice,
    itemSize,
    itemName,
  } = cardCssStyles;

  items.forEach((item) => {
    const imgPlace = item.querySelector("#cardImgPlace");
    const imgBox = item.querySelector("#cardImgBox");
    const imgItem = item.querySelector("#imgItem");
    const cardItemBody = item.querySelector("#cardItemBody");
    const cardItemPrice = item.querySelector("#itemPrice");
    const cardItemSize = item.querySelector("#itemSize");
    const cardItemName = item.querySelector("#itemName");

    item.classList.add(cardItem);
    imgPlace.classList.add(cardWrapperWide);
    imgBox.classList.add(cardWrapperImg);
    imgItem.classList.add(cardImg);
    cardItemBody.classList.add(cardBody);
    cardItemPrice.classList.add(itemPrice);
    cardItemSize.classList.add(itemSize);
    cardItemName.classList.add(itemName);
  });
}
