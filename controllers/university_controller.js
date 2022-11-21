const university = require('../models/university_model');
const {Op} = require("sequelize");

class CertificateController {

    async save_university(req, res) {
        try {
            const university_id = req.body.id
            const university_city = req.body.city
            const university_name = req.body.name

            const university_entry = new university (
                {   id: university_id,
                    city: university_city,
                    name: university_name
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
        const university_id = req.body.id

        university.destroy({
            where: {id: university_id}
        })

        res.json("[SUCCESS] UNIVERSITY DELETED")

    }

    async return_all_universities(req, res) {
        university.findAll({

        }).then(function(tagData){
            res.json(tagData);
        })
    }

    async return_university_by_id(req, res) {
        const university_id = req.body.id

        university.findOne({
                                where: { id:  university_id},
                            }).then(function(tagData){
                                res.json(tagData);
                            })
    }
}

module.exports = new CertificateController()