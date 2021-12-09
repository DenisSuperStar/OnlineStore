import path from "path";
import { writeFileSync } from "fs";

import { readFileToPromise } from "../../functions/toPromise";
import { getUserData } from "../../functions/userData";
import { getMatchPassword } from "../../functions/matchPassword";

const __dirname = path.resolve();
const userFilePath = path.join(__dirname, "/service/users.json");
const itemFilePath = path.join(__dirname, "/service/items.json");

export const processConfirmToDelete = (req, res) => {
  const { body } = req;
  const { nickName, password, itemId, confirmCode } = JSON.parse(
    JSON.stringify(body)
  );

  if (!nickName || !password)
    return res.redirect(`/item/delete/confirm/${itemId}`);

  readFileToPromise(userFilePath)
    .then((fileToUsers) => {
      return getUserData(fileToUsers, nickName);
    })
    .then((dataUser) => {
      return getMatchPassword(dataUser, password);
    })
    .then((equalPassword) => {
      if (equalPassword) {
        const matchCodes = itemId.localeCompare(confirmCode);

        return matchCodes;
      } else {
        return -1;
      }
    })
    .then((dataConfirm) => {
      if (dataConfirm == 0) {
        readFileToPromise(itemFilePath).then((allItems) => {
          const items = JSON.parse(allItems);
          const item = items.find((item) => item._id == itemId);

          const newItems = items.filter((anyItem) => anyItem._id != item._id);
          const convertNewItems = JSON.stringify(newItems, null, 4);

          writeFileSync(itemFilePath, convertNewItems);
        });

        res.redirect("/user/account");
      } else {
        res.redirect(`/item/delete/confirm/${itemId}`);
      }
    });
};
