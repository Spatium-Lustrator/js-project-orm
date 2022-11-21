const user_info = require('../models/user_info_model')
const {Op} = require('sequelize')

class UserInfoController {

    async save_user_info(req, res) {

        try {
            const id = req.body.id
            const user_name = req.body.first_name
            const user_patronymic = req.body.patronymic
            const user_last_name = req.body.last_name
            const user_university = req.body.university

            const user_info_entry = new  user_info(
                {   user_id: id,
                    first_name: user_name,
                    patronymic: user_patronymic,
                    last_name: user_last_name,
                    university: user_university
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
            where: {user_id: id}
        })

        res.json("[SUCCESS] USER INFO DELETED")

    }

    async return_one_user_info(req, res) {

        const id = req.body.id

        user_info.findOne({
            where: { user_id:  id},
        }).then(function(tagData){
            res.json(tagData);
        })

    }

    async return_all_user_info(req, res) {
        user_info.findAll({

        }).then(function(tagData){
            res.json(tagData);
        })
    }

}

module.exports = new UserInfoController();