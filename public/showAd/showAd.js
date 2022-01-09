import { styleModule } from "https://unpkg.com/style-module?module";

const showStyles = styleModule({
  show: {
    display: 'flex',
    alignItems: 'center',
    width: "47%",
    padding: 0,
  },
  showWrapper: {
    display: "flex",
  },
  showTitle: {
    textAlign: "center",
    border: "none",
  },
  showText: {
    width: "550px",
    textAlign: "center",
    border: "none",
  },
});

const ad = document.getElementById("show");
const adWrapper = ad.querySelector("#showWrapper");
const adTitle = ad.querySelector("#showTitle");
const adText = ad.querySelector("#showText");

showStylish(showStyles, ad, adWrapper, adTitle, adText);

function showStylish(showCssStyles, ...adSelectors) {
  const { show, showWrapper, showTitle, showText } = showCssStyles;

  adSelectors[0].classList.add(show);
  adSelectors[1].classList.add(showWrapper);
  adSelectors[2].classList.add(showTitle);
  adSelectors[3].classList.add(showText);
}
