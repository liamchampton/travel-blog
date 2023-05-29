const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars')

//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');

//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', exphbs.engine({
  layoutsDir: __dirname + '/views/layouts/',
  extname: 'hbs', defaultLayout: 'planB',
  partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static(__dirname + '/public'))

const countries = [
  "Indonesia",
  "Dubai",
  "USA",
  "France",
  "Thialand",
  "Cambodia",
  "Vietnam",
  "Laos"
];

app.get('/', (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render('main', { layout: 'index', countries: countries });
});

app.listen(port, () => console.log(`App listening to port ${port}`));