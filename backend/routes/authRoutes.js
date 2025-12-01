const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { uname, pass } = req.body;
    const user = await User.findOne({
      $or: [{ uname: uname }, { email: uname }],
    });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Username/Email does not exist. Signup instead" });
    }

    const validPassword = await bcrypt.compare(pass, user.hashedPass);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password." });
    }

    const token = jwt.sign(
      {
        id: user._id,
        uname: user.uname,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    if (user.uname === process.env.ADMIN)
      return res.status(200).json({ message: process.env.ADMIN, token: token });

    return res.status(200).json({
      message: "Success",
      token: token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
