import path from "path";
import { ReasonPhrases } from "http-status-codes";

import { autorizeUserForId } from "../../functions/autorizationUserForId";
import { readFileToPromise } from "../../functions/toPromise";
import { storeFill } from "../../functions/fillingStore";
import { showItemCatalog } from "../../functions/showCatalog";
import { getPublicIp } from "../../functions/getPublicIp";
import { getParsedEnv } from "../../config/envConfig";
import geoip from "geoip-lite";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");
const {
  ADMIN_LOCATION,
  CUSTOMER_LOCATION,
  SYSTEM_DEFINE_LOCATION,
  CURRENT_LOCATION,
} = getParsedEnv();

export const renderCatalog = async (req, res) => {
  const publicIp = await getPublicIp();
  const location = geoip.lookup(publicIp);
  const { city } = location;

  const isPrivateAccess =
    city == ADMIN_LOCATION ||
    city == CUSTOMER_LOCATION ||
    city == SYSTEM_DEFINE_LOCATION ||
    city == CURRENT_LOCATION
      ? true
      : false;

      const { _id } = req.cookies;

      if (autorizeUserForId(_id)) {
        readFileToPromise(itemFilePath).then((fileToItems) => {
          showItemCatalog(
            res,
            fileToItems,
            storeFill,
            "home",
            "Каталог товаров.",
            isPrivateAccess
          );
        });
      } else {
        res.send(ReasonPhrases.UNAUTHORIZED);
      }
};
