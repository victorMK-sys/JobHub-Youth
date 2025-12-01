const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uname: { type: String },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  hashedPass: { type: String, required: true },
  phone: { type: String },
  emp: { type: Boolean, default: false },
  git: { type: String },
  quote: { type: String, default: "--No quote--" },
  jobApplied: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  user_profile_picture: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
