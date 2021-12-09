import path from "path";

import { readFileToPromise } from "../../functions/toPromise";
import { findItem } from "../../functions/findItemById";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");

export const renderDelete = (req, res) => {
  const { id } = req.params;

  readFileToPromise(itemFilePath).then((itemData) => {
    findItem(res, id, itemData, "delete", "Удаление товара.");
  });
};
