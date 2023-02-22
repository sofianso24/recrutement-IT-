import { Candidature } from "../models/candidature.js"

export const newCandidature = async (req, res) => {
    try {
        const new_candidatutre = new Candidature({
            candidat: req.body.candidat,
            offre: req.body.offre,
        });

        await new_candidatutre.save()
        res.send(new_candidatutre)
    }
    catch (err) {
        console.log(err)
    }
}




export const getCandidature = async (req, res) => {
    try {
        await Candidature.find({})
            .then(result => {
                res.send(result)
            })

    }

    catch (err) {

        console.log(err)

    }
}


export const deleteCandidature = async (req, res) => {
    try {
        await Candidature.findOneAndDelete({id:req.params.id})
        res.send('candidatutre supprimer')
    }
    catch (err) {
        console.log(err)
    }
}


