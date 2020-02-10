const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json();
});

app.listen(process.env.PORT || 3200, () => {
  console.log("Server started");
});
