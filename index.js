import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const posts = [
  {
    id: 1,
    title: "Pasta Recipe",
    content:
      "Boil a large pot of water and cook the pasta until tender (7-10 minutes), then drain. While the pasta cooks, sauté diced onion and minced garlic in olive oil over medium heat until soft (3-5 minutes). Add diced tomatoes (with juices), oregano, basil, crushed red pepper, salt, and pepper. Stir in tomato paste and 1/2 cup water. Reduce heat to low, add cream cheese, and whisk until smooth. Stir in Parmesan until melted, then add spinach and cook until wilted (2-3 minutes). Add the drained pasta, toss to coat, and adjust seasoning. Serve warm.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1677000666761-ff476a65c8ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdDate: new Date().toISOString(),
    readTime: "One minute read",
    type: "receipe",
  },
  {
    id:2,
    title: "Pie Recipe", 
    content: "jusgfisgefis", 
    imageUrl: "https://www.thespruceeats.com/thmb/wiFS2z1vLTt3fHKDVaka5KiWshI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basic-cherry-pie-recipe-995136-14-dfe79487adf64a848a49dd07983b6614.jpg",
    createdDate: new Date().toISOString(),
    readTime: "Two minute read",
    type: "receipe",
  }
];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (post) {
    res.render("post.ejs", { post });
  } else {
    res.status(404).send("Post not found");
  }
});

app.get("/", (req, res) => {
  res.render("main.ejs", { posts });
});

app.get("/posts", (req, res) => {
  res.render("main.ejs", {
    posts,
  });
});

app.post("/new-post", (req, res) => {
  const { title, content, imageUrl, readTime, type } = req.body;
  const newPost = {
    id: posts.length + 1,
    title: title,
    content: content,
    imageUrl: imageUrl,
    createdDate: new Date().toISOString(),
    readTime: readTime,
    type: type,
  };

  posts.push(newPost);

  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/posts`);
});
