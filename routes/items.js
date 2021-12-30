import { Router } from "express";

import { renderCatalog } from "../controllers/items/renderItemCatalogController";
import { renderScope } from "../controllers/items/renderScopeFormController";
import { processScope } from "../controllers/items/processScopeDataController";
import { renderAttach } from "../controllers/items/renderAttachFormController";
import { renderDelete } from "../controllers/items/renderDeleteFormController";
import { renderValidate } from "../controllers/items/renderValidateController";
import { confirmPersonToDelete } from "../controllers/items/processConfirmToDeleteController";

const item = Router();

item.get("/public/:uId", renderCatalog);

item.get("/access/private", renderScope);
item.post("/access/private", processScope);

item.get("/upload/:id", renderAttach);

item.get("/delete/:id", renderDelete);

item.get("/delete/confirm/:id", renderValidate);
item.post("/delete/confirm/:id", confirmPersonToDelete);

export default item;
