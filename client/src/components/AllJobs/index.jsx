import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../Home";
import AllJobsComp from "./AllJobsComp";

const AllJobs = () => {
  const token = sessionStorage.getItem("token");
  const userObj = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();

  const [jobsData, setJobsData] = useState();

  const getAllJobsByUserId = async () => {
    const paramsData = {
      userId: userObj._id,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: { ...paramsData },
    };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_JOBS_APP_URL}/jobs`,
        config
      );
      const data = res.data;
      console.log(data.message);
      setJobsData(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllJobsByUserId();
  }, [token, userObj]);

  const editJob = async (jobId) => {
    console.log(jobId);
    navigate(`/edit-job/${jobId}`);
  };

  const deleteJob = async (jobId) => {
    console.log(jobId);
    const paramsData = {
      id: jobId,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: { ...paramsData },
    };
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_JOBS_APP_URL}/jobs`,
        config
      );
      const data = res.data;
      toast.success(data.message);
      getAllJobsByUserId();
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="">
        <Home
          component={
            <AllJobsComp
              jobsData={jobsData}
              editJob={editJob}
              deleteJob={deleteJob}
            />
          }
        />
      </div>
    </>
  );
};

export default AllJobs;
