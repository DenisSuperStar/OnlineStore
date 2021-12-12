import { Router } from "express";

import { processConfirmToDelete } from "../controllers/items/processConfirmToDeleteController";
import { processConfirmToScope } from "../controllers/items/processConfirmToScopeController";
import { processDeleteToConfirm } from "../controllers/items/processDeleteToConfirmController";
import { processScope } from "../controllers/items/processScopeDataController";
import { renderAttach } from "../controllers/items/renderAttachFormController";
import { renderConfirm } from "../controllers/items/renderConfirmFormController";
import { renderDelete } from "../controllers/items/renderDeleteFormController";
import { renderCatalog } from "../controllers/items/renderItemCatalogController";
import { renderScope } from "../controllers/items/renderScopeFormController";
import { renderValidate } from "../controllers/items/renderValidateController";

const item = Router();

item.get("/:uId", renderCatalog);

item.get("/scope/confirm", renderConfirm);
item.post("/scope/confirm", processConfirmToScope);

item.get("/scope/:uId", renderScope);
item.post("/scope/:uId", processScope);

item.get("/upload/:uId/:id", renderAttach);

item.get("/delete/:id", renderDelete);
item.post("/delete/:id", processDeleteToConfirm);

item.get("/delete/confirm/:id", renderValidate);
item.post("/delete/confirm/:id", processConfirmToDelete);

export default item;
