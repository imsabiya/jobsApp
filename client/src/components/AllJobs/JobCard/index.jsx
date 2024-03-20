import React from "react";

const JobCard = ({ job, editJob, deleteJob }) => {
  const getDate = (date) => {
    return new Date(date).toDateString();
  };

  const getBgColor = (status) => {
    let res;
    switch (status) {
      case "pending":
        res = "bg-yellow-400";
        break;
      case "interview":
        res = "bg-indigo-400";
        break;
      case "declined":
        res = "bg-red-400";
        break;
      default:
        res = "bg-neutral";
    }
    return res;
  };

  return (
    <>
      <div className="bg-white shadow-xl rounded-md p-2 flex flex-col justify-start place-items-start">
        <div className="flex p-2 gap-x-8 w-full justify-start place-items-center border-b-2 m-1 pb-4">
          <div className="bg-indigo-500 rounded-md w-14 h-14 text-white flex justify-center place-items-center font-semibold capitalize text-2xl">
            {job.company[0]}
          </div>
          <div className="flex flex-col gap-2 justify-start place-items-start capitalize">
            <p className="text-xl font-semibold tracking-wide">
              {job.position}
            </p>
            <p className="text-slate-400 font-semibold">{job.company}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 w-full gap-4 justify-center place-items-start p-2 my-2">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            {job.jobLocation}
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
            {getDate(job.createdAt)}
          </div>
          <div className="capitalize flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
            {job.jobType}
          </div>
          <div
            className={`${getBgColor(
              job.status
            )} text-white rounded-md p-1 tracking-wide capitalize text-sm`}
          >
            {job.status}
          </div>
        </div>
        <div className="flex gap-2 justify-start p-2 m-2">
          <button
            className="bg-green-300 text-green-800 w-1/2 tracking-wider p-2 rounded-md px-4 text-sm"
            onClick={() => editJob(job._id)}
          >
            Edit
          </button>
          <button
            className="bg-red-300 text-red-800 w-1/2 tracking-wider p-2 rounded-md px-4 text-sm"
            onClick={() => deleteJob(job._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default JobCard;
