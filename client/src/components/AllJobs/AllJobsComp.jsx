import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobCard from "./JobCard";

const AllJobsComp = ({ jobsData, editJob, deleteJob }) => {
  const token = sessionStorage.getItem("token");

  const [filteredJobs, setFilteredJobs] = useState([]);

  const [paramFilters, setParamFilters] = useState({
    search: "",
    jobType: "",
    status: "",
    sort: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setParamFilters((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (
      paramFilters.search === "" &&
      paramFilters.jobType === "" &&
      paramFilters.status === "" &&
      paramFilters.sort === ""
    ) {
      //console.log(jobsData,"jDa");
      getFilteredData();
      setFilteredJobs(jobsData);
    } else {
      getFilteredData();
    }
  }, [paramFilters]);

  const getFilteredData = async () => {
    const config = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: { ...paramFilters },
    };

    try {
      const res = await axios(
        `${process.env.REACT_APP_JOBS_APP_URL}/applyFilters`,
        config
      );
      const data = res.data;
      setFilteredJobs(data);
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

  const handleReset = (e) => {
    //e.preventDefault();
    e.stopPropagation();
    setParamFilters({
      search: "",
      jobType: "",
      status: "",
      sort: "",
    });
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
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
                placeholder="Company"
                name="search"
                className="input input-bordered"
                onChange={(e) => changeHandler(e)}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select
                className="select select-bordered"
                name="status"
                onChange={(e) => changeHandler(e)}
              >
                <option disabled selected>
                  Select Status
                </option>
                <option>interview</option>
                <option>declined</option>
                <option>pending</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Type</span>
              </label>
              <select
                className="select select-bordered"
                name="jobType"
                onChange={(e) => changeHandler(e)}
              >
                <option disabled selected>
                  Select Job Type
                </option>
                <option>full-time</option>
                <option>part-time</option>
                <option>remote</option>
                <option>internship</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sort</span>
              </label>
              <select
                className="select select-bordered"
                name="sort"
                onChange={(e) => changeHandler(e)}
              >
                <option disabled selected>
                  Select Sort
                </option>
                <option>latest</option>
                <option>oldest</option>
                <option>a-z</option>
                <option>z-a</option>
              </select>
            </div>

            <div className="flex gap-2 justify-start place-items-end">
              <button
                className="btn btn-error text-white w-1/2 tracking-widest"
                onClick={(e) => handleReset(e)}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </form>
      </div>

      {filteredJobs && (
        <div className="my-6 mx-4 px-4 py-4 w-[98%] flex flex-col justify-start place-items-start">
          <h2 className="font-bold text-xl">
            {filteredJobs?.totalJobs} Jobs Found
          </h2>
          <div className="grid grid-cols-2 gap-4 my-4 w-full">
            {filteredJobs?.jobs?.map((job) => {
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
