import fs from "fs";

export const saveItem = (body, currentItem, itemDb, itemDbPath) => {
  const { itemName, size, stuff, price } = JSON.parse(JSON.stringify(body));

  currentItem._id = v4();
  currentItem.name = itemName;
  currentItem.size = size;
  currentItem.stuff = stuff;
  currentItem.price = price;

  itemDb.push(currentItem);

  const convertItemsToFile = JSON.stringify(itemDb, null, 4);
  fs.writeFileSync(itemDbPath, convertItemsToFile);
};
