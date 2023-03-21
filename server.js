// buoc 1: cài đặt NodeJS
// bước 2: chạy example

const express = require('express')
const app = express()
const port = 3000

const expressHbs = require('express-handlebars');

app.engine('.hbs', expressHbs.engine({
  extname: "hbs",
  //defaultLayout: 'main',
  //layoutsDir: "views/layouts/",
}));

//app.engine( "hbs", engine({ extname: "hbs", defaultLayout: false, layoutsDir: "views/layouts/", }) );
// handlebars
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
})

app.get('/page2', (req, res) => {
  //res.render('home');
  res.render('page2', {layout: 'main', soA: 15, soB: 7, kq: 22});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

