const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 2020;
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const access = require("./access.json");
const { MongoClient } = require('mongodb');
const uri = access.atlas_mongo_uri;
const imdb_api_key = access.imdb_api_key;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.get("/", (req, res) => {
    res.send("Backend here !")
});
app.post("/user", async (req, res) => {
    try {
        MongoClient.connect(uri, function (err, db) {
            if (err) {
                res.status(500).send({ error: "Sorry, something went wrong !" })
                throw err
            };
            var dbo = db.db("movies_trending");
            dbo.collection("users").findOne(req.body, function (err, result) {
                if (err) {
                    res.status(500).send({ error: "Sorry, something went wrong !" })
                    throw err
                };
                if (result === null) res.send("NO");
                else res.send("OK");
                console.log(result);
                db.close();
            });
        });
    } catch (e) {
        res.status(500).send({ error: "Sorry, something went wrong !" })
        console.error("an exception here ..");
    }
})
app.get("/trending", (req, res) => {
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=" + imdb_api_key)
        .then(response => response.json())
        .then(resp => {
            let resp1 = resp;
            for (let i in resp1.results) {
                resp1.results[i].bookmarked = false
            }
            res.send(resp1.results)
        })
        .catch(ex => {
            console.log(ex);
            res.send("Bad response");
        })
});
app.post("/movie_trailer", async (req, res) => {
    console.log(req.body)
    let video_id = "";
    await fetch("https://api.themoviedb.org/3/movie/" + req.body.movie_id + "/videos?api_key=" + imdb_api_key)
        .then(response => response.json())
        .then(resp => {
            video_id = resp.results[0].key
            //res.send()
        }).catch(ex => {
            console.log(ex)
        });
    if (video_id !== "") res.send(video_id)
    else res.status(500).send({ error: "Sorry, something went wrong" })

})
app.get("/bookmarks", async (req, res) => {
    try {
        MongoClient.connect(uri, function (err, db) {
            if (err) {
                res.status(500).send({ error: "Sorry, something went wrong !" })
                throw err
            };
            var dbo = db.db("movies_trending");
            dbo.collection("favoris").find({}).toArray(function (err, result) {
                if (err) {
                    res.status(500).send({ error: "Sorry, something went wrong !" })
                    throw err
                };

                res.send(result)
                //console.log(result);
                db.close();
            });
        });
    } catch (e) {
        res.status(500).send({ error: "Sorry, something went wrong !" });
        console.error("an exception with 'get(/bookmarks)' ..");
    }
});
app.post("/bookmark_exists", async (req, res) => {
    try {
        MongoClient.connect(uri, function (err, db) {
            if (err) {
                res.status(500).send({ error: "Sorry, something went wrong !" })
                throw err
            };
            var dbo = db.db("movies_trending");
            dbo.collection("favoris").findOne(req.body, function (err, result) {
                if (err) {
                    res.status(500).send({ error: "Sorry, something went wrong !" })
                    throw err
                };
                if (result === null) res.send("NO");
                else res.send("OK");
                db.close();
            });
        });
    } catch (e) {
        res.status(500).send({ error: "Sorry, something went wrong !" })
        console.error("an exception here ..");
    }
})
app.post("/bookmark", async (req, res) => {
    try {
        MongoClient.connect(uri, function (err, db) {
            if (err) throw err;
            var dbo = db.db("movies_trending");
            dbo.collection("favoris").insertOne(req.body, function (err, result) {
                if (err) {
                    res.status(500).send({ error: "Sorry, something went wrong !" })
                    throw err
                };
                res.send("1 document inserted")
                console.log("1 document inserted");
                db.close();
            });
        });
    } catch (ex) {
        res.status.send({ error: "Sorry, something went wrong" })
    }
});
app.post("/bookmarks", async (req, res) => {
    try {
        MongoClient.connect(uri, function (err, db) {
            if (err) throw err;
            var dbo = db.db("movies_trending");
            dbo.collection("favoris").insertMany(req.body, function (err, result) {
                if (err) {
                    res.status(500).send({ error: "Sorry, something went wrong !" })
                    throw err
                };
                res.send("1 document inserted")
                console.log("1 document inserted");
                db.close();
            });
        });
    } catch (ex) {
        res.status.send({ error: "Sorry, something went wrong" })
    }
})
app.post("/reinit_bookmarks", (req, res) => {
    try {
        MongoClient.connect(uri, function (err, db) {
            if (err) throw err;
            var dbo = db.db("movies_trending");
            dbo.collection("favoris").deleteMany({},function (err, obj) {
                if (err) {
                    res.status(500).send({ error: "Sorry, something went wrong !" })
                    throw err
                };
                console.log("favoris cleared !")
                res.send("OK");
                db.close();
            });

        });
    } catch (ex) {
        res.status(500).send({ error: "Sorry, something went wrong !" })
        console.log(ex)
    }
})
app.get("/images", async (req, res) => {
    let images = [];
    await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=60ec25557c94addbd48f018818f9713a")
        .then(response => response.json())
        .then(resp => {
            for (let i in resp.results) {
                images.push("url(https://image.tmdb.org/t/p/original" + resp.results[i].backdrop_path + ")")
            }
        })
        .catch(ex => {
            console.log(ex);
        })
    res.send(images)
})
app.listen(process.env.PORT || port, () => console.log("Listening on " + port))