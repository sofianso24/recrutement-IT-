import express from "express";

import {
  deleteAllAdmins,
  getAllAdmins,
} from "../controllers/adminControllers.js";
import { adminAuthValidation } from "../middelwares/jwt.js";

export const adminRoutes = express.Router();

adminRoutes.get("/", adminAuthValidation, getAllAdmins);
adminRoutes.delete("/deleteAllAdmins", adminAuthValidation, deleteAllAdmins);
