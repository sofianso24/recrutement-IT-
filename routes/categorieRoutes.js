import express from "express";
import { creerCategorie } from "../controllers/categorieControllers.js";
import { affichCategorie } from "../controllers/categorieControllers.js";
import { updateCategorie } from "../controllers/categorieControllers.js";
import { supriCategorie } from "../controllers/categorieControllers.js";

export const categorieRoutes = express.Router();

categorieRoutes.post("/creerCategorie", creerCategorie);
categorieRoutes.get("/affichCategorie", affichCategorie);
categorieRoutes.put("/updateCategorie/:id", updateCategorie);
categorieRoutes.delete("/supriCategorie/:id", supriCategorie);
