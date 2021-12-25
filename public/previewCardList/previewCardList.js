import { styleModule } from "https://unpkg.com/style-module?module";

const previewCardList = styleModule({
  cardList: {
    marginTop: "50px",
    borderRadius: "30px",
  },
  fluidBox: {
    paddingTop: "72px",
    paddingBottom: "112px",
  },
  previewCardGrid: {
    display: "flex",
    justifyContent: "center",
  },
});

const previewList = document.getElementById("cardList");
const fluidList = document.getElementById("fluidList");
const cardGrid = document.getElementById("cardGrid");

document.addEventListener("DOMContentLoaded", () => {
  cardListStylish(previewCardList, previewList, fluidList, cardGrid);
});

function cardListStylish(previewCardStyles, ...cardListSelectors) {
  const { cardList, fluidBox, previewCardGrid } = previewCardStyles;

  cardListSelectors[0].classList.add(cardList);
  cardListSelectors[1].classList.add(fluidBox);
  cardListSelectors[2].classList.add(previewCardGrid);
}
