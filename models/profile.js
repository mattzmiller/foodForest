const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const postSchema = require("./post");

const profileSchema = new Schema(
  {
    zipCode: { type: Number, required: true },
    username: { type: String, required: true },
    profilePicture: {
      type: String,
    },
    contactInfo: {
      type: String,
    },
    farmStandName: {
      type: String,
    },
    farmStandDescription: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
