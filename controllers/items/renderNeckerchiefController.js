import path from "path";
import { ReasonPhrases } from "http-status-codes";

import { autorizeUserForId } from "../../functions/autorizationUserForId";
import { readFileToPromise } from "../../functions/toPromise";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");

export const renderNeckerchief = (req, res) => {
  const { _id } = req.cookies;

  if (autorizeUserForId(_id)) {
    readFileToPromise(itemFilePath).then((fileToItems) => {
      const someItems = JSON.parse(fileToItems);
      const neckerchief = someItems.find((item) => {
        const { name } = item;

        return name.indexOf("Шарф") ? item : "";
      });

      res.render("neckerchief", {
        title: "Каталог женских шарфиков",
        neckerchief,
      });
    });
  } else {
    res.send(ReasonPhrases.UNAUTHORIZED);
  }
};
