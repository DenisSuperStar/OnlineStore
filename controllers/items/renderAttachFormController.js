import path from "path";
import { validate } from "uuid";
import { ReasonPhrases } from "http-status-codes";

import { readFileToPromise } from "../../functions/toPromise";
import { findItem } from "../../functions/findItemById";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");

export const renderAttach = (req, res) => {
  const { id } = req.params;
  const isId = validate(id);

  if (isId) {
    readFileToPromise(itemFilePath).then((itemData) => {
      findItem(res, id, itemData, "attach", "Прикрепить изображение.");
    });
  } else {
    res.send(ReasonPhrases.NOT_FOUND);
  }
}
