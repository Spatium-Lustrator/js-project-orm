const user_account = require('../models/user_account_model')
const {Op} = require('sequelize')
const user = require('../models/user_model')

class UserAccountController {

    async save_user_info(req, res) {

        try {

            const id = req.body.id
            const login = req.body.login
            const password = req.body.password
            const user_id = req.body.user_id

            const user_account_entry = new user_account_info({
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

    async get_user_info(req, res) {

        const id = req.body.id

        user_account.find({where: {id: id}}).success(function(user_account_info) {
            console.log(user_account_info) // Get user info and write it out
        })

        

    }



}

module.exports = new UserAccountController();