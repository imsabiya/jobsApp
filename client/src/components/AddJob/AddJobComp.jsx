import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddJobComp = () => {
  const token = sessionStorage.getItem("token");

  //console.log(token);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      company: "",
      position: "",
      jobLocation: "",
      status: "pending",
      jobType: "full-time",
    },
  });

  const navigate = useNavigate();

  const submitHandler = async (data) => {
    //console.log(data, "data");

    const config = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {...data },
    };

    try {
      const res = await axios(
        `${process.env.REACT_APP_JOBS_APP_URL}/addJob`,
        config
      );
      const data = res.data;
      toast.success(data.message);
      navigate("/all-jobs");
      reset();
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="bg-white p-4 m-0 my-4 mx-2 flex flex-col justify-start place-items-start w-[98%] rounded-md shadow-xl">
        <h2 className="font-semibold tracking-wide text-2xl">Add Job</h2>
        <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 my-4 gap-4 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company</span>
              </label>
              <input
                type="text"
                placeholder="Company"
                className="input input-bordered"
                {...register("company", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z]+[A-Za-z0-9 -]*/i,
                    message: "Enter valid company",
                  },
                })}
              />
            </div>
            {errors.company && (
              <span className="text-red-400 text-left text-sm">
                {errors.company}
              </span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Position</span>
              </label>
              <input
                type="text"
                placeholder="Position"
                className="input input-bordered"
                {...register("position", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z]+[A-Za-z0-9 -]*/i,
                    message: "Enter valid position",
                  },
                })}
              />
            </div>
            {errors.position && (
              <span className="text-red-400 text-left text-sm">
                {errors.position}
              </span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Location</span>
              </label>
              <input
                type="text"
                placeholder="Job Location"
                className="input input-bordered"
                {...register("jobLocation", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z]+[A-Za-z0-9 -]*/i,
                    message: "Enter valid job location",
                  },
                })}
              />
            </div>
            {errors.jobLocation && (
              <span className="text-red-400 text-left text-sm">
                {errors.jobLocation}
              </span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select
                className="select select-bordered"
                {...register("status", { required: true })}
              >
                <option>interview</option>
                <option>declined</option>
                <option selected>pending</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Type</span>
              </label>
              <select
                className="select select-bordered"
                {...register("jobType", { required: true })}
              >
                <option selected>full-time</option>
                <option>part-time</option>
                <option>remote</option>
                <option>internship</option>
              </select>
            </div>
            <div className="flex gap-2 justify-start place-items-end">
              <button className="btn btn-neutral w-1/2 tracking-wider">
                Clear
              </button>
              <button className="btn btn-primary w-1/2 tracking-wider">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddJobComp;
