const user_account = require('../models/user_acount_model')
const {Op} = require('sequelize')
const user = require('../models/user_model')

class AllUserInfoController {

    async save_user_info(req, res) {

        try {

            const id = req.body.id
            const first_name = req.body.id
            const second_name = req.body.id
            const father_name = req.body.id
            const email = req.body.id
            const certificate = req.body.id
            const date_of_birthday = req.body.id
            const university_id = req.body.id

            const user_account_entry = new user_account({
                id: id,
                password: password,
                login: login,
                user_id: user_id
                }
            )

            await user_account_entry.save()
            res.json("[SUCCESS] USER ACCOUNT INFO SAVED")

        } catch (e) {
            console.log(e)
            res.status(400).json({message: '[FAIL] ERROR WITH SAVING USER ACCOUNT INFO'})
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

module.exports = new AllUserInfoController();