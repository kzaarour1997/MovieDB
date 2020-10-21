const express = require("express");
const app = express();
const port = 3000;
let date = new Date();
app.get("/", (req, res) => res.send("ok"));
app.get("/test", (req, res) => res.send({status:200, message:"ok"}));
app.get("/time", (req, res) => res.send({status:200, message:date.getHours() +":"+date.getMinutes()}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
