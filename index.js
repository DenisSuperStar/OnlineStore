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

app.listen(PORT, () => {
  console.log(`Server listens on ${PORT}`);
});