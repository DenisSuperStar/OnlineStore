import path from "path";
import { validate } from "uuid";
import { ReasonPhrases } from "http-status-codes";
import { createHmac } from "crypto";

import { readFileToPromise } from "../../functions/toPromise";
import { getPublicIp } from "../../functions/getPublicIp";
import { getParsedEnv } from "../../config/envConfig";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");
const { ADMIN_IP, CUSTOMER_IP } = getParsedEnv();

export const renderValidate = (req, res) => {
  const publicIp = getPublicIp();
  if (publicIp == ADMIN_IP || publicIp == CUSTOMER_IP) {
    const { id } = req.params;
    const isId = validate(id);

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
