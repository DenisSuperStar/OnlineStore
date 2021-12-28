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
const cardImges = document.querySelectorAll("#cardImg");

previewCardStylish(previewCardStyles, previewCards, cardImges);

function previewCardStylish(previewStyles, ...previewCardSelectors) {
  const { selfCardPreview, previewCardImg } = previewStyles;

  try {
    previewCardSelectors[0].forEach((value) => {
      value.classList.add(selfCardPreview);
    });
  } catch {}

  try {
    previewCardSelectors[1].forEach((value) => {
      value.classList.add(previewCardImg);
    });
  } catch {}
}
