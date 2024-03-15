import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../Home";
import AllJobsComp from "./AllJobsComp";

const AllJobs = () => {
  const token = sessionStorage.getItem("token");
  const userObj = JSON.parse(sessionStorage.getItem("user"));
  //console.log(token, userObj._id);

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
  }, []);

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="">
        <Home component={<AllJobsComp jobsData={jobsData} />} />
      </div>
    </>
  );
};

export default AllJobs;
