import path from "path";
import express from "express";
import multer from "multer";

import user from "./routes/users";
import item from "./routes/items";

import { start } from "./functions/startServer";
import settings from "./config/appConfig";

import { redirectAccount } from "./controllers/app/redirectAccountController";
import { processAttach } from "./controllers/app/processAttachFile";

import { storage } from "./functions/storageConfig";

const __dirname = path.resolve();
const multerConfig = multer({ storage }).single("attachFile");

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(multerConfig);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/uploads")));
app.use(express.static(path.join(__dirname, "/resize")));

app.use("/user", user);
app.use("/item", item);

app.get("/", redirectAccount);

app.post("/attach", processAttach);

start(app, settings.PORT);