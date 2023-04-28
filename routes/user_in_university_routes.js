const Router = require("express")
const router = new Router()
const userInUniversityController = require('../controllers/user_in_university_controller')

router.post('/user-in-university-save', userInUniversityController.save_user_in_university)
router.delete('user-in-university-delete', userInUniversityController.delete_user_in_university)
router.get('/user-in-university-get', userInUniversityController.get_user_in_university)


module.exports = router