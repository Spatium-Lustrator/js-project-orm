const Router = require("express")
const router = new Router()
const federalDistrictController = require('../controllers/federal_district_controller')

router.post("/federal-district-save", federalDistrictController.save_federal_district)
router.delete("/federal-district-delete", federalDistrictController.delete_federal_district)
router.get("/federal-district-get", federalDistrictController.get_federal_district)

module.exports = router