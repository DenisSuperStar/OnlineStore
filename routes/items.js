import { Router } from "express";

import { processConfirmToDelete } from "../controllers/items/processConfirmToDeleteController";
import { processDeleteToConfirm } from "../controllers/items/processDeleteToConfirmController";
import { processScope } from "../controllers/items/processScopeDataController";
import { renderAttach } from "../controllers/items/renderAttachFormController";
import { renderDelete } from "../controllers/items/renderDeleteFormController";
import { renderCatalog } from "../controllers/items/renderItemCatalogController";
import { renderScope } from "../controllers/items/renderScopeFormController";
import { renderValidate } from "../controllers/items/renderValidateController";

const item = Router();

item.get("/public/:uId", renderCatalog);

item.get('/access/private', renderScope);
item.post('/access/private', processScope);

item.get("/upload/:id", renderAttach);

item.get("/delete/:id", renderDelete);
item.post("/delete/:id", processDeleteToConfirm);

item.get("/delete/confirm/:id", renderValidate);
item.post("/delete/confirm/:id", processConfirmToDelete);

export default item;
