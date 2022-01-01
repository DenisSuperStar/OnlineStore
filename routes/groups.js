import { Router } from "express";

import { renderNeckerchief } from "../controllers/items/renderNeckerchiefController";
import { renderHandkerchiefs } from "../controllers/items/renderHandkerchiefsController";

const group = Router();

group.get("/handkerchiefs", renderHandkerchiefs);
group.get("/neckerchief", renderNeckerchief);

export default group;