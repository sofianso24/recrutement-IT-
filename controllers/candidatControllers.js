
import { Candidat } from "../models/candidat.js"


export const getCandidat = async (req, res) => {
    try {
        await Candidat.find({})
            .then(result => {
                res.send(result)
            })

    }

    catch (err) {

        console.log(err)

    }
}


export const updateprofil = async (req, res) => {
    try {
        await Candidat.findOneAndUpdate({id:req.params.id},{description:req.body.description})
        res.send('profil modifié')
    }
    catch (err) {
        console.log(err)
    }
}

export const deleteCandidat = async (req, res) => {
    try {
        await Candidat.findOneAndDelete({id:req.params.id})
        res.send('candidat supprimer')
    }
    catch (err) {
        console.log(err)
    }
}
