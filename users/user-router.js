const express = require("express")
const db = require("../data/db-config")


const router = express.Router()

router.get("/users", async (req, res, next) => {
	try {
		res.json(await db("users"))
	} catch(err) {
		next(err)
	}
})





module.exports = router
