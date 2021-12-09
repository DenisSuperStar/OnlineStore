import path from "path";

import { readFileToPromise } from "../../functions/toPromise";
import { saveItem } from "../../functions/saveItem";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");

export const processScope = (req, res) => {
  const { body } = req;
  const { uId } = req.params;

  readFileToPromise(itemFilePath).then((fileToItems) => {
    const items = JSON.parse(fileToItems);
    const item = new Object();
    
    saveItem(body, item, items, itemFilePath);

    res.redirect(`/item/upload/${uId}/${item._id}`);
  });
};
