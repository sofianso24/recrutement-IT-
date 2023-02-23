import express from "express";
import { creerCategorie } from "../controllers/categorieControllers.js";
import { affichCategorie } from "../controllers/categorieControllers.js";
import { updateCategorie } from "../controllers/categorieControllers.js";
import { supriCategorie } from "../controllers/categorieControllers.js";
import {
  adminAuthValidation,
  recruteurAuthValidation,
} from "../middelwares/jwt.js";

export const categorieRoutes = express.Router();

categorieRoutes.post("/creerCategorie", adminAuthValidation, creerCategorie);
categorieRoutes.get(
  "/affichCategorie",
  [adminAuthValidation, recruteurAuthValidation],
  affichCategorie
);
categorieRoutes.put(
  "/updateCategorie/:id",
  adminAuthValidation,
  updateCategorie
);
categorieRoutes.delete(
  "/supriCategorie/:id",
  adminAuthValidation,
  supriCategorie
);
