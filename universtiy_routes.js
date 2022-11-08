const Router = require("express")
const router = new Router()
const universityController = require('../controllers/university_controller')

router.post("/university", universityController.save_university)

module.exports = router