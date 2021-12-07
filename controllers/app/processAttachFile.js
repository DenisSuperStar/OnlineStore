const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const { readFileToPromise } = require("../../config/toPromise");

const itemFilePath = path.join(__dirname, "../../service/items.json");

module.exports.processAttach = (req, res) => {
  const { file, body } = req;
  const { itemId } = JSON.parse(JSON.stringify(body));
  const { mimetype } = file;

  if (
    mimetype == "image/png" ||
    mimetype == "image/jpg" ||
    mimetype == "image/jpeg"
  ) {
    const { name, ext } = path.parse(file.path);

    try {
      sharp(path.join(__dirname, `/../../${file.path}`))
        .resize({
          width: 200,
          height: 200,
        })
        .toFile(path.join(__dirname, `../../resize/${name}-resized${ext}`));
    } catch {
      res.send("Файл не загрузился, либо указан неверный путь!");
    }

    readFileToPromise(itemFilePath).then((fileToItems) => {
      const items = JSON.parse(fileToItems);
      const item = items.find((item) => item._id == itemId);

      item.imgPath = `../../${name}-resized${ext}`;

      const convertItemsToFile = JSON.stringify(items, null, 4);
      fs.writeFileSync(itemFilePath, convertItemsToFile);
    });

    res.redirect("/");
  } else {
    res.send("Возможно, вы пытаетесь загрузить файл неверного формата...");
  }
};
