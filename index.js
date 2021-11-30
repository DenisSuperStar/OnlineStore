const path = require('path');
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { PORT } = require('./config/appConfig.js');
const user = require('./routes/users.js');
const item = require('./routes/items.js');
const itemFilePath = path.join(__dirname, './service/items.json');
const { readFileToPromise } = require('./config/toPromise.js');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(upload.single('attachFile'));
app.use('/user', user);
app.use('/item', item);

app.get('/', (req, res) => {
  res.redirect('/user/account');
});

app.post('/attach', (req, res) => {
  const { file, body } = req;
  const { itemId } = JSON.parse(JSON.stringify(body));

  if (!file) return res.send('Файл загружен неверно!');

  const { originalname } = file;

  readFileToPromise(itemFilePath)
    .then(res => {
      const items = JSON.parse(res);
      const item = items.find(item => item._id == itemId);

      item.attach = path.join(__dirname, `/uploads/${originalname}`);
    });
});

app.listen(PORT, () => {
  console.log(`Server listens on ${PORT}`);
});