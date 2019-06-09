const express = require("express");
const app = express();

const port = 3001;

app.use(express.static(__dirname + "/public"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contacts", (req, res) => {
  res.render("contacts");
});

app.listen(port, () => console.log(`listening on port ${port}`));
