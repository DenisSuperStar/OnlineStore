import path from "path";
import { readFileToPromise } from "../../functions/toPromise";
import { getPublicIp } from "../../functions/getPublicIp";
import geoip from "geoip-lite";

const __dirname = path.resolve();
const itemFilePath = path.join(__dirname, "/service/items.json");

export const renderPreview = async (req, res) => {
  const addressIp = await getPublicIp();
  const location = geoip.lookup(addressIp);
  const { city } = location;

  readFileToPromise(itemFilePath).then((fileToItems) => {
    const items = JSON.parse(fileToItems);

    res.render("preview", {
      title: "Интернет-магазин, распродажа женской одежды",
      thumbnails: items,
      city
    });
  });
};
