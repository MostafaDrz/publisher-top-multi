const express = require("express");
const app = express();

app.use("/static", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

const PORT = process.env.PORT || 3004;

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/feature", (req, res) => {
  res.render("feature");
});
app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/pricing", (req, res) => {
  res.render("pricing");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});
app.get("/blog/posts/:id", (req, res) => {
  res.render("single-blog");
});
app.get("/elements", (req, res) => {
  res.render("elements");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(`Something went wrong starting the Web SDK Example server 💔`);
  } else {
    console.log(`Web SDK Example Server is running on PORT ${PORT} 🚀`);
  }
});
