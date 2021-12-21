import path from "path";
import { validate } from "uuid";
import { ReasonPhrases } from "http-status-codes";

import { readFileToPromise } from "../../functions/toPromise";
import { storeFill } from "../../functions/fillingStore";
import { showItemCatalog } from "../../functions/showCatalog";
import { getPublicIp } from "../../functions/getPublicIp";
import { getParsedEnv } from "../../config/envConfig";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");
const { ADMIN_IP, CUSTOMER_IP } = getParsedEnv();

export const renderCatalog = async (req, res) => {
  const publicIp = await getPublicIp();
  const isPrivateAccess = ((publicIp == ADMIN_IP) || (publicIp == CUSTOMER_IP)) ? true : false;

  const { uId } = req.params;
  const isUserId = validate(uId);

  if (isUserId) {
    readFileToPromise(itemFilePath).then((fileToItems) => {
      showItemCatalog(res, fileToItems, storeFill, "home", "Каталог товаров.", isPrivateAccess);
    });
  } else {
    res.send(ReasonPhrases.NOT_FOUND);
  }
};
