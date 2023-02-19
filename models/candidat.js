import mongoose from "mongoose";

const Schema = mongoose.Schema;

const candidatSchema = new Schema({
  userInherit: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  description: String,
  cv: {
    data: Buffer,
    contentType: String,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
});

export const Candidat = mongoose.model("candidat", candidatSchema);
