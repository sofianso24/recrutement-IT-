import express from "express";
import {
  updateprofil,
  deleteCandidat,
} from "../controllers/candidatControllers.js";
import { getAllCandidat } from "./../controllers/candidatControllers.js";
import {
  candidatAuthValidation,
  recruteurAuthValidation,
} from "./../middelwares/jwt.js";

export const candidatRoutes = express.Router();

candidatRoutes.put("/update/:id", candidatAuthValidation, updateprofil);
candidatRoutes.delete("/delete/:id", candidatAuthValidation, deleteCandidat);

candidatRoutes.get("/", recruteurAuthValidation, getAllCandidat);
