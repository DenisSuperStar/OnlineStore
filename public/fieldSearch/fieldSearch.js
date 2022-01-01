import { styleModule } from "https://unpkg.com/style-module?module";

const searchFieldStyles = styleModule({
  search: {
    width: "calc(50% - 25px)",
    height: "56px",
    borderRadius: "25px",
    background: 'linear-gradient(85deg, #0d6efd, #dc3545)',
    opacity: 0.8,
    border: "none",
    color: "#fff",
    cursor: "pointer",
    transition: "background ease-in-out .5s",
  },
});

const fieldSearch = document.getElementById("search");

fieldSearchStylish(searchFieldStyles, fieldSearch);

function fieldSearchStylish(searchStyles, field) {
  const { search } = searchStyles;

  field.classList.add(search);
}
