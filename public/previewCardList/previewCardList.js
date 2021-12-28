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
const cardGrids = document.querySelectorAll("#cardGrid");

cardListStylish(previewCardList, previewList, fluidList, cardGrids);

function cardListStylish(previewCardStyles, ...cardListSelectors) {
  const { cardList, fluidBox, previewCardGrid } = previewCardStyles;

  try {
    cardListSelectors[0].classList.add(cardList);
  } catch {}
  try {
    cardListSelectors[1].classList.add(fluidBox);
  } catch {}
  try {
    cardListSelectors[2].forEach((value) => {
      value.classList.add(previewCardGrid);
    });
  } catch {}
}
