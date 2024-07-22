import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("solution.ejs");
});

app.post("/submit", async(req, res) => {
try{
const response=await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
const data=response.data;
res.render("solution.ejs",{adjective:data.joke});
}
catch(error){
res.sendStatus(500).send("Failed to Fetch Activity. ");
}
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
