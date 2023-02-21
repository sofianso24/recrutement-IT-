import { Candidat } from "../models/candidat.js";

export const getAllCandidat = async (req, res) => {
  try {
    const candidats = await Candidat.find();
    res.json(candidats);
  } catch (error) {
    res.json(error);
  }
};
