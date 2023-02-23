import { Offre } from "../models/offre.js";
import { Categorie } from "./../models/categorie.js";
import { Recruteur } from "./../models/recruteur.js";

// create offre :
export const createOffre = async (req, res) => {
  //logic to get recruteur id? from user id
  const userId = req.cookies["userId"].userId;
  const categorieId = await Categorie.find({ nom: req.body.categories })._id;
  const recruteurId = await Recruteur.find({
    userInherit: userId,
  });
  console.log(userId);
  console.log(recruteurId[0]._id);
  console.log(categorieId);
  const offre = new Offre({
    recruteur: recruteurId[0]._id,
    title: req.body.title,
    description: req.body.description,
    dateLimit: req.body.dateLimit,
  });
  offre.categories.push(categorieId);

  try {
    await offre.save();
    res.json(offre);
  } catch (error) {
    res.json(error);
  }
};

// show specific offre :

export const showOffre = async (req, res) => {
  try {
    const id = req.params.id;
    const offre = await Offre.findById(id);

    res.send(offre);
  } catch (err) {
    res.send(err);
  }
};

// update specific offre :

export const updateOffre = async (req, res) => {
  try {
    const id = req.params.id;
    const offre = await Offre.findById(id);
    const updatedOffre = await offre.updateOne({
      categories: req.body.categories,
      title: req.body.title,
      dateLimit: req.body.dateLimit,
      description: req.body.description,
    });

    res.send(offre);
  } catch (err) {
    res.send(err);
  }
};

// delete specific offre

export const deleteOffre = async (req, res) => {
  try {
    const id = req.params.id;
    const offre = await Offre.findByIdAndDelete(id);

    res.send("is deleted");
  } catch (err) {
    res.send(err);
  }
};

export const getOffres = async (req, res) => {
  try {
    await Offre.find({}).then((result) => {
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

export const Oneoffre = async (req, res) => {
  try {
    const offre = await Offre.findOne({ id: req.params.id });
    res.send(offre);
  } catch (err) {
    console.log(err);
  }
};
