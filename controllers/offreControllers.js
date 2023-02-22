import { Offre } from "../models/offre.js"


export const getOffres = async (req, res) => {
    try {
        await Offre.find({})
            .then(result => {
                res.send(result)
            })

    }

    catch (err) {

        console.log(err)

    }
}

export const Oneoffre = async (req, res) => {
    try {
      const offre =  await Offre.findOne({id:req.params.id})
        res.send(offre)
    }
    catch (err) {
        console.log(err)
    }
}

