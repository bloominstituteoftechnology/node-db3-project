const server = require('./api/server.js');

const PORT = process.env.PORT || 5000;

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
