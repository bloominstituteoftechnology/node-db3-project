const express = require("express")
const helmet = require("helmet")
const welcomeRouter = require("./welcome/welcome-router")
// const userRouter = require("./users/user-router")

const server = require('./api/server.js');
const PORT = process.env.PORT || 5000;

server.use(helmet())
server.use(express.json())
server.use(welcomeRouter)
// server.use(userRouter)

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    message: "Something went wrong",
  })
})


server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});






