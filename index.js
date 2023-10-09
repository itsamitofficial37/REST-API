const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"public")));


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/posts",(req,res)=> {
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=> {
    res.render("new.ejs");
});

app.post("/posts",(req,res) => {
     
    let {username,content} = req.body;
    posts.push({username,content});
    res.redirect("/posts")
})

app.listen(port ,()=> {
    console.log("server is start succesfully");
})

let posts = [
    {
        username : "amitsingh",
        content : "Hard work is the key of success",
    },
    {
        username : "vinitsingh",
        content : "Education is the weapon you can change the world through it",
    },
    {
        username : "kavitasingh",
        content : "For changing in life , we have to sometimes go outside the home",
    },
    {
        username : "ugarasensingh",
        content : "If you find right people who supports you in every condition , never leave this person",
    }
]
