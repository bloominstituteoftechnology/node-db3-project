const express = require("express");

const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

server.get("/", (req, res) => {
  res.json({ message: "API accessed, use /api/schemes" });
});

server.use(express.json());
server.use("/api/schemes", SchemeRouter);

module.exports = server;
