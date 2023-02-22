import express from "express";

export const candidatRoutes = express.Router();

import {updateprofil,deleteCandidat} from "../controllers/candidatControllers.js"


candidatRoutes.put("/update/:id",updateprofil)
candidatRoutes.delete("/delete/:id",deleteCandidat)

import { getAllCandidat } from "./../controllers/candidatControllers.js";



candidatRoutes.get("/", getAllCandidat);


