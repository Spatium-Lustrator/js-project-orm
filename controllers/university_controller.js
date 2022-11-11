const university = require('../models/university_model')
const {Op} = require("sequelize");

class CertificateController {
    async save_university(req, res)
    {
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
            res.json("ok")


            // const certificate_code = req.body.certificate_code
            // const certificate_mb = await certificate.findOne({where:{certificate_id: certificate_code}})
            // if (certificate_mb) {
            //     const allCetrificateLikeIts = await certificate.findAndCountAll({where:{certificate_id: {[Op.like]:`%${certificate_code}%`}}})
            //     console.log(allCetrificateLikeIts.count)
            //     const countPlusOnew = allCetrificateLikeIts.count + 1
            //     const newCetrificate = certificate_code + countPlusOnew
            //     const cert = new certificate(
            //         {certificate_id: newCetrificate}
            //     )
            //     await cert.save()
            //     return res.json({message:'Такой сертификат уже есть. Новый сертификат записан с цифрой ' + countPlusOnew + ' на конце'})
            //}
            // const cert = new certificate(
            //     {certificate_id: certificate_code})
            // await cert.save()
            // return res.json({message:'Сертификат записан!'})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: '[FAILED] ERROR WITH SAVING UNIVERSITY'})
        }
    }
}

module.exports = new CertificateController()