import path from "path";
import express from "express";
import multer from "multer";
import { ReasonPhrases } from "http-status-codes";
import cookieParser from "cookie-parser";
import { getParsedEnv } from "./config/envConfig";

import user from "./routes/users";
import item from "./routes/items";

import { start } from "./functions/startServer";

import { renderPreview } from "./controllers/app/renderPreviewController";
import { processAttach } from "./controllers/app/processAttachFile";

import { storage } from "./functions/storageConfig";

const __dirname = path.resolve();
const multerConfig = multer({ storage }).single("attachFile");
const { APP_PORT, SECRET_COOKIE_KEY } = getParsedEnv();

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(multerConfig);
app.use(cookieParser(SECRET_COOKIE_KEY));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/uploads")));
app.use(express.static(path.join(__dirname, "/resize")));

app.use("/user", user);
app.use("/item", item);

app.get("/", renderPreview);

app.post("/attach", processAttach);

app.use((req, res, next) => {
  res.send(ReasonPhrases.NOT_FOUND);
  next();
});

start(app, APP_PORT);
