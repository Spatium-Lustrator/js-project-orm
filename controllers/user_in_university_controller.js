const user_in_university_model = require('../models/user_in_university_model')
const {Op} = require('sequelize')

class UserInUniversityController {

    async save_user_in_university(req, res) {

        try {

            const id = req.body.id
            const user_id = req.body.user_id
            const university_id = req.body.university_id

            const user_in_universtiy_entry = new user_in_university_model({
                id: id,
                user_id: user_id,
                university_id: university_id
                }
            )

            await user_in_universtiy_entry.save()
            res.json("[SUCCESS] USER INFO SAVED")

        } catch (e) {
            console.log(e)
            res.status(400).json({message: '[FAIL] ERROR WITH SAVING USER INFO'})
        }

    }

    async delete_user_in_university(req, res) {

        const id = req.body.id

        user_in_university_model.destroy({
            where: {id: id}
        })

        res.json("[SUCCESS] USER INFO DELETED")

    }

    async get_user_in_university(req, res) {

        const id = req.body.id

        user_in_university_model.findByPk(id).then(user_in_university =>{
            if(!user_in_university) return;
            res.json(user_in_university)
        }).catch(err=>console.log(err))


    }

}

module.exports = new UserInUniversityController();