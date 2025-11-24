const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  job_id: {type: Number, require},
  job_name: { type: String, require: true },
  job_description: { type: String, require: true },
  job_employmentType: { type: String, require: true },
  job_url: { type: String }
}, { timestamps: true })

const Job = mongoose.model("Job", jobSchema)

module.exports = Job