import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000
const __dirname = dirname(fileURLToPath(import.meta.url));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    res.render("index.ejs", 
        { dayOfWeek: dayOfWeek}
    );
});
