import express from "express";
import { inputCleaner, inputValidator } from "./middleware.js";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.redirect(301, '/form')
  res.redirect("/form");
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.redirect(301, '/form')
  res.redirect("/form");
});

app.get("/form", (req, res) => {
  res.status(200).sendFile("index.html", { root: "public" });
});

app.post("/submit", inputCleaner, inputValidator, (req, res) => {
  res
    .status(200)
    .json({ username: req.body.username, comment: req.body.comment });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
