import path from "path";
import { ReasonPhrases } from "http-status-codes";

import { readFileToPromise } from "../../functions/toPromise";
import { storeFill } from "../../functions/fillingStore";
import { showItemCatalog } from "../../functions/showCatalog";
import { getPublicIp } from "../../functions/getPublicIp";
import { getParsedEnv } from "../../config/envConfig";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");
const { ADMIN_IP, CUSTOMER_IP } = getParsedEnv();

export const renderScope = async (req, res) => {
  const publicIp = await getPublicIp();

  if (publicIp == ADMIN_IP || publicIp == CUSTOMER_IP) {
    readFileToPromise(itemFilePath).then((dataAllItems) => {
      showItemCatalog(
        res,
        dataAllItems,
        storeFill,
        "scope",
        "Управление товарами.",
        false
      );
    });
  } else {
    res.send(ReasonPhrases.FORBIDDEN);
  }
};
