const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get("/", async (req, res) => {
  try{
    const users = await User.find()

    if(users.length > 0) {return res.json(users)}
    else {return res.status(404).json({ message: "No Users found!" })}
  } catch(err) {
    console.error(err.message)
  }
})

router.get("/:id", async (req, res) => {
  try{
    const user = await User.findById(req.params.id)

    if(user) return res.status(200).json({ message: user })
    else return res.status(404).json({ message: "User was not found!" })
  } catch(err) {
    console.error(err.message)
  }
})

router.post("/", async (req, res) => {
  const { user_name, user_description, user_vacancies, user_employerId } = req.body

  try{
    const user = new User({ user_name, user_description, user_vacancies, user_employerId })
    const saved = await user.save()

    res.status(201).json(saved)
  } catch(err) {
    console.error(err.message)
  }
})

router.put("/:id", async (req, res) => {
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