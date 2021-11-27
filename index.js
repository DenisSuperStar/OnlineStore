const app = require('express')();
const { json, urlencoded } = require('express');
const { PORT } = require('./config/appConfig.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const user = require('./routes/users.js');
const item = require('./routes/items.js');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(upload.single('item'));
app.use('/user', user);
app.use('/item', item);

app.get('/', (req, res) => {
  res.redirect('/user/account');
});


app.get('/item/upload/:uId', (req, res) => {
  res.render('upload', {
    title: 'Добавление нового товара.'
  });
});

app.post('/item/upload/:uId', upload.single('item'), (req, res) => {
  // загрузка товара
  console.log(req.file, req.body);
});

app.get('/item/delete/:uId', (req, res) => {
  res.send('Page of item delete!');
});

app.post('/item/delete/:uId', (req, res) => {
  console.log(body);
});

app.listen(PORT, () => {
  console.log(`Server listens on ${PORT}`);
});