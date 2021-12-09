import path from "path";
import { validate } from "uuid";
import { ReasonPhrases } from "http-status-codes";

import { readFileToPromise } from "../../functions/toPromise";
import { findItem } from "../../functions/findItemById";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");

export const renderAttach = (req, res) => {
  const { uId, id } = req.params;
  const isUserId = validate(uId);

  if (isUserId) {
    readFileToPromise(itemFilePath).then((itemData) => {
      findItem(res, id, itemData, "attach", "Прикрепить изображение.");
    });
  } else {
    res.send(ReasonPhrases.NOT_FOUND);
  }
}
