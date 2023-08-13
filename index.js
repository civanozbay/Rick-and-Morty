import express from "express";
import axios from "axios";

const app = express();
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const data = await axios.get("https://rickandmortyapi.com/api/character");
  const result = data.data.results;
  console.log(result[0].status);
  res.render("index.ejs", { data: result });
});

app.listen(3000, () => {
  console.log("listening the port");
});
