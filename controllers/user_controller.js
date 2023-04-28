const user = require('../models/user_model')
const user_info = require('../models/user_info_model')
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

            const user_entry = new  user({
                id: id,
                first_name: first_name,
                last_name: last_name,
                father_name: father_name,
                email: email,
                certificat: certificat,
                date_of_birthday: date_of_birthday
                }
            )

            await user_entry.save()
            res.json("[SUCCESS] USER INFO SAVED")

        } catch (e) {
            console.log(e)
            res.status(400).json({message: '[FAIL] ERROR WITH SAVING USER INFO'})
        }

    }

    async delete_user_info(req, res) {

        const id = req.body.id

        user.destroy({
            where: {id: id}
        })

        res.json("[SUCCESS] USER INFO DELETED")

    }

    async get_user(req, res) {

        const id = req.body.id

        user.findByPk(id).then(user =>{
            if(!user) return;
            console.log(user.first_name);
            res.json(user)
        }).catch(err=>console.log(err))


    }

}

module.exports = new UserController();