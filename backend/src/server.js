const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "CI/CD Demo API",
  });
});

module.exports = app;
