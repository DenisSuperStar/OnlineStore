import path from "path";
import { ReasonPhrases } from "http-status-codes";
import geoip from "geoip-lite";

import { readFileToPromise } from "../../functions/toPromise";
import { storeFill } from "../../functions/fillingStore";
import { showItemCatalog } from "../../functions/showCatalog";
import { getPublicIp } from "../../functions/getPublicIp";
import { getParsedEnv } from "../../config/envConfig";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");
const {
  ADMIN_LOCATION,
  CUSTOMER_LOCATION,
  SYSTEM_DEFINE_LOCATION,
  CURRENT_LOCATION,
} = getParsedEnv();

export const renderScope = async (req, res) => {
  const publicIp = await getPublicIp();
  const location = geoip.lookup(publicIp);
  const { city } = location;

  if (
    city == ADMIN_LOCATION ||
    city == CUSTOMER_LOCATION ||
    city == SYSTEM_DEFINE_LOCATION ||
    city == CURRENT_LOCATION
  ) {
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
