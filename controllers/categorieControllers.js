import { Categorie } from "../models/categorie.js";

// Route pour créer une nouvelle catégorie
export const creerCategorie = async (req, res) => {
  try {
    const categorie = new Categorie({
      admin: req.cookies["userId"].userId,
      nom: req.body.nom,
      description: req.body.description,
    });
    await categorie.save();
    res.status(201).send(categorie);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Route pour récupérer toutes les catégories
export const affichCategorie = async (req, res) => {
  try {
    const categories = await Categorie.find({});
    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Route pour mettre à jour une catégorie spécifique en fonction de son identifiant
export const updateCategorie = async (req, res) => {
  try {
    const id = req.params.id;
    const categorie = await Categorie.findById(id);
    const updatedCategorie = await categorie.updateOne(req.body);
    res.send(updatedCategorie);
  } catch (error) {
    res.status(500).send(error);
  }
};
// Route pour supprimer une catégorie spécifique en fonction de son identifiant
export const supriCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.findByIdAndDelete(req.params.id);

    if (!categorie) {
      return res.status(404).send("categorie not found");
    }

    res.send(categorie);
  } catch (error) {
    res.status(500).send(error);
  }
};
