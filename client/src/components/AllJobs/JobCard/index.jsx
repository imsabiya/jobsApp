import React from "react";

const JobCard = ({ job }) => {
  return (
    <>
      <div className="bg-white shadow-xl rounded-md p-2 flex flex-col justify-start place-items-start">
        <div className="flex p-2 gap-x-8 w-full justify-start place-items-center border-b-2 m-1 pb-4">
          <div className="bg-primary rounded-md w-14 h-14 text-white flex justify-center place-items-center font-semibold capitalize text-2xl">
            {job.company[0]}
          </div>
          <div className="flex flex-col gap-2 justify-start place-items-start capitalize">
            <p className="text-xl font-semibold tracking-wide">
              {job.position}
            </p>
            <p className="text-slate-400 font-semibold">{job.company}</p>
          </div>
        </div>
        {/* <div className="bg-slate-400 "/> */}
        <div className="grid grid-cols-2 w-full gap-4 justify-center place-items-start p-2">
          <div className="">{job.jobLocation || "Neiguan"}</div>
          <div className="">{job.createdAt} </div>
          <div className="capitalize">{job.jobType} </div>
          <div className="bg-neutral text-white rounded-md p-1 tracking-wide capitalize">
            {job.status}{" "}
          </div>
        </div>
        <div className="flex gap-2 justify-start p-2 m-2">
          <button className="bg-green-300 text-green-800 w-1/2 tracking-wider p-2 rounded-md px-4">
            Edit
          </button>
          <button className="bg-red-300 text-red-800 w-1/2 tracking-wider p-2 rounded-md px-4">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default JobCard;
