import { writeFileSync } from "fs";
import path from "path";
import { v4 } from "uuid";

import { readFileToPromise } from "../../functions/toPromise";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");

export const processScope = (req, res) => {
  const { body } = req;
  const { itemName, size, stuff, price } = JSON.parse(JSON.stringify(body));

  if (!itemName || !size || !stuff || !price)
    return res.redirect(`/item/scope/${req.params.uId}`);

  readFileToPromise(itemFilePath).then((fileToItems) => {
    const items = JSON.parse(fileToItems);
    const item = new Object();

    item._id = v4();
    item.name = itemName;
    item.size = size;
    item.stuff = stuff;
    item.price = price;

    items.push(item);

    const convertItemsToFile = JSON.stringify(items, null, 4);
    writeFileSync(itemFilePath, convertItemsToFile);

    res.redirect(`/item/upload/${req.params.uId}/${item._id}`);
  });
};
