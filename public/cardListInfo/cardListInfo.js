import { styleModule } from "https://unpkg.com/style-module?module";

const cardListInfoStyles = styleModule({
  listInfo: {
    paddingTop: "50px",
    background: "#fff",
    borderRadius: "16px",
    margin: "0 50px",
  },
});

const cardInfo = document.getElementById("cardListInfo");

document.addEventListener("DOMContentLoaded", () => {
  cardListInfoStylish(cardListInfoStyles, cardInfo);
});

function cardListInfoStylish(cardListInfo, ...cardListSelectors) {
  const { listInfo } = cardListInfo;

  cardListSelectors[0].classList.add(listInfo);
}
