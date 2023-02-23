import express from "express";

import {
  readCandidature,
  readOneCandidature,
  updateStateCandidature,
} from "../controllers/candidatureControllers.js";

import {
  newCandidature,
  getCandidature,
  deleteCandidature,
} from "../controllers/candidatureControllers.js";
import {
  recruteurAuthValidation,
  candidatAuthValidation,
} from "../middelwares/jwt.js";

export const candidatureRoutes = express.Router();

candidatureRoutes.get(
  "/",
  [recruteurAuthValidation, candidatAuthValidation],
  readCandidature
);
candidatureRoutes.get(
  "/:id",
  [recruteurAuthValidation, candidatAuthValidation],
  readOneCandidature
);
candidatureRoutes.patch(
  "/:id",
  [recruteurAuthValidation, candidatAuthValidation],
  updateStateCandidature
);

candidatureRoutes.post("/", candidatAuthValidation, newCandidature);

// candidatureRoutes.get("/", getCandidature) // same as readCandidature

candidatureRoutes.delete(
  "/delete/:id",
  candidatAuthValidation,
  deleteCandidature
);
