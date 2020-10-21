const express = require("express");
const app = express();
const port = 3000;
let date = new Date();
app.get("/", (req, res) => res.send("ok"));
app.get("/test", (req, res) => res.send({status:200, message:"ok"}));
app.get("/time", (req, res) => res.send({status:200, message:date.getHours() +":"+date.getMinutes()}));
app.get('/hello/:id', (req, res)=> {
    if(Boolean(req.params.id)=== true){
        res.send({status:200, message:"Hello,"+req.params.id});

    }
    
  });
  app.get("/search=:s?", (req, res) =>{
    if (req.params.s) {
      res.send({ status: 200, message: `ok`, data: req.params.s});
    } else {
      res.send({
        status: 500,
        error: true,
        message: "you have to provide a search"
      });
    }
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
