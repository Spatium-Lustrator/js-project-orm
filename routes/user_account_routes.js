const Router = require("express")
const router = new Router()
const userAccountController = require('../controllers/user_account_controller')

router.post("/user-account-save", userAccountController.save_user_info)
router.delete("/user-account-delete", userAccountController.delete_user_info)
router.get('/user-account-get', userAccountController.get_user_info2)

module.exports = router