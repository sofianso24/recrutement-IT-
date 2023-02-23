import express from "express";

import { createOffre } from "../controllers/offreControllers.js";
import { showOffre } from "../controllers/offreControllers.js";
import { updateOffre } from "../controllers/offreControllers.js";
import { deleteOffre } from "../controllers/offreControllers.js";
import {
  recruteurAuthValidation,
  candidatAuthValidation,
} from "../middelwares/jwt.js";
import { getOffres, Oneoffre } from "../controllers/offreControllers.js";

export const offreRoutes = express.Router();

offreRoutes.post("/", recruteurAuthValidation, createOffre);
offreRoutes.get(
  "/:id",
  [recruteurAuthValidation, candidatAuthValidation],
  showOffre
);
offreRoutes.put("/:id", recruteurAuthValidation, updateOffre);
offreRoutes.delete("/:id", deleteOffre);

offreRoutes.get(
  "/find/:id",
  [recruteurAuthValidation, candidatAuthValidation],
  Oneoffre
);

offreRoutes.get(
  "/",
  [recruteurAuthValidation, candidatAuthValidation],
  getOffres
);
