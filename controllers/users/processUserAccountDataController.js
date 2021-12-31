import path from "path";

import { readFileToPromise } from "../../functions/toPromise";
import { checkAccount } from "../../functions/checkUserAccount";
import { createUser } from "../../functions/createNewUser";
import { saveUser } from "../../functions/saveUserToDb";

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
        let currentUser = new Object();

        currentUser = createUser(body, currentUser);
        saveUser(currentUser, users, userFilePath);
        let id = saveUserToSessionStorage(currentUser);

        res.redirect(`/item/public/${id}`);
      } else {
        res.redirect("/user/auth");
      }
    });
  } else {
    res.redirect("/user/account");
  }
};
