const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const appPort = 3000;

app.engine(
  'hbs',
  handlebars({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'mainLayout',
    extname: 'hbs',
    partialsDir: __dirname + '/views/partial/',
  })
);

app.set('view engine', 'hbs');

app.get('*', (_req, res) => {
  res.render('layouts/mainLayout');
});

app.listen(appPort, () => {
  console.log(`App listening on port: ${appPort}`);
});
