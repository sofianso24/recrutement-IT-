import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorieSchema = new Schema(
  {
    admin: {
      type: Schema.Types.ObjectId,
      ref: "admin",
    },
    nom: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Categorie = mongoose.model("categorie", categorieSchema);
