const express = require("express");
const helmet = require("helmet");

const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/schemes", SchemeRouter);

// eslint-disable-next-line
server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Something went wrong" });
});

module.exports = server;
