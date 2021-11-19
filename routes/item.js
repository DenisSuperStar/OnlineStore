const { Router } = require('express');
const item = Router();
const multer = require('multer');
const upload = multer({ dest: './uploads' });

const { show } = require('../controllers/items/itemsShowController.js');
const { uploadItem } = require('../controllers/items/uploadItemController.js');
const { uploadItemProcess } = require('../controllers/items/uploadProcessController.js');

item.get('/', show);

item.get('/upload', uploadItem);

item.post('/process', upload.single('item'), uploadItemProcess);

module.exports = {
    items: item
}