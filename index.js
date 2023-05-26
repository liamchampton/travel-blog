const express = require('express')
// import express-handlebars
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// Configure Handlebars
app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
  res.render('main', { message: 'Hello, Handlebars!' });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})