export const showItemCatalog = (
  res,
  items,
  isItemFill,
  viewName,
  pageTitle,
  isPrivateAccess
) => {
  const someItems = JSON.parse(items);
  const isSomeItem = someItems.some(isItemFill);

  res.render(viewName, {
    title: pageTitle,
    someItems,
    isSomeItem,
    isPrivateAccess
  });
};
