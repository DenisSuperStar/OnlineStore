import path from "path";
import { ReasonPhrases } from "http-status-codes";

import { autorizeUserForId } from "../../functions/autorizationUserForId";
import { readFileToPromise } from "../../functions/toPromise";

const __dirname = path.resolve();
const itemFilePath  = path.join(__dirname, "/service/items.json");

export const renderHandkerchiefs = (req, res) => {
    const { _id } = req.cookies;

    if (autorizeUserForId(_id)) {
        readFileToPromise(itemFilePath).then(fileToItems => {
            const someItems = JSON.parse(fileToItems);
            const handkerchief = someItems.find(item => {
                return item.indexOf('Платок') ? item : "";
            });

            res.render('handkerchief', {
                title: 'Каталог женских платочков',
                handkerchief
            });
        });
    } else {
        res.send(ReasonPhrases.UNAUTHORIZED);
    }
}