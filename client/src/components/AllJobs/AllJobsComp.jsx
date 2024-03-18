import React from "react";
import JobCard from "./JobCard";

const AllJobsComp = ({ jobsData, editJob, deleteJob }) => {
  return (
    <>
      <div className="bg-white rounded-md shadow-xl w-[98%] my-6 mx-4 px-4 py-4 flex flex-col justify-start place-items-start">
        <h2 className="font-semibold tracking-wide text-2xl">Search Form</h2>
        <form className="w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-3 my-4 gap-4 p-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Search</span>
              </label>
              <input
                type="text"
                placeholder="Company / Position / Location"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select className="select select-bordered">
                <option>interview</option>
                <option>declined</option>
                <option selected>pending</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Type</span>
              </label>
              <select className="select select-bordered">
                <option selected>full-time</option>
                <option>part-time</option>
                <option>remote</option>
                <option>internship</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sort</span>
              </label>
              <select className="select select-bordered">
                <option selected>latest</option>
                <option>oldest</option>
                <option>a-z</option>
                <option>z-a</option>
              </select>
            </div>

            <div className="flex gap-2 justify-start place-items-end">
              <button className="btn btn-error text-white w-1/2 tracking-widest">
                Clear Filters
              </button>
              {/* <button className="btn btn-primary w-1/2 tracking-wider">
                Submit
              </button> */}
            </div>
          </div>
        </form>
      </div>

      {jobsData && (
        <div className="my-6 mx-4 px-4 py-4 w-[98%] flex flex-col justify-start place-items-start">
          <h2 className="font-bold text-xl">{jobsData.totalJobs} Jobs Found</h2>
          <div className="grid grid-cols-2 gap-4 my-4 w-full">
            {jobsData.jobs.map((job) => {
              return (
                <JobCard job={job} editJob={editJob} deleteJob={deleteJob} />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default AllJobsComp;
