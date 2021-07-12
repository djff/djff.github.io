const express = require("express");

const app = express();

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get("/", (req, res) => {
    res.render('index');
});

app.use(express.urlencoded({extended: false}));
app.post("/result", (req, res) => {
    res.locals = {
        name: req.body.name,
        age: req.body.age
    }
    res.render('result');
});

app.listen(3000);