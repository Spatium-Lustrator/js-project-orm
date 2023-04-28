const federal_disctrict = require("../models/federal_district_model")
const {Op} = require("sequelize")

class FederalDistrictController {

    async save_federal_district(req, res) {
        
        try {

            const id = req.body.id
            const name = req.body.name

            const federal_district_entry = new  federal_disctrict({
                id: id,
                name: name
                }
            )

            await federal_district_entry.save()
            res.json("[SUCCESS] FEDERAL DISTRICT SAVED")

        } catch (e) {
            console.log(e)
            res.status(400).json({message: '[FAIL] ERROR WITH SAVING FEDERAL DISTRICT'})
        }

    }

    async delete_federal_district(req, res) {

        const id = req.body.id

        federal_disctrict.destroy({
            where: {id: id}
        })

        res.json("[SUCCESS] FEDERAL DISTRICT DELETED")

    }

    async get_federal_district(req, res) {

        const id = req.body.id

        federal_disctrict.findByPk(id).then(federal_disctrict_entry =>{
            if(!federal_disctrict_entry) return;
            res.json(federal_disctrict_entry)
        }).catch(err=>console.log(err))


    }

}