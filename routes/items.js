const { Router } = require('express');
const item = Router();

const { renderCatalog } = require('../controllers/items/renderItemCatalogController.js');
const { renderConfirm } = require('../controllers/items/renderConfirmFormController.js');
const { processConfirmToUpload } = require('../controllers/items/processConfirmToUploadController.js');
const { processConfirmToDelete } = require('../controllers/items/processConfirmToDeleteController.js');

item.get('/:uId', renderCatalog);

item.get('/upload/confirm', renderConfirm);
item.post('/upload/confirm', processConfirmToUpload);

item.get('/delete/confirm', renderConfirm);
item.post('/delete/confirm', processConfirmToDelete);

module.exports = item;