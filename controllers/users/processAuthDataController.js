import path from "path";
import { v4 } from "uuid";

import { readFileToPromise } from "../../functions/toPromise";
import { getUserData } from "../../functions/userData";
import { getMatchPassword } from "../../functions/matchPassword";

const __dirname = path.resolve();
const userFilePath = path.join(__dirname, "/service/users.json");

export const processAuth = (req, res) => {
  const { body } = req;
  const { nickName, password } = JSON.parse(JSON.stringify(body));

  if (nickName && password) {
    readFileToPromise(userFilePath)
      .then((fileToUsers) => {
        return getUserData(fileToUsers, nickName);
      })
      .then((dataUser) => {
        return getMatchPassword(dataUser, password);
      })
      .then((equalPassword) => {
        if (equalPassword) {
          const uniqCode = v4();

          res.redirect(`/item/public/${uniqCode}`);
        } else {
          res.redirect("/user/account");
        }
      });
  } else {
    res.redirect("/user/account");
  }
};
