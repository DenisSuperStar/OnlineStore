import path from "path";
import { readFileToPromise } from "../../functions/toPromise";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");

export const processDeleteToConfirm = (req, res) => {
  const { id } = req.params;
  console.log(id);

  readFileToPromise(itemFilePath).then((fileToItems) => {
    const items = JSON.parse(fileToItems);
    console.log(items);
    const checkItem = items.find((item) => item._id == id);
    console.log('!!!');
    console.log(checkItem);

    /*if (checkItem) {
      res.redirect(`/item/delete/confirm/${id}`);
    }*/
    res.redirect(`/item/delete/careful/confirm/${id}`);
  });
};
