const Router = require("express")
const router = new Router()
const userInfoController = require('../controllers/user_controller')

router.post("/user-info-save", userInfoController.save_user_info)
router.delete("/user-info-delete", userInfoController.delete_user_info)

module.exports = router