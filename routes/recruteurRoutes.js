import express from "express";
import { getAllRecruteurs } from "../controllers/recruteurControllers.js";

export const recruteurRoutes = express.Router();

recruteurRoutes.get("/", getAllRecruteurs);

