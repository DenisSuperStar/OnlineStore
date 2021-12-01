const { Router } = require('express');
const item = Router();

const { renderCatalog } = require('../controllers/items/renderItemCatalogController.js');
const { renderConfirm } = require('../controllers/items/renderConfirmFormController.js');
const { processConfirmToUpload } = require('../controllers/items/processConfirmToUploadController.js');
const { processConfirmToDelete } = require('../controllers/items/processConfirmToDeleteController.js');
const { renderUpload } = require('../controllers/items/renderUploadFormController.js');
const { processUpload } = require('../controllers/items/processUploadDataController.js');
const { renderDelete } = require('../controllers/items/renderDeleteFormController.js');
const { processDelete } = require('../controllers/items/processDeleteDataController.js');
const { renderAttach } = require('../controllers/items/renderAttachFormController.js');

item.get('/:uId', renderCatalog);

item.get('/upload/confirm', renderConfirm);
item.post('/upload/confirm', processConfirmToUpload);

item.get('/upload/:uId/', renderUpload);
item.post('/upload/:uId/', processUpload);

item.get('/upload/:id', renderAttach);

item.get('/delete/confirm', renderConfirm);
item.post('/delete/confirm', processConfirmToDelete);

item.get('/delete/:uId/:id', renderDelete);
item.post('/delete/:uId/:id', processDelete);

module.exports = item;