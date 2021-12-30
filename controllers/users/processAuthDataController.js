import path from "path";
import bcrypt from "bcrypt";

import { confirmUser } from "../../functions/confirmUserData";
import { readFileToPromise } from "../../functions/toPromise";

const __dirname = path.resolve();
const userFilePath = path.join(__dirname, "/service/users.json");

export const processAuth = (req, res) => {
  const { body } = req;
  const { nickName, password } = JSON.parse(JSON.stringify(body));

  if (nickName && password) {
    readFileToPromise(userFilePath)
      .then(fileToUsers => {
        const users = JSON.parse(fileToUsers);
        return users.find(user => user.nickName == nickName);
      })
      .then(existUser => {
        return bcrypt.compare(password, existUser.password);
      })
      .then(matchPassword => {
        const userId = confirmUser(nickName);

        if (matchPassword && userId) {
          res.redirect(`/item/public/${userId}`);
        } else {
          res.redirect('/user/account');
        }
      });
  } else {
    res.redirect('/user/account');
  }
};
