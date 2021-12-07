const path = require("path");
const { validate } = require("uuid");
const { ReasonPhrases } = require("http-status-codes");

const { readFileToPromise } = require("../../config/toPromise");
const { findItem } = require("../../config/findItemById");

const itemFilePath = path.join(__dirname, "../../service/items.json");

module.exports.renderAttach = (req, res) => {
  const { uId, id } = req.params;
  const isUserId = validate(uId);

  if (isUserId) {
    readFileToPromise(itemFilePath).then((itemData) => {
      findItem(res, id, itemData, "attach", "Прикрепить изображение.");
    });
  } else {
    res.send(ReasonPhrases.NOT_FOUND);
  }
};
