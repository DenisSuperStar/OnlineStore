const path = require("path");
const itemFilePath = path.join(__dirname, "../../service/items.json");
const { readFileToPromise } = require("../../config/toPromise");

module.exports.processDelete = (req, res) => {
  const { id } = req.params;

  readFileToPromise(itemFilePath).then((itemData) => {
    const items = JSON.parse(itemData);
    const removeItemById = items.filter((item) => item._id != id);

    const convertItemsToFile = JSON.stringify(removeItemById, null, 4);
    fs.writeFileSync(itemFilePath, convertItemsToFile);
  });
};
