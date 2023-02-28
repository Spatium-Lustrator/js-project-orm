const Router = require("express")
const router = new Router()
const userAccountController = require('../controllers/user_account_controller')

router.post("/user-account-save", userAccountController.save_user_account)
router.delete("/user-account-delete", userAccountController.delete_user_account)

module.exports = router