const user_info = require('../models/user_model')
const {Op} = require('sequelize')

class UserController {

    async save_user_info(req, res) {

        try {

            const id = req.body.id
            const first_name = req.body.first_name
            const last_name = req.body.last_name
            const father_name = req.body.father_name
            const email = req.body.email
            const certificat = req.body.certificat
            const date_of_birthday = req.body.date_of_birthday

            const user_info_entry = new  user_info({
                id: id,
                first_name: first_name,
                last_name: last_name,
                father_name: father_name,
                email: email,
                certificat: certificat,
                date_of_birthday: date_of_birthday
                }
            )

            await user_info_entry.save()
            res.json("[SUCCESS] USER INFO SAVED")

        } catch (e) {
            console.log(e)
            res.status(400).json({message: '[FAIL] ERROR WITH SAVING USER INFO'})
        }

    }

    async delete_user_info(req, res) {

        const id = req.body.id

        user_info.destroy({
            where: {id: id}
        })

        res.json("[SUCCESS] USER INFO DELETED")

    }

}

module.exports = new UserController();