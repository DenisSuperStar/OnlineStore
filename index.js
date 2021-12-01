const express = require("express");
const multer = require("multer");

const user = require("./routes/users");
const item = require("./routes/items");

const attachFileFolder = "uploads";
const upload = multer({ dest: `${attachFileFolder}/` });

const { start } = require("./config/startServer");
const { PORT } = require("./config/appConfig");

const {
  redirectAccount,
} = require("./controllers/app/redirectAccountController");
const { processAttach } = require("./controllers/app/processAttachFile");

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(upload.single("attachFile"));
app.use(express.static(__dirname + "/public"));

app.use("/user", user);
app.use("/item", item);

app.get("/", redirectAccount);

app.post("/attach", processAttach);

start(app, PORT);
