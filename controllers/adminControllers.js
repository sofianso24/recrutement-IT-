import { Admin } from "../models/admin.js";

export const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.json(error);
  }
};

export const deleteAllAdmins = async (req, res) => {
  try {
    await Admin.deleteMany();
    res.json("all admins are deleted");
  } catch (error) {
    res.json(error);
  }
};
