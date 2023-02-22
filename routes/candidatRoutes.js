import express from "express";
import { getAllCandidat } from "./../controllers/candidatControllers.js";

export const candidatRoutes = express.Router();

candidatRoutes.get("/", getAllCandidat);

