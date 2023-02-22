
import mongoose from 'mongoose'
import {Categorie} from '../models/categorie.js'

// Route pour créer une nouvelle catégorie
export const creerCategorie = async (req, res) => {
  try {
    const categorie = new Categorie(req.body);
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
    const id = req.params.id
    const categorie = await Categorie.findById(id)
    const updatedCategorie = await categorie.updateOne(req.body)
    res.send(updatedCategorie)
  } catch (error) {
    res.status(500).send(error);
  }
  
}
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

import { Admin } from "../models/admin.js";

export const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.json(error);
  }
};

export const deleteAllAdmins = async (req, res) => {
  try {
    await Admin.deleteMany();
    res.json("all admins are deleted");
  } catch (error) {
    res.json(error);
  }
};


