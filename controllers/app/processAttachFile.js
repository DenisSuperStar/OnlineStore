const path = require("path");
const fs = require("fs");
const { readFileToPromise } = require("../../config/toPromise");
const itemFilePath = path.join(__dirname, "../../service/items.json");

module.exports.processAttach = (req, res) => {
  const { file, body } = req;
  console.log(file);
  console.log(body);
  const { originalname } = file;
  const { itemId } = JSON.parse(JSON.stringify(body));
  console.log(itemId);

  readFileToPromise(itemFilePath).then((fileToItems) => {
    const items = JSON.parse(fileToItems);
    const item = items.find((item) => item._id == itemId);

    item.imgPath = `../../${originalname}`;

    const convertItemsToFile = JSON.stringify(items, null, 4);
    fs.writeFileSync(itemFilePath, convertItemsToFile);

    res.redirect("/");
  });
};
