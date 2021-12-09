import path from "path";
import { writeFileSync } from "fs";
import sharp from "sharp";

import { readFileToPromise } from "../../functions/toPromise";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");

export const processAttach = (req, res) => {
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
      sharp(path.join(__dirname, file.path))
        .resize({
          width: 200,
          height: 200,
        })
        .toFile(path.join(__dirname, `/resize/${name}-resized${ext}`))
    } catch {
      res.send("Файл не загрузился, либо указан неверный путь!");
    }

    readFileToPromise(itemFilePath).then((fileToItems) => {
      const items = JSON.parse(fileToItems);
      const item = items.find((item) => item._id == itemId);

      item.imgPath = `../../${name}-resized${ext}`;

      const convertItemsToFile = JSON.stringify(items, null, 4);
      writeFileSync(itemFilePath, convertItemsToFile);
    });

    res.redirect("/");
  } else {
    res.send("Возможно, вы пытаетесь загрузить файл неверного формата...");
  }
};
