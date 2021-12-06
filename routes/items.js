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
} = require("../controllers/items/processConfirmToScopeController.js");
const {
  processConfirmToDelete,
} = require("../controllers/items/processConfirmToDeleteController.js");
const {
  renderScope,
} = require("../controllers/items/renderScopeFormController.js");
const {
  processScope,
} = require("../controllers/items/processScopeDataController.js");
const {
  renderDelete,
} = require("../controllers/items/renderDeleteFormController.js");
const {
  processDeleteToConfirm,
} = require("../controllers/items/processDeleteToConfirmController");
const {
  renderAttach,
} = require("../controllers/items/renderAttachFormController.js");

const {
  renderValidate,
} = require("../controllers/items/renderValidateController");

item.get("/:uId", renderCatalog);

item.get("/scope/confirm", renderConfirm);
item.post("/scope/confirm", processConfirmToScope);

item.get("/scope/:uId", renderScope);
item.post("/scope/:uId", processScope);

item.get("/upload/:uId/:id", renderAttach);

item.get("/delete/:id", renderDelete);
item.post("/delete/:id", processDeleteToConfirm);

item.get("/delete/confirm/:id", renderValidate);
item.post("/delete/confirm", processConfirmToDelete);

module.exports = item;
