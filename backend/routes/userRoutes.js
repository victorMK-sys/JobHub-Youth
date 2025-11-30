const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { verifyToken } = require('../middleware/auth')

router.get("/", verifyToken, async (req, res) => {
  try{
    const users = await User.find()

    if(users.length > 0) {return res.json(users)}
    else {return res.status(404).json({ message: "No Users found!" })}
  } catch(err) {
    console.error(err.message)
  }
})

router.get("/:id", verifyToken, async (req, res) => {
  try{
    const user = await User.findById(req.params.id)

    if(user) return res.status(200).json({ message: user })
    else return res.status(404).json({ message: "User was not found!" })
  } catch(err) {
    console.error(err.message)
  }
})

router.post("/", async (req, res) => {
  const { uname, email, pass, phone, emp, git, quote } = req.body
  const duplicate = await User.findOne({email})

  if(duplicate) {
    return res.status(403).json({ message: "A user by the same email already exists. Login instead" })
  }
  try{
    const hashedPass = await bcrypt.hash(pass, 10)
    const user = new User({ uname, email, hashedPass, phone, emp, git, quote })
    const saved = await user.save()

    const token = jwt.sign(
      {
        id: saved._id,
        email: saved.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    )
    res.status(201).json({ message: "User added sucessfully", token: token, user: saved })
  } catch(err) {
    console.error(err.message)
  }
})

router.put("/:id", verifyToken, async (req, res) => {
  try{
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if(user) return res.status(201).json({ message: user })
    else return res.status(404).json({ message: "User was not found!" })
  } catch(err) {
    console.error(err.message)
  }
})

router.delete("/", async (req, res) => {
  try{
    const user = await User.findByIdAndDelete(req.params.id)

    if(user) res.status(200).json({ message: "User deleted!" })
    else return res.status(404).json({ message: "User was not found!" })
  } catch(err) {
    console.error(err.message)
  }
})

module.exports = router