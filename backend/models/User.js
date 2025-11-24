const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  user_id: { type: Number },
  user_name: { type: String, require: true },
  user_email: { type: String, unique: true, require: true},
  user_phone: { type: String },
  user_role: { type: String, default: "user" },
  user_profile_picture: { type: String }
})

const User = mongoose.model("User", userSchema)

module.exports = User