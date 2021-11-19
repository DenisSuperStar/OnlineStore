const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');
const itemsPath = '../../service/items.json';

module.exports.uploadItemProcess = (req, res) => {
    const { file, body } = req;

    if (!file) {
        res.send('Ошибка загрузки файла!');

        setTimeout(() => res.redirect('/item/upload'), 3000);
    } else {
        var { filename } = file
    }

    const anyBody = JSON.parse(JSON.stringify(body));
    const { itName, size, stuff, price } = anyBody;

    if (!itName || !size) return res.redirect('/item/upload');

    const readItemsFileToPromise = (itemsFilePath) => {
        return new Promise((res, rej) => {
            fs.readFile(itemsFilePath, 'utf-8', (err, info) => {
                if (err) rej(err);
                else res(info);
            });
        });
    }

    readItemsFileToPromise(itemsPath)
        .then(itemsInfo => {
            const items = JSON.parse(itemsInfo);
            const item = {
                id: v4(),
                name: itName,
                size: size,
                stuff: stuff,
                price: price,
                img: path.join(__dirname, `../../uploads/${filename}`)
            }

            items.push(item);
            
            const convertInfo = JSON.stringify(items, null, 4);

            fs.writeFileSync(itemsPath, convertInfo);
        });
}