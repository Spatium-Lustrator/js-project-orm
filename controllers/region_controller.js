const region = require("../models/region_model")
const {Op} = require("sequelize")

class RegionController {

    async save_region(req, res) {
        
        try {

            const id = req.body.id
            const name = req.body.name
            const federal_district = req.body.federal_district

            const region_entry = new  region({
                id: id,
                name: name,
                federal_district: federal_district
                }
            )

            await region_entry.save()
            res.json("[SUCCESS] FEDERAL DISTRICT SAVED")

        } catch (e) {
            console.log(e)
            res.status(400).json({message: '[FAIL] ERROR WITH SAVING FEDERAL DISTRICT'})
        }

    }

    async delete_region(req, res) {

        const id = req.body.id

        region.destroy({
            where: {id: id}
        })

        res.json("[SUCCESS] FEDERAL DISTRICT DELETED")

    }

    async get_region(req, res) {

        const id = req.body.id

        region.findByPk(id).then(region_entry =>{
            if(!region_entry) return;
            res.json(region_entry)
        }).catch(err=>console.log(err))


    }


}

module.exports = new RegionController()