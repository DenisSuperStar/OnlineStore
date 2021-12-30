import path from "path";
import bcrypt from "bcrypt";
import fs from "fs";

import { readFileToPromise } from "../../functions/toPromise";

const __dirname = path.resolve();
const userFilePath = path.join(__dirname, "/service/users.json");
const itemFilePath = path.join(__dirname, "/service/items.json");

export const confirmPersonToDelete = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { nickName, password, confirmCode, repeatConfirmCode } = JSON.parse(
    JSON.stringify(body)
  );

  readFileToPromise(userFilePath)
    .then((fileToUsers) => {
      const users = JSON.parse(fileToUsers);
      return users.find((user) => user.nickName == nickName);
    })
    .then((someUser) => {
      return bcrypt.compare(password, someUser.password);
    })
    .then((matchPassword) => {
      return matchPassword ? confirmCode.localCompare(repeatConfirmCode) : -1;
    })
    .then((matchUp) => {
      const isSuccessMatch = matchUp == 0 ? true : false;

      if (isSuccessMatch) {
        readFileToPromise(itemFilePath).then((allItems) => {
          const items = JSON.parse(allItems);
          const item = items.find((value) => value._id == id);

          const newItems = items.filter((someItem) => someItem._id == item._id);
          const convertNewItems = JSON.stringify(newItems, null, 4);

          fs.writeFileSync(itemFilePath, convertNewItems);
        });

        res.redirect("/item/access/private");
      } else {
        res.redirect(`/item/delete/confirm/${id}`);
      }
    });
};
