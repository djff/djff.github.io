const express = require("express");
const path = require('path');

const app = express();

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

app.use("/", express.static(path.join(__dirname, 'css')))

app.use(express.urlencoded({extended: false}));
app.post("/result", (req, res) => {
    res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`);
    res.redirect(303, "/output");
});

app.get("/output", (req, res) => {
    res.send(`welcome ${req.query.name}, you are ${req.query.age}`);
});

app.listen(3000, ()=>{
    console.log(hour);
});