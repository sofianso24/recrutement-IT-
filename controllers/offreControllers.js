import {Offre} from "../models/offre.js"


// create offre :
export const createOffre = async(req,res)=>{
 //logic to get recruteur id? from user id

    const offre = new Offre({
        // recruteur:req.body_id,
        categories:req.body.categories,
        title:req.body.title,
        description:req.body.description,
        dateLimit:req.body.dateLimit
    })
    
    try {
        await offre.save()
        res.json(offre)
        
    } catch (error) {
        res.json(error)
    }


}

// show specific offre :

export const showOffre = async(req,res)=>{
    try{
        const id = req.params.id;
        const offre = await Offre.findById(id)
 
           res.send(offre)
    

    }
    catch(err){
        res.send(err)
    }
} 

// update specific offre :

export const updateOffre = async(req,res)=>{
    try{
        const id = req.params.id;
        const offre = await Offre.findById(id)
        const updatedOffre = await offre.updateOne(
           { categories : req.body.categories,
            title:req.body.title,
            dateLimit: req.body.dateLimit,
            description: req.body.description}
        )
 
           res.send(offre)
    

    }
    catch(err){
        res.send(err)
    }
} 

// delete specific offre

export const deleteOffre = async(req,res)=>{
    try{
        const id = req.params.id;
        const offre = await Offre.findByIdAndDelete(id);
       
        

        res.send("is deleted")
    

    }
    catch(err){
        res.send(err)
    }
} 

