import path from "path";
import { validate } from "uuid";
import { ReasonPhrases } from "http-status-codes";

import { readFileToPromise } from "../../functions/toPromise";
import { findItem } from "../../functions/findItemById";
import { getPublicIp } from "../../functions/getPublicIp";
import { getParsedEnv } from "../../config/envConfig";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");
const { ADMIN_IP, CUSTOMER_IP } = getParsedEnv();

export const renderDelete = (req, res) => {
  const publicIp = getPublicIp();

  if (publicIp == ADMIN_IP || publicIp == CUSTOMER_IP) {
    const { id } = req.params;
    const isId = validate(id);

    if (isId) {
      readFileToPromise(itemFilePath).then((itemData) => {
        findItem(res, id, itemData, "delete", "Удаление товара.");
      });
    } else {
      res.send(ReasonPhrases.NOT_FOUND);
    }
  } else {
    res.send(ReasonPhrases.FORBIDDEN);
  }
};
