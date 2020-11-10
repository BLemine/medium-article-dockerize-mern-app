const express=require("express");
const app=express();
const mongoose =require("mongoose");
const port=2020;
const bodyParser = require('body-parser');
const fetch=require("node-fetch");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.get("/",(req,res)=>{
    res.send("Backend here !")
});
app.get("/trending",(req,res)=>{
    /*mongoose.connect("");
    mongoose.connection.once("open",function(){
        
    })*/
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=60ec25557c94addbd48f018818f9713a")
    .then(response=>response.json())
    .then(resp=>res.send(
        resp
    ))
    .catch(ex=>{
        console.log(ex);
        res.send("Bad response");
    })
});
app.get("/images",async(req,res)=>{
    let images=[];
    await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=60ec25557c94addbd48f018818f9713a")
    .then(response=>response.json())
    .then(resp=>{
        for(let i in resp.results){
            images.push("url(https://image.tmdb.org/t/p/original"+resp.results[i].backdrop_path+")")
        }
    })
    .catch(ex=>{
        console.log(ex);
    })
    res.send(images)
})
app.listen(port,()=>console.log("Listening on "+port))