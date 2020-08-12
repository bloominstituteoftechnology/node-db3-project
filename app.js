const express = require("express");

const SchemeRouter = require("./schemes/scheme-router.js");

const app = express();

app.use(express.json());
app.use("/api/schemes", SchemeRouter);

app.get("/hello", (req, res) => {
  res.json({ hello: "world" });
});

module.exports = app;
