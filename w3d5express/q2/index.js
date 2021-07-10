const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(
        "<form method='POST' action='/result'>" +
        "<label> Name <input type=text name=name> </label>" +
        "<label> Age <input type=text name=age> </label>" +
        "<input type=submit value='submit query'> </form>"
    )
});

app.use(express.urlencoded({extended: false}));
app.post("/result", (req, res) => {
    res.send(`welcome ${req.body.name}, you are ${req.body.age}`);
});

app.listen(3000);