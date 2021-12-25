import { styleModule } from "https://unpkg.com/style-module?module";

const previewCardStyles = styleModule({
  selfCardPreview: {
    width: "336px",
    borderRadius: "25px",
    border: "none",
  },
  previewCardImg: {
    borderRadius: "25px",
  },
});

const previewCards = document.querySelectorAll("#previewCard");
console.log(previewCards);
const cardImges = document.querySelectorAll("#cardImg");
console.log(cardImges);

document.addEventListener("DOMContentLoaded", () => {
  previewCardStylish(previewCardStyles, previewCards, cardImges);
});

function previewCardStylish(previewStyles, ...previewCardSelectors) {
  const { selfCardPreview, previewCardImg } = previewStyles;

  previewCardSelectors[0].forEach((value) => {
    value.classList.add(selfCardPreview);
  });

  previewCardSelectors[1].forEach((value) => {
    value.classList.add(previewCardImg);
  });
}
