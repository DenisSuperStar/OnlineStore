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

const app = express();

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    const fileSearchFolder = "uploads";

    cb(null, fileSearchFolder);
  },
  filename: (req, file, cb) => {
    const { originalname } = file;

    cb(null, originalname);
  },
});

const multerConfig = multer({ storage: storageConfig }).single("attachFile");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(multerConfig);
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + '/uploads'));

app.use("/user", user);
app.use("/item", item);

app.get("/", redirectAccount);

app.post("/attach", processAttach);

start(app, PORT);
