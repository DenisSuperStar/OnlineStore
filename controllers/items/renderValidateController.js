import path from "path";
import { validate } from "uuid";
import { ReasonPhrases } from "http-status-codes";
import { createHmac } from "crypto";
import geoip from "geoip-lite";

import { readFileToPromise } from "../../functions/toPromise";
import { getPublicIp } from "../../functions/getPublicIp";
import { getParsedEnv } from "../../config/envConfig";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");
const { ADMIN_LOCATION, CUSTOMER_LOCATION, SYSTEM_DEFINE_LOCATION, CURRENT_LOCATION } = getParsedEnv();

export const renderValidate = async (req, res) => {
  const { id } = req.params;
  const { isId } = validate(id);

  const publicIp = await getPublicIp();
  const location = geoip.lookup(publicIp);
  const { city } = location;

  if (city == ADMIN_LOCATION || city == CUSTOMER_LOCATION) {
    if (isId) {
      readFileToPromise(itemFilePath).then((fileToItems) => {
        const items = JSON.parse(fileToItems);
        const item = items.find((item) => item._id == id);
        const { name } = item;

        const secretCode = name;
        const confirmCodeHash = createHmac("sha256", secretCode).digest("hex");

        res.render("validate", {
          title: "Безвозвратные действия.",
          confirmCode: confirmCodeHash,
        });
      });
    } else {
      res.send(ReasonPhrases.NOT_FOUND);
    }
  } else {
    res.send(ReasonPhrases.FORBIDDEN);
  }
};
