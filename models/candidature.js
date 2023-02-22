import mongoose from "mongoose";

const Schema = mongoose.Schema;

const candidatureSchema = new Schema(
  {
    candidat: {
      type: Schema.Types.ObjectId,
      ref: "candidat",
    },

    offre: {
      type: Schema.Types.ObjectId,
      ref: "offre",
    },
    state:{
      type:String,
      enum:["enCours","refus","acccepted"],
      required:true,
      default:"enCours"
    }
  },
  { timestamps: true }
);

export const Candidature = mongoose.model("candidature", candidatureSchema);
