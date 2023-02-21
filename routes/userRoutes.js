import express from "express";
import {
  createUser,
  getAllUsers,
  deleteAllUsers,
  logIn,
} from "../controllers/userControllers.js";
import { adminAuthValidation } from "../middelwares/jwt.js";

export const userRoutes = express.Router();

userRoutes.get("/", adminAuthValidation, getAllUsers);
userRoutes.post("/create", createUser);
userRoutes.delete("/deleteAllUsers", deleteAllUsers);
userRoutes.post("/login", logIn);
