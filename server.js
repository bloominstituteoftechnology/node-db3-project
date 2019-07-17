const express = require('express');
const { handleError } = require('./helpers')
const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.get('/', (req, res, next) => {
  return res.status(200).json('welcome')
})
server.use(express.json());

server.use('/api/schemes', SchemeRouter);

server.use((err, req, res, next) => {
  handleError(err, res);
});
module.exports = server;