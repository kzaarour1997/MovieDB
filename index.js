const express = require("express");
const app = express();
const port = 3000;
const t={}
let date = new Date();
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
    
]
let year=[];
let title=[];
let rating=[];
for (let i = 0; i < movies.length; i++) {
    year[i] = movies[i].year;
  }
app.get("/", (req, res) => res.send("ok"));
app.get("/test", (req, res) => res.send({status:200, message:"ok"}));
app.get("/time", (req, res) => res.send({status:200, message:date.getHours() +":"+date.getMinutes()}));
app.get('/hello/:id?', (req, res)=> {
    if(Boolean(req.params.id)=== true){
        res.send({status:200, message:"Hello,"+req.params.id});

    }
    
  });
  app.get("/search=:s?", (req, res) =>{
    if (req.params.s) {
      res.send({ status: 200, message: `ok`, data: req.params.s});
    } else {
      res.send({status: 500,error: true,message: "you have to provide a search"});
    }
  });
  app.get('/movies/read', (req, res) => 
    res.send({status:200, data:movies}));
    //By-Date
    app.get('/movies/read/by-date', (req, res) =>{
          year=movies.sort(function(a, b) {
            var dateA = a.year, dateB = b.year;
            return dateA - dateB;
        });
          
        res.send({status:200, data: year});
});
   //By-Rating
     app.get('/movies/read/by-rating', (req, res) =>{

          rating=movies.sort(function(a, b) {
            return a.rating - b.rating;
        });
          
        res.send({status:200, data: rating});
    
});
  //By-Title
     app.get('/movies/read/by-title', (req, res) =>{

    title=movies.sort(function(a, b) {
        var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
    });
    
  res.send({status:200, data: title});

});

app.get('/movies/read/id/:id?', (req, res) => {
  for(let i=0;i<movies.length;i++){
  if(req.params.id === movies[i].title){

    res.send({status:200, data:movies[i]})
  }else{res.send({status:404, error:true, message:'the movie title does not exist'})}


    

}});
  app.get("/movies/create", (req, res) => res.send("create"));
  app.get("/movies/update", (req, res) => res.send("update"));
  app.get("/movies/delete", (req, res) => res.send("delete"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
