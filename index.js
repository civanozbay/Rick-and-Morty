import express from "express";
import axios from "axios";

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { data: "sa" });
});

app.listen(3000, () => {
  console.log("listening the port");
});
