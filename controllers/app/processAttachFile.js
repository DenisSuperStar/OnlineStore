const path = require("path");
const { readFileToPromise } = require("../../config/toPromise");
const { resizeImage } = require("../../config/resizeImageFile");
const itemFilePath = path.join(__dirname, "../../service/items.json");

module.exports.processAttach = (req, res) => {
  const { file, body } = req;
  const { itemId } = JSON.parse(JSON.stringify(body));

  if (!file) return res.redirect(`/upload/${itemId}`);

  readFileToPromise(itemFilePath).then((res) => {
    const items = JSON.parse(res);
    const item = items.find((item) => item._id == itemId);
    const { originalname } = file;
    const attachFilePath = `./${attachFileFolder}/${originalname}`;

    resizeImage(attachFilePath);

    item.attach = path.join(__dirname, attachFilePath);
  });
};
