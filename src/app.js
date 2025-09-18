const express = require("express"); // Thư viện Express.js để xây dựng ứng dụng web
const morgan = require("morgan"); //Thư viện ghi nhật ký (loggers) yêu cầu HTTP cho Node.js
const handlebars = require("express-handlebars"); // Thư viện Handlebars để sử dụng template engine
const path = require("path"); // Thư viện để làm việc với đường dẫn file hệ thống

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")))

//HTTP Logger
app.use(morgan("combined"));

//Template engine
app.engine("handlebars", handlebars.engine({
  extname: ".handlebars"
}));
app.set("view engine", ".handlebars");
app.set("views", path.join(__dirname, "resources/views"));


//Static files
app.get("/", (req, res) => {
    res.render("home")
});

app.get("/dashboard", (req, res) => {
    res.render("dashboard")
});

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});