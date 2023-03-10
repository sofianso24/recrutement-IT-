import { Candidature } from "../models/candidature.js";
import { Candidat } from "./../models/candidat.js";
import { Offre } from "./../models/offre.js";

//read condidatures :

export const readCandidature = async (req, res) => {
  try {
    const candidature = await Candidature.find({});
    res.send(candidature);
  } catch (err) {
    res.send(err);
  }
};

//read one condidature :

export const readOneCandidature = async (req, res) => {
  try {
    const id = req.params.id;
    const candidature = await Candidature.findById(id);
    res.send(candidature);
  } catch (err) {
    res.send(err);
  }
};

//update one state condidature:

export const updateStateCandidature = async (req, res) => {
  try {
    const id = req.params.id;
    const candidature = await Candidature.findById(id);
    const state = req.body.state;

    if (state !== "enCours" && state !== "refus" && state !== "accepted") {
      return res.json("state value not correct");
    } else {
      const updateStateCandidature = await candidature.updateOne({
        state: state,
      });
      res.send(updateStateCandidature);
    }
  } catch (err) {
    res.send(err);
  }
};

export const newCandidature = async (req, res) => {
  const userId = req.cookies["userId"].userId;
  const candidat = await Candidat.find({ userInherit: userId });
  const candidatId = candidat[0]._id;
  const offre = await Offre.findOne({ title: req.body.title });
  if (!offre) {
    return res.json({ error: "offre not found" });
  }
  const offreId = offre._id;
  try {
    const new_candidatutre = new Candidature({
      candidat: candidatId,
      offre: offreId,
    });

    await new_candidatutre.save();
    res.send(new_candidatutre);
  } catch (err) {
    console.log(err);
  }
};

export const getCandidature = async (req, res) => {
  try {
    await Candidature.find({}).then((result) => {
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteCandidature = async (req, res) => {
  try {
    await Candidature.findOneAndDelete({ id: req.params.id });
    res.send("candidatutre supprimer");
  } catch (err) {
    console.log(err);
  }
};
