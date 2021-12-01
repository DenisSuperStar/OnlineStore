module.exports.renderCatalog = (req, res) => {
  res.render("home", {
    title: "Каталог товаров.",
  });
};
