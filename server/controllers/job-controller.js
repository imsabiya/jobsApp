const Job = require("../models/job-model");

const addJob = async (req, res) => {
  const { company, position, status } = req.body;
  // console.log(req.user, "useradas");
  try {
    const newJob = new Job({
      company,
      position,
      status,
      createdBy: req.user.id,
    });
    await newJob.save();
    res.status(200).json({ message: "Job created successfully", data: newJob });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateJob = async (req, res) => {
  const { id } = req.query;
  //console.log(id, "id")
  const { company, position, status } = req.body;
  try {
    const job = await Job.findByIdAndUpdate(
      id,
      { company, position, status },
      { new: true }
    );
    //console.log(job, "job");
    if (!job) {
      return res.status(401).json({ message: `Job doesn't exist` });
    }
    return res
      .status(200)
      .json({ message: "Job updated successfully", data: job });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteJob = async (req, res) => {
  const { id } = req.query;
  //console.log(id, "id")
  try {
    const job = await Job.findByIdAndDelete(id);
    console.log(job, "job");
    if (!job) {
      return res.status(401).json({ message: `Job doesn't exist` });
    }
    return res
      .status(200)
      .json({ message: "Job deleted successfully", data: job });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json({ message: { jobs: jobs, totalJobs: jobs.length } });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getAllJobsByUserId = async (req, res) => {
  const { userId } = req.query;
  try {
    const filteredJob = {};

    filteredJob.createdBy = userId;

    const filteredJobs = await Job.find(filteredJob);
    //console.log(filteredJobs, filteredJobs.length);
    res.status(200).json({
      message: { jobs: filteredJobs, totalJobs: filteredJobs.length },
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  addJob,
  updateJob,
  deleteJob,
  getAllJobs,
  getAllJobsByUserId,
};
