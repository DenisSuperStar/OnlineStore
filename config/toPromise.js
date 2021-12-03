const fs = require('fs');

module.exports.readFileToPromise = (dirFile) => {
    return new Promise((res, rej) => {
        fs.readFile(dirFile, 'utf-8', (err, data) => {
            if (err) rej(err);
            else res(data);
        });
    });
}