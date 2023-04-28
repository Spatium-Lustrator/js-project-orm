const Router = require("express")
const router = new Router()
const universityController = require('../controllers/university_controller')

router.post("/university-save", universityController.save_university)
router.delete("/university-delete", universityController.delete_university)
router.get("/university-get-all", universityController.return_all_universities)
router.get("/university-get-one", universityController.return_university_by_id)

module.exports = router