import express from "express";
import {
  createUser,
  getAllUsers,
  deleteAllUsers,
  logIn,
  logOut,
} from "../controllers/userControllers.js";
import { adminAuthValidation } from "../middelwares/jwt.js";

export const userRoutes = express.Router();

import { deleteUser } from "../controllers/userControllers.js";
import { updateUser } from "../controllers/userControllers.js";

userRoutes.delete("/user/:id", deleteUser);
userRoutes.put("/user/:id", updateUser);

userRoutes.get("/", adminAuthValidation, getAllUsers);
userRoutes.post("/create", createUser);
userRoutes.delete("/deleteAllUsers", adminAuthValidation, deleteAllUsers);
userRoutes.post("/login", logIn);
userRoutes.get("/logout", logOut);
