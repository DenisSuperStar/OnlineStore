import path from "path";
import fs from "fs";

import { readFileToPromise } from "../../functions/toPromise";
import { getUserData } from "../../functions/userData";
import { getMatchPassword } from "../../functions/matchPassword";

const __dirname = path.resolve();
const userFilePath = path.join(__dirname, "/service/users.json");
const itemFilePath = path.join(__dirname, "/service/items.json");

export const processConfirmToDelete = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { nickName, password, confirmCode, repeatConfirmCode } = JSON.parse(
    JSON.stringify(body)
  );

  readFileToPromise(userFilePath)
    .then((fileToUsers) => {
      return getUserData(fileToUsers, nickName);
    })
    .then((dataUser) => {
      return getMatchPassword(dataUser, password);
    })
    .then((equalPassword) => {
      return equalPassword ? confirmCode.localeCompare(repeatConfirmCode) : 0;
    })
    .then((dataConfirm) => {
      const isConfirm = dataConfirm == 0 ? true : false;

      if (isConfirm) {
        readFileToPromise(itemFilePath).then((allItems) => {
          const items = JSON.parse(allItems);
          const item = items.find((value) => value._id == id);

          const newItems = items.filter((someItem) => someItem._id != item._id);
          const convertNewItems = JSON.stringify(newItems, null, 4);

          fs.writeFileSync(itemFilePath, convertNewItems);
        });

        res.redirect("/user/account");
      } else {
        res.redirect(`/item/delete/confirm/${id}`);
      }
    });
};
