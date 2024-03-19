const Job = require("../models/job-model");

const addJob = async (req, res) => {
  const { company, position, jobLocation, status, jobType } = req.body;
  // console.log(req.user, "useradas");
  try {
    const newJob = new Job({
      company,
      position,
      status,
      jobLocation,
      jobType,
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
  const { company, position, status, jobLocation, jobType } = req.body;
  try {
    const job = await Job.findByIdAndUpdate(
      id,
      { company, position, status, jobLocation, jobType },
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

const getJobByJobId = async (req, res) => {
  const { id } = req.query;

  try {
    const job = await Job.findById(id);
    console.log(job);
    res.status(200).json({ job: job });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const applyFilters = async (req, res) => {
  const { search, status, jobType, sort } = req.query;
  const company = search;
  // const position = search;
  // const location = search;
  const filteredJob = {};
  if (company) {
    filteredJob.company = { $regex: company, $options: "i" };
  }
  // if (position) {
  //   filteredJob.position = { $regex: position, $options: "i" };
  // }
  // if (location) {
  //   filteredJob.location = { $regex: location, $options: "i" };
  // }

  if (status) {
    filteredJob.status = status;
  }
  if (jobType) {
    filteredJob.jobType = jobType;
  }

  let sortOptions = {};

  if (sort === "latest") {
    sortOptions.createdAt = -1;
  } else if (sort === "oldest") {
    sortOptions.createdAt = 1;
  } else if (sort === "a-z") {
    sortOptions.company = 1;
  } else if (sort === "z-a") {
    sortOptions.company = -1;
  }

  try {
    const filteredJobs = await Job.find(filteredJob).sort(sortOptions);
    //console.log(filteredJobs);
    res
      .status(200)
      .json({ jobs: filteredJobs, totalJobs: filteredJobs.length });
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
  getJobByJobId,
  applyFilters,
};
