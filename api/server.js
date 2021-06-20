const express = require("express");

const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

server.use(express.json());
server.use("/api/schemes", SchemeRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up and running player!" });
});

module.exports = server;
