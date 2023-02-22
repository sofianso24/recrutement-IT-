import express from "express";
import {newCandidature,getCandidature,deleteCandidature} from "../controllers/candidatureControllers.js"


export const candidatureRoutes = express.Router();

candidatureRoutes.post("/", newCandidature)

candidatureRoutes.get("/", getCandidature)

candidatureRoutes.delete("/delete/:id", deleteCandidature )





