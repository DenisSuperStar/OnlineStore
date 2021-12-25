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

const previewCard = document.getElementById("previewCard");
const cardImg = document.getElementById("cardImg");

document.addEventListener("DOMContentLoaded", () => {
  previewCardStylish(previewCardStyles, previewCard, cardImg);
});

function previewCardStylish(previewStyles, ...previewCardSelectors) {
  const { selfCardPreview, previewCardImg } = previewStyles;

  previewCardSelectors[0].classList.add(selfCardPreview);
  previewCardSelectors[1].classList.add(previewCardImg);
}
