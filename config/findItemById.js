module.exports.findItem = (res, idx, items, viewName, pageTitle) => {
  const someItems = JSON.parse(items);
  const someItem = someItems.find((item) => item._id == idx);

  res.render(viewName, {
    title: pageTitle,
    selfItem: someItem,
  });
};
