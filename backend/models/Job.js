const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  job_name: { type: String, require: true },
  job_description: { type: Text, require: true },
  job_vacancies: { type: Number, require: true },
  job_employerId: { type: Number }
}, { timestamps: true })

const Job = mongoose.model("Job", jobSchema)

module.exports = Job