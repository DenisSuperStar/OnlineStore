import path from "path";
import { ReasonPhrases } from "http-status-codes";

import { autorizeUserForId } from "../../functions/autorizationUserForId";
import { readFileToPromise } from "../../functions/toPromise";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");

export const renderNeckerchief = (req, res) => {
  const { _id } = req.cookies;
  console.log(_id);

  if (autorizeUserForId(_id)) {
    console.log('Работает!');
    readFileToPromise(itemFilePath).then((fileToItems) => {
      const someItems = JSON.parse(fileToItems);
      const neckerchief = [];

      someItems.forEach((item) => {
        const { name } = item;
        console.log(name);

        console.log(name.indexOf('Платок'));
        (name.indexOf("Платок") > -1) ? neckerchief.push(item) : "";
      });

      console.log(neckerchief);

      res.render("neckerchief", {
        title: "Каталог женских шарфиков",
        neckerchief,
      });
    });
  } else {
    res.send(ReasonPhrases.UNAUTHORIZED);
  }
};
