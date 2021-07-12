const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use('/', express.static(path.join(__dirname, 'css')));

const date = new Date();
const hour = date.getHours();

const cssFile = hour > 18 ? "night.css" : "day.css";


app.get('/', (req, res) => {
 const date = new Date();
 res.render("index", {
 time: date.toTimeString(),
 css: cssFile
 });
});
app.listen(3000);