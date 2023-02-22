import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { userRoutes } from "./routes/userRoutes.js";
import { adminRoutes } from "./routes/adminRoutes.js";
import { recruteurRoutes } from "./routes/recruteurRoutes.js";
import { candidatRoutes } from "./routes/candidatRoutes.js";
import { categorieRoutes } from "./routes/categorieRoutes.js";
import { candidatureRoutes } from "./routes/candidatureRoutes.js";
import { offreRoutes } from "./routes/offreRoutes.js";

dotenv.config();
const port = process.env.PORT;
const dbURI = process.env.DBURI;

const app = express();
mongoose.set("strictQuery", true);
mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(port, () => {
      console.log(`this app is running in port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/admins", adminRoutes);
app.use("/recruteurs", recruteurRoutes);
app.use("/candidats", candidatRoutes);
app.use("/categories", categorieRoutes);
app.use("/candidatures", candidatureRoutes);
app.use("/offres", offreRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});
