import {Candidature} from "../models/candidature.js" 

//read condidatures :
   
export const readCandidature = async(req,res)=>{
    try{
        const candidature = await Candidature.find({});
        res.send(candidature)
         
    }
    catch(err){
        res.send(err)
    }
}

//read one condidature :

export const readOneCandidature = async(req,res)=>{
    try{
        const id = req.params.id;
        const candidature = await Candidature.findById(id)    
        res.send(candidature)
    }
    catch(err){
        res.send(err)
    }
}

//update one state condidature:

export const updateStateCandidature = async(req,res)=>{
      try{
        const id = req.params.id;
        const candidature = await Candidature.findById(id)
        const state = req.body.state

        if (state !== "enCours" && state !== "refus" && state !== "accepted") {
            return res.json("state value not correct")
        }else {
            const updateStateCandidature = await candidature.updateOne({
                state:state
            })
            res.send(updateStateCandidature)

        }

      }
      catch(err){
        res.send(err)
      }
}