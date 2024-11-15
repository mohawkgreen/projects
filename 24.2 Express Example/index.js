import express from "express";
const app = express();
const port = 8000;


// post put patch and delete work similar to get
// you can also use senStatus() to send a status code

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>Totally about me!</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Phone Number!</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});