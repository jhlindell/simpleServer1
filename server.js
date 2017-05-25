const express = require("express");
const app = express();

app.use(express.static("./index.html"));

app.get("/", function(req, res){
  res.sendStatus(404);
});

app.get("/api", function(req, res){
  res.send("Hello from API");
});


app.listen(8000, function(req, res){
  console.log("listening on port 8000");
});
