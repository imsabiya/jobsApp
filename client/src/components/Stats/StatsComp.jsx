import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StatsComp = () => {
  const [jobs, setJobs] = useState({});
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");

  const getJobsData = async () => {
    const paramsData = { userId: user._id };
    const config = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: { ...paramsData },
    };

    try {
      const res = await axios(
        `${process.env.REACT_APP_JOBS_APP_URL}/jobs`,
        config
      );
      const data = res.data;
      console.log(data, "data");
      setJobs(data);
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

  useEffect(() => {
    getJobsData();
  }, []);

  const getStatusCount = (status) => {
    return jobs.jobs?.filter((data) => data.status === status).length;
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="bg-white px-12 py-8 m-0 my-4 mx-2 flex flex-col justify-start place-items-start w-[98%] rounded-md shadow-xl ">
        <h2 className="font-semibold tracking-wide text-2xl pb-2">Stats</h2>
        Dashboard
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 my-4 w-full">
          <div className="flex flex-col h-36 bg-primary rounded-md bg-slate-100 p-4 gap-2 justify-between place-items-start border-b-4 border-yellow-400">
            <div className="flex justify-between place-items-center w-full p-2">
              <h2 className="text-5xl font-semibold">
                {getStatusCount("pending")}
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-yellow-600 bg-yellow-300 p-2 rounded-md "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <div className="text-xl font-semibold">Pending Applications</div>
          </div>
          <div className="flex flex-col  h-36 bg-primary rounded-md bg-slate-100 p-4 gap-2 justify-between place-items-start border-b-4 border-indigo-400">
            <div className="flex justify-between place-items-center w-full p-2">
              <h2 className="text-5xl font-semibold">
                {getStatusCount("interview")}
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-indigo-600 bg-indigo-300 p-2 rounded-md"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </div>
            <div className="text-xl font-semibold">Interviews Scheduled</div>
          </div>
          <div className="flex flex-col  h-36 bg-primary rounded-md bg-slate-100 p-4 gap-2 justify-between place-items-start border-b-4 border-red-600">
            <div className="flex justify-between place-items-center w-full p-2">
              <h2 className="text-5xl font-semibold">
                {getStatusCount("declined")}
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-red-600 bg-red-300 p-2 rounded-md"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082"
                />
              </svg>
            </div>
            <div className="text-xl font-semibold">Jobs Declined</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsComp;
