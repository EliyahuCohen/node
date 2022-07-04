const express = require("express");
const app = express();

const importData = require("./data.json");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hey this is NBA players API 2022 season");
});
app.get("/players", (req, res) => {
  res.send(importData);
});
app.listen(port, (req, res) => {
  console.log("hey app is listening on port http://localhost:" + port);
});
