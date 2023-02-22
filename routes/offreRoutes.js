import express from "express";

import { createOffre } from "../controllers/offreControllers.js";
import { showOffre } from "../controllers/offreControllers.js";
import { updateOffre } from "../controllers/offreControllers.js";
import { deleteOffre } from "../controllers/offreControllers.js";

export const offreRoutes = express.Router();

offreRoutes.post("/", createOffre)
offreRoutes.get("/:id",showOffre)
offreRoutes.put("/:id",updateOffre)
offreRoutes.delete("/:id",deleteOffre)



import { getOffres, Oneoffre } from "../controllers/offreControllers.js";



offreRoutes.get("/", getOffres)
offreRoutes.get("/find/:id", Oneoffre )


