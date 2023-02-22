import express from "express";
import {creerCategorie} from"../controllers/adminControllers.js";
import {affichCategorie} from"../controllers/adminControllers.js";
import {updateCategorie} from"../controllers/adminControllers.js";
import {supriCategorie} from"../controllers/adminControllers.js";

export const adminRoutes = express.Router();

adminRoutes.post("/creerCategorie",creerCategorie)
adminRoutes.get("/affichCategorie",affichCategorie);
adminRoutes.put("/updateCategorie/:id",updateCategorie);
adminRoutes.delete("/supriCategorie/:id",supriCategorie);

import {
  deleteAllAdmins,
  getAllAdmins,
} from "../controllers/adminControllers.js";

adminRoutes.get("/", getAllAdmins);
adminRoutes.delete("/deleteAllAdmins", deleteAllAdmins);

