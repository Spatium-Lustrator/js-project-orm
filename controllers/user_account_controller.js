const user_account = require('../models/user_acount_model')
const {Op} = require('sequelize')
const user = require('../models/user_model')

class UserAccountController {

    async save_user_info(req, res) {

        try {

            const id = req.body.id
            const login = req.body.login
            const password = req.body.password
            const user_id = user_id

            const user_account_entry = new user_account({
                id: id,
                password: password,
                login: login,
                user_id: user_id
                }
            )

            await user_account_entry.save()
            res.json("[SUCCESS] USER INFO SAVED")

        } catch (e) {
            console.log(e)
            res.status(400).json({message: '[FAIL] ERROR WITH SAVING USER INFO'})
        }

    }

    async delete_user_info(req, res) {

        const id = req.body.id

        user_account.destroy({
            where: {id: id}
        })

        res.json("[SUCCESS] USER INFO DELETED")

    }

}

module.exports = new UserAccountController();