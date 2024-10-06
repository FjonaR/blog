import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const posts = [
  {
    id:1, 
    title: "Pasta Recipe",
    content: "firts take all the ingridients out then you will need...", 
    imageUrl: "https://plus.unsplash.com/premium_photo-1677000666761-ff476a65c8ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdDate: new Date().toISOString(),
    readTime: "One minute read",
    type: "receipe",
  }
]

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/posts", (req, res) => {
    res.render("main.ejs", {
      posts 
    });
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/posts`);
});

