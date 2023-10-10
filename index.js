const express = require("express");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

const app = express();
const path = require("path");
const port = 3000;

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;

  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res)=> {
    let { id } = req.params;
     posts = posts.filter((p) => id !== p.id);
     res.redirect("/posts");
})
app.listen(port, () => {
  console.log("server is start succesfully");
});

let posts = [
  {
    id: uuidv4(),
    username: "amitsingh",
    content: "Hard work is the key of success",
  },
  {
    id: uuidv4(),
    username: "vinitsingh",
    content: "Education is the weapon you can change the world through it",
  },
  {
    id: uuidv4(),
    username: "kavitasingh",
    content: "For changing in life , we have to sometimes go outside the home",
  },
  {
    id: uuidv4(),
    username: "ugarasensingh",
    content:
      "If you find right people who supports you in every condition , never leave this person",
  },
];
