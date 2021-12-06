const path = require("path");
const { readFileToPromise } = require("../../config/toPromise");

const itemFilePath = path.join(__dirname, "../../service/items.json");

module.exports.processDeleteToConfirm = (req, res) => {
  const { id } = req.params;

  readFileToPromise(itemFilePath).then((fileToItems) => {
    const items = JSON.parse(fileToItems);
    const itemId = items.findIndex((item) => item._id == id);

    if (itemId) {
      res.redirect(`/item/delete/confirm/${itemId}`);
    } else {
      /* 404 */
    }
  });
};
