import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditJobComp = () => {
  const token = sessionStorage.getItem("token");
  const [editJob, setEditJob] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id, "idHere");

  const getJobByJobId = async (id) => {
    //console.log("kjsdkjas jkhkjas");
    console.log(id, "async Id");

    const paramsData = {
      id: id,
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
        `${process.env.REACT_APP_JOBS_APP_URL}/job`,
        config
      );
      const data = await res.data;
      setEditJob(data.job);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getJobByJobId(id);
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // useForm({
  //   defaultValues: {
  //     company: editJob?.company,
  //     position: editJob?.position,
  //     jobLocation: editJob?.jobLocation,
  //     status: editJob?.status,
  //     jobType: editJob?.jobType,
  //   },
  // });

  const submitHandler = async (data) => {
    console.log(data, "data");

    const paramsData = {
      id: id,
    };

    const config = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: { ...paramsData },
      data: { ...data },
    };

    try {
      const res = await axios(
        `${process.env.REACT_APP_JOBS_APP_URL}/jobs`,
        config
      );
      const data = res.data;
      //console.log(data, "data");
      toast.success(data.message);
      navigate("/all-jobs");
      reset();
      setEditJob({});
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

  console.log(editJob.status, editJob.jobType);

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="bg-white p-4 m-0 my-4 mx-2 flex flex-col justify-start place-items-start w-[98%] rounded-md shadow-xl">
        <h2 className="font-semibold tracking-wide text-2xl">Edit Job</h2>
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
                name="company"
                defaultValue={editJob?.company}
                {...register("company", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z]+[A-Za-z0-9 -]*/i,
                    message: "Enter valid company",
                  },
                })}
              />
              {errors.company && (
                <span className="text-red-400 text-left text-sm">
                  {errors?.company?.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Position</span>
              </label>
              <input
                type="text"
                placeholder="Position"
                className="input input-bordered"
                defaultValue={editJob?.position}
                {...register("position", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z]+[A-Za-z0-9 -]*/i,
                    message: "Enter valid position",
                  },
                })}
              />
              {errors.position && (
                <span className="text-red-400 text-left text-sm bg-primary">
                  {errors.position.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Location</span>
              </label>
              <input
                type="text"
                placeholder="Job Location"
                className="input input-bordered"
                defaultValue={editJob?.jobLocation}
                {...register("jobLocation", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z]+[A-Za-z0-9 -]*/i,
                    message: "Enter valid job location",
                  },
                })}
              />
              {errors.jobLocation && (
                <span className="text-red-400 text-left text-sm">
                  {errors.jobLocation.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <select
                className="select select-bordered"
                defaultValue={editJob?.status}
                {...register("status", { required: true })}
              >
                <option value="interview">interview</option>
                <option value="declined">declined</option>
                <option value="pending">pending</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Type</span>
              </label>
              <select
                className="select select-bordered"
                defaultValue={editJob.jobType}
                {...register("jobType", { required: true })}
              >
                <option value={"full-time"}>full-time</option>
                <option value={"part-time"}>part-time</option>
                <option value={"remote"}>remote</option>
                <option value={"internship"}>internship</option>
              </select>
            </div>
            <div className="flex gap-2 justify-start place-items-end">
              <button
                className="btn btn-neutral w-1/2 tracking-wider"
                onClick={() => reset()}
              >
                Clear
              </button>
              <button className="btn btn-primary w-1/2 tracking-wider">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditJobComp;
