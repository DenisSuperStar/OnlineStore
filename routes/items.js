const { Router } = require("express");
const item = Router();

const {
  renderCatalog,
} = require("../controllers/items/renderItemCatalogController.js");
const {
  renderConfirm,
} = require("../controllers/items/renderConfirmFormController.js");
const {
  processConfirmToScope,
} = require("../controllers/items/processConfirmToUploadController.js");
const {
  processConfirmToDelete,
} = require("../controllers/items/processConfirmToDeleteController.js");
const {
  renderScope,
} = require("../controllers/items/renderUploadFormController.js");
const {
  processScope,
} = require("../controllers/items/processUploadDataController.js");
const {
  renderDelete,
} = require("../controllers/items/renderDeleteFormController.js");
const {
  processDelete,
} = require("../controllers/items/processDeleteDataController.js");
const {
  renderAttach,
} = require("../controllers/items/renderAttachFormController.js");

item.get("/:uId", renderCatalog);

item.get("/scope/confirm", renderConfirm);
item.post("/scope/confirm", processConfirmToScope);

item.get("/scope/:uId/", renderScope);
item.post("/scope/:uId/", processScope);

item.get("/scope/:id", renderAttach);

item.get("/delete/confirm", renderConfirm);
item.post("/delete/confirm", processConfirmToDelete);

item.get("/delete/:uId/:id", renderDelete);
item.post("/delete/:uId/:id", processDelete);

module.exports = item;
