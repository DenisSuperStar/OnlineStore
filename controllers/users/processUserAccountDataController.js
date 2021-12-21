import path from "path";
import { v4 } from "uuid";

import { readFileToPromise } from "../../functions/toPromise";
import { checkAccount } from "../../functions/checkUserAccount";
import { saveUser } from "../../functions/saveUserAccount";

const __dirname = path.resolve();
const userFilePath = path.join(__dirname, "/service/users.json");

export const processAccount = async (req, res) => {
  const { body } = req;

  if (checkAccount(body)) {
    readFileToPromise(userFilePath).then((fileToUsers) => {
      const users = JSON.parse(fileToUsers);
      const currentUser = users.find(
        (user) =>
          user.firstName == body.firstName && user.lastName == body.lastName
      );

      if (!currentUser) {
        const currentUser = new Object();
        const uniqCode = v4();

        saveUser(body, currentUser, uniqCode, users, userFilePath);

        res.redirect(`/item/public/${uniqCode}`);
      } else {
        res.redirect("/user/auth");
      }
    });
  } else {
    res.redirect("/user/account");
  }
};
