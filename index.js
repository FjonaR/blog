import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/posts", (req, res) => {
    res.render("main.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/posts`);
});

