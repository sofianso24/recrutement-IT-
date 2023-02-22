import { User } from "../models/user.js";

// delete a user :

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    res.send("profile is deleted");
  } catch (err) {
    res.send(err);
  }
};

// update a user :

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    const updateUser = await user.updateOne({
      nom: req.body.nom,
      prenom: req.body.prenom,
      mail: req.body.mail,
      password: req.body.mail,
    });
    res.send(updateUser);
  } catch (err) {
    res.send(err);
  }
};

import { Admin } from "../models/admin.js";
import { Candidat } from "../models/candidat.js";
import { Recruteur } from "../models/recruteur.js";
import bcrypt from "bcrypt";
import { createToken } from "../middelwares/jwt.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

export const createUser = async (req, res) => {
  const userType = req.body.userType;
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const mail = req.body.mail;
  const password = req.body.password;
  const salt = bcrypt.genSaltSync(10);

  const hashedPassword = await bcrypt.hash(password, salt);
  const user = new User({
    userType,
    nom,
    prenom,
    mail,
    password: hashedPassword,
  });

  await user.save();
  if (user.userType === "admin") {
    try {
      const admin = new Admin({
        userInherit: user._id,
      });
      await admin.save();
      res.json(admin);
    } catch (error) {
      res.json(error);
    }
  } else if (user.userType === "candidat") {
    try {
      const description = req.body.description;
      const cv = req.body.cv;
      const img = req.body.img;
      const candidat = new Candidat({
        userInherit: user._id,
        description,
        cv,
        img,
      });
      await candidat.save();
      res.json(candidat);
    } catch (error) {
      res.json(error);
    }
  } else if (user.userType === "recruteur") {
    try {
      const companyName = req.body.companyName;
      const recruteur = new Recruteur({
        companyName,
      });
      recruteur.userInherit.push(user._id);
      await recruteur.save();
      res.json(recruteur);
    } catch (error) {
      res.json(error);
    }
  }
};

export const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany();
    res.json("all users deleted");
  } catch (error) {
    res.json(error);
  }
};

export const logIn = async (req, res) => {
  const { mail, password } = req.body;
  const user = await User.findOne({ mail });

  if (!user) {
    res.json("user not found");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    res.json("password is incorrect");
  }

  const authToken = createToken(user);
  const userId = user._id.toString();

  res.cookie("auth-token", { authToken }, { maxAge: 60 * 60 * 24 * 1000 });
  res.cookie("userId", { userId }); // maxAge: 30 days
  res.json(userId);
};

export const logOut = async (req, res) => {
  try {
    res.clearCookie("auth-token");
    res.clearCookie("userId");
    res.json("cleared");
  } catch (error) {
    res.json(error);
  }
};
