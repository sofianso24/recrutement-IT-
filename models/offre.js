import mongoose from "mongoose";

const Schema = mongoose.Schema;

const offreSchema = new Schema({
  recruteur: {
    type: Schema.Types.ObjectId,
    ref: "Recruteur",
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Categorie",
    },
  ],
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateCreation: {
    type: Date,
    default: Date.now,
  },
  dateLimit: Date,
});

export const Offre = mongoose.model("offre", offreSchema);
