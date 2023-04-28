const Router = require("express")
const router = new Router()
const universityInRegionController = require('../controllers/university_in_region_controller')

router.post("/university-in-region-save", universityInRegionController.save_university_in_region)
router.delete("/university-in-region-delete", universityInRegionController.delete_university_in_region)
router.get("/university-in-region-get", universityInRegionController.get_university_in_region)

module.exports = router