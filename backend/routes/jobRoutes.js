const express = require('express')
const router = express().router()
const Job = require('../models/Job')

router.get("/", async (req, res) => {
  try{
    const jobs = await Job.find()

    if(jobs.length > 0) return res.json(jobs)
    else return res.status(400).json({ message: "No job found!" })
  } catch(err) {
    console.error(err.message)
  }
})

router.get("/:id", async (req, res) => {
  try{
    const job = await Job.findById(req.params.id)

    if(job) return res.status(200).json({ message: job })
    else return res.status(400).json({ message: "Job was not found!" })
  } catch(err) {
    console.error(err.message)
  }
})

router.post("/", async (req, res) => {
  const { job_name, job_description, job_vacancies, job_employerId } = req.body

  try{
    const job = new Job({ job_name, job_description, job_vacancies, job_employerId })
    const saved = await job.save()

    res.status(201).json(saved)
  } catch(err) {
    console.error(err.message)
  }
})

router.put("/:id", async (req, res) => {
  try{
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if(job) return res.status(201).json({ message: job })
    else return res.status(400).json({ message: "Job was not found!" })
  } catch(err) {
    console.error(err.message)
  }
})

router.delete("/", async (req, res) => {
  try{
    const job = await Job.findByIdAndDelete(req.params.id)

    if(job) res.status(200).json({ message: "Job deleted!" })
    else return res.status(400).json({ message: "Job was not found!" })
  } catch(err) {
    console.error(err.message)
  }
})

module.exports = router