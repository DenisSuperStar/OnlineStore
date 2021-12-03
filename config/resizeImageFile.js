const { response } = require('express');
const sharp = require('sharp');

module.exports.resizeImage = async (resizeFilePath) => {
    try {
        await sharp(resizeFilePath)
            .resize({
                width: 150,
                height: 150
            })
            .toFormat('jpeg')
            .toFile(resizeFilePath)
    } catch {
        response.sendStatus(404);
    }
}