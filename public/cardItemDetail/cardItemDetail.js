import { styleModule } from "https://unpkg.com/style-module?module";

const cardStyles = styleModule({
  cardItem: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    background: "linear-gradient(45deg, #6c757d 20%, #f8f9fa 40%)",
    border: "none",
    borderRadius: "25px",
  },
  cardHeader: {
    width: "50%",
    borderTopLeftRadius: "25px !important",
    borderBottomLeftRadius: "25px !important",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    background: "transparent",
  },
  cardImg: {
    borderRadius: "25px",
  },
  itemBody: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  itemPrice: {
    fontWeight: 600,
    fontSize: "18px",
  },
  itemName: {
    fontSize: "14px",
  },
  btnRemove: {
    transition: "all .5s",
  },
});

const cards = document.querySelectorAll("#cardItem");

cardItemStylish(cardStyles, cards);

function cardItemStylish(styles, items) {
  const {
    cardItem,
    cardHeader,
    cardImg,
    itemBody,
    itemPrice,
    itemName,
    btnRemove,
  } = styles;

  items.forEach((item) => {
    const cardDetailHead = item.querySelector("#cardHeader");
    const cardDetailImage = item.querySelector("#cardImg");
    const cardDetailBody = item.querySelector("#cardBody");
    const cardItemPrice = item.querySelector("#itemPrice");
    const cardItemName = item.querySelector("#itemName");
    const removeItemLink = item.querySelector("#removeItem");

    item.classList.add(cardItem);
    cardDetailHead.classList.add(cardHeader);
    cardDetailImage.classList.add(cardImg);
    cardDetailBody.classList.add(itemBody);
    cardItemPrice.classList.add(itemPrice);
    cardItemName.classList.add(itemName);
    removeItemLink.classList.add(btnRemove);
  });
}
