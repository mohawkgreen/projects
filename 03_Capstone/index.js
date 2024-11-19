import express from "express";

const app = express();
const port = 3000;
const currentYear = new Date().getFullYear();

var postArray = [];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs", {
        currentYear: currentYear,
        postArray: postArray,
    });
});

app.get("/post", (req, res) => {
    res.render("post.ejs", {
        currentYear: currentYear,
    });
});

app.post("/submit", (req, res) => {
    postArray.push(req.body);
    console.log(req.body);
    res.render("post.ejs", {
        currentYear: currentYear,
    });
});


app.get("/edit", (req, res) => {
    res.render("edit.ejs", {
        currentYear: currentYear,
        postArray: postArray,
    });
});

app.post("/edit", (req, res) => {
  postArray[req.body.index].postName = req.body.postName;
  postArray[req.body.index].postEntry = req.body.postEntry;
  console.log(req.body);
  res.render("edit.ejs", {
      currentYear: currentYear,
      postArray: postArray,
  });
});

app.post("/delete", (req, res) => {
  postArray.splice(req.body.index, 1);
  console.log(req.body);
  res.render("edit.ejs", {
      currentYear: currentYear,
      postArray: postArray,
  });
});