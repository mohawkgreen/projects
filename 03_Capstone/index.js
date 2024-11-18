import express from "express";
import bootstrap from 'bootstrap';

const app = express();
const port = 3000;
const currentYear = new Date().getFullYear();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs", {
        currentYear: currentYear,
    });
});