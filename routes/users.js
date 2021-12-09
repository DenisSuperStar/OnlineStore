import { Router } from "express";

import { renderAccount } from "../controllers/users/renderAccountFormController";
import { processAccount } from "../controllers/users/processUserAccountDataController";
import { renderAuth } from "../controllers/users/renderAuthFormController";
import { processAuth } from "../controllers/users/processAuthDataController";

const user = Router();

user.get("/account", renderAccount);
user.post("/account", processAccount);

user.get("/auth", renderAuth);
user.post("/auth", processAuth);

export default user;
