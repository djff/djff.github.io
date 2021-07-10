const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log("root being requested");
    res.send({'a': "thing", 'b': "next thing"});
})

app.listen(3000, () => { console.log("Server is running!!") });