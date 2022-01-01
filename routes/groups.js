import { Router } from "express";

import { renderNeckerchief } from "../controllers/items/renderNeckerchiefController";
import { renderHandkerchiefs } from "../controllers/items/renderHandkerchiefsController";

const group = Router();

group.get("/public/handkerchiefs", renderHandkerchiefs);
group.get("/public/neckerchief", renderNeckerchief);

export default group;