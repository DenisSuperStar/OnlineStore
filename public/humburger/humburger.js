import { styleModule } from "https://unpkg.com/style-module?module";

const humburgerMenuStyles = styleModule({
  humburgerBtn: {
    display: "none",
  },
  humburgerMenu: {
    display: "inline-block",
  },
  humburgerItem: {
    width: "24px",
    height: "3px",
    background: "#fff",
    borderRadius: "5px",
    margin: "6px 0",
    transition: ".4s",
  },
});

const btnMenu = document.getElementById("menuButton");
const selfMenu = document.getElementById("humburger");
const itemsMenu = btnMenu.querySelectorAll("#humburgerItem");

document.addEventListener("DOMContentLoaded", () => {
  humburgerStylish(humburgerMenuStyles, btnMenu, selfMenu, itemsMenu);
});

function humburgerStylish(humburgerStyles, ...humburgerSelectors) {
  const { humburgerBtn, humburgerMenu, humburgerItem } = humburgerStyles;
  try {
    humburgerSelectors[0].classList.add(humburgerBtn);
  } catch {}
  try {
    humburgerSelectors[1].classList.add(humburgerMenu);
  } catch {}
  try {
    humburgerSelectors[2].forEach((item) => {
      item.classList.add(humburgerItem);
    });
  } catch {}
}
