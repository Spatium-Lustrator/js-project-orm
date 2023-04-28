const Router = require("express")
const router = new Router()
const RegionController = require('../controllers/region_controller')

router.post("/region-save", RegionController.save_region)
router.delete("/region-delete", RegionController.delete_region)
router.get("/region-get", RegionController.get_region)

module.exports = router