import { Recruteur } from "../models/recruteur.js";

export const getAllRecruteurs = async (req, res) => {
  try {
    const recruteurs = await Recruteur.find();
    res.json(recruteurs);
  } catch (error) {
    res.json(error);
  }
};
