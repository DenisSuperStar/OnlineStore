import path from "path";
import { readFileToPromise } from "../../functions/toPromise";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");

export const processDeleteToConfirm = (req, res) => {
  const { id } = req.params;

  readFileToPromise(itemFilePath).then((fileToItems) => {
    const items = JSON.parse(fileToItems);
    const itemId = items.findIndex((item) => item._id == id);

    if (itemId) {
      res.redirect(`/item/delete/confirm/${itemId}`);
    }
  });
};
