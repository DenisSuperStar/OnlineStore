const express = require('express');
const app = express();
const { PORT } = require('./config/appConfig.js');
const { users } = require('./routes/users.js');
const { items } = require('./routes/item.js');

const { userTokenExpire } = require('./middleware/users.js');
const { pageNotFound } = require('./middleware/404Error.js');
const { internalServerError } = require('./middleware/500Error.js');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', users);
app.use('/item', items);

app.get('/', (req, res) => {
  res.redirect('/user/account');
});

app.use(userTokenExpire);
app.use(pageNotFound);
app.use(internalServerError);

app.listen(PORT, () => {
  console.log(`Server listens on ${PORT}`);
});