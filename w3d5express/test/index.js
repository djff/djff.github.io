const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

app.use(express.urlencoded({extended: false}))
app.use(session({secret: "kjfs828ioshv938203uhwefh0203hfowiehf80"}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) =>{
    res.locals = {items: req.session.items ? req.session.items : []};
    res.render('index');
})

app.get('/add', (req, res) => {
    res.render('new_prod');
})

app.post('/add', (req, res) => {
    if(!req.session.items){ req.session.items = []; }
    req.session.items.push(req.body.item);
    res.redirect('/');
})

app.listen(3000);