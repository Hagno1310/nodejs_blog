const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the blog!");
});

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});