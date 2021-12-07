const path = require("path");
const express = require("express");
const multer = require("multer");

const user = require("./routes/users");
const item = require("./routes/items");

const { start } = require("./config/startServer");
const { PORT } = require("./config/appConfig");

const {
  redirectAccount,
} = require("./controllers/app/redirectAccountController");
const { processAttach } = require("./controllers/app/processAttachFile");

const { storage } = require("./config/storageConfig");
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

start(app, PORT);
