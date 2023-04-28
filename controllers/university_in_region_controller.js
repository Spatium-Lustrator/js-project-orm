const university_in_region = require("../models/university_in_region_model")
const {Op} = require("sequelize")

class UniversityInRegionController {

    async save_university_in_region(req, res) {
        
        try {

            const id = req.body.id
            const university = req.body.university
            const region = req.body.region

            const university_in_region_entry = new  university_in_region({
                id: id,
                university: university,
                region: region
                }
            )

            await university_in_region_entry.save()
            res.json("[SUCCESS] FEDERAL DISTRICT SAVED")

        } catch (e) {
            console.log(e)
            res.status(400).json({message: '[FAIL] ERROR WITH SAVING FEDERAL DISTRICT'})
        }

    }

    async delete_university_in_region(req, res) {

        const id = req.body.id

        university_in_region.destroy({
            where: {id: id}
        })

        res.json("[SUCCESS] FEDERAL DISTRICT DELETED")

    }

    async get_university_in_region(req, res) {

        const id = req.body.id

        university_in_region.findByPk(id).then(university_in_region_entry =>{
            if(!university_in_region_entry) return;
            res.json(university_in_region)
        }).catch(err=>console.log(err))


    }

}

module.exports = new UniversityInRegionController()