import { v4 } from "uuid";
import path from "path";

import { readFileToPromise } from "../../functions/toPromise";
import { getUserData } from "../../functions/userData";
import { getMatchPassword } from "../../functions/matchPassword";

const __dirname = path.resolve();
const userFilePath = path.join(__dirname, "/service/users.json");

export const processConfirmToScope = (req, res) => {
  const { body } = req;
  const { nickName, password } = JSON.parse(JSON.stringify(body));

  if (!nickName || !password) return res.redirect("/item/scope/confirm");

  readFileToPromise(userFilePath)
    .then((fileToUsers) => {
      return getUserData(fileToUsers, nickName);
    })
    .then((dataUser) => {
      return getMatchPassword(dataUser, password);
    })
    .then((equalPassword) => {
      if (equalPassword) {
        const userId = v4();

        res.redirect(`/item/scope/${userId}`);
      } else {
        res.redirect("/item/scope/confirm");
      }
    });
};
