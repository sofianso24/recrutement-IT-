import express from "express";
import {readCandidature,readOneCandidature,updateStateCandidature} from "../controllers/candidatureControllers.js"


export const candidatureRoutes = express.Router();

candidatureRoutes.get("/", readCandidature)
candidatureRoutes.get("/:id", readOneCandidature)
candidatureRoutes.patch("/:id", updateStateCandidature)


