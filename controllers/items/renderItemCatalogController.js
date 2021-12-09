import path from "path";
import { validate } from "uuid";
import { ReasonPhrases } from "http-status-codes";

import { readFileToPromise } from "../../functions/toPromise";
import { storeFill } from "../../functions/fillingStore";
import { showItemCatalog } from "../../functions/showCatalog";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");

export const renderCatalog = (req, res) => {
  const { uId } = req.params;
  const isUserId = validate(uId);

  if (isUserId) {
    readFileToPromise(itemFilePath).then((fileToItems) => {
      showItemCatalog(res, fileToItems, storeFill, "home", "Каталог товаров.");
    });
  } else {
    res.send(ReasonPhrases.NOT_FOUND);
  }
};
