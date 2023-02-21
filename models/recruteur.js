import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recruteurSchema = new Schema({
  userInherit: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],

  companyName: {
    type: String,
    required: true,
  },
});

export const Recruteur = mongoose.model("recruteur", recruteurSchema);
