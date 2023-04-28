const university = require('../models/university_model')
const {Op} = require("sequelize")

class UniversityController {

    async save_university(req, res) {
        
        try {

            const id = req.body.id
            const name = req.body.name
            const photo = req.body.photo
            const type_of_photo = req.body.type_of_photo
            const description = req.body.description

            const university_entry = new  university({
                id: id,
                name: name,
                photo: photo,
                type_of_photo: type_of_photo,
                description: description
                }
            )

            await university_entry.save()
            res.json("[SUCCESS] UNIVERSITY SAVED")

        } catch (e) {
            console.log(e)
            res.status(400).json({message: '[FAIL] ERROR WITH SAVING UNIVERSITY'})
        }

    }

    async delete_university(req, res) {

        const id = req.body.id

        university.destroy({
            where: {id: id}
        })

        res.json("[SUCCESS] FEDERAL DISTRICT DELETED")

    }

    async get_university(req, res) {

        const id = req.body.id

        university.findByPk(id).then(university_entry =>{
            if(!university_entry) return;
            res.json(university_entry)
        }).catch(err=>console.log(err))


    }

    async get_all_universities(req, res) {

        university.findAll.then(universities =>{
            if(!universities) return;
            res.json(universities)
        })

    }


}

module.exports = new UniversityController()