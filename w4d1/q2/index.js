const express = require("express");
const cookie = require("cookie-parser");
const path = require('path');

const app = express();

app.use(cookie());
app.use(express.urlencoded({extended: false}));
app.use("/", express.static(path.join(__dirname, 'css')));

const date = new Date();
const hour = date.getHours();

const cssFile = hour > 18 ? "night.css" : "day.css";

app.get("/", (req, res) => {
    res.send(
        "<!DOCTYPE html>" +
        "<html>" +
        "<head> <meta charset=utf-8" +
        "<title> </title>" +
        "<link rel='stylesheet' type='text/css' href="+ cssFile + "> </link>" +
        "<body>" +
        "<form method='POST' action='/result'>" +
        "<label> Name <input type=text name=name> </label>" +
        "<label> Age <input type=text name=age> </label>" +
        "<input type=submit value='submit query'> </form>" +
        "</body>" + 
        "</html>"
    )
});

app.post("/result", (req, res) => {
    res.cookie('name', req.body.name);
    res.cookie('age', req.body.age);
    res.redirect(303, "/output");
});

app.get("/output", (req, res) => {
    res.send(`welcome ${req.cookies.name}, you are ${req.cookies.age}`);
});

app.listen(3000);