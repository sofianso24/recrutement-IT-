import express from "express";

export const userRoutes = express.Router();

import { deleteUser } from "../controllers/userControllers.js";
import { updateUser } from "../controllers/userControllers.js";

userRoutes.delete("/user/:id",deleteUser)
userRoutes.put("/user/:id",updateUser)

