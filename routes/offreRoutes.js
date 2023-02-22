import express from "express";
import { getOffres, Oneoffre } from "../controllers/offreControllers.js";

export const offreRoutes = express.Router();

offreRoutes.get("/", getOffres)
offreRoutes.get("/find/:id", Oneoffre )
