import {User} from "../models/user.js"

// delete a user :

export const deleteUser = async (req,res)=>{
    try{
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        res.send("profile is deleted")
    }
    catch(err){
        res.send(err)
    }
}

// update a user :

export const updateUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const user = await User.findById(id)
        const updateUser = await user.updateOne(
               { nom: req.body.nom,
                 prenom:req.body.prenom,
                 mail: req.body.mail,
                 password:req.body.mail      
            }      
        )
        res.send(updateUser)
    }
    catch(err){
        res.send(err)
    }
}