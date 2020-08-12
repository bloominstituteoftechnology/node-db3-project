const server = require('./server.js');

const PORT = process.env.PORT || 5100;

server.get('/', (req, res)=> {
  res.send('Working!')
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});