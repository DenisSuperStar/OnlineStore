export const isSaveItem = (body) => {
  const { itemName, size, stuff, price } = JSON.parse(JSON.stringify(body));

  const isSaveItem = itemName && size && stuff && price ? true : false;

  return isSaveItem;
};
