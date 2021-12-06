module.exports.showItemCatalog = (
  res,
  items,
  isItemFill,
  viewName,
  pageTitle
) => {
  const someItems = JSON.parse(items);
  const isSomeItem = someItems.some(isItemFill);

  res.render(viewName, {
    title: pageTitle,
    someItems,
    isSomeItem,
  });
};
