import express from "express";
import {
  deleteAllAdmins,
  getAllAdmins,
} from "../controllers/adminControllers.js";

export const adminRoutes = express.Router();

adminRoutes.get("/", getAllAdmins);
adminRoutes.delete("/deleteAllAdmins", deleteAllAdmins);
