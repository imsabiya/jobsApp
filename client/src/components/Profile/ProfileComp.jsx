import React from "react";
import { useForm } from "react-hook-form";

const ProfileComp = () => {
  const userObj = JSON.parse(sessionStorage.getItem("user"));

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: userObj.name,
      email: userObj.email,
      userName: "",
      location: "",
    },
  });

  const submitHandler = async (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="bg-white p-4 m-0 my-4 mx-2 flex flex-col justify-start place-items-start w-[98%] rounded-md shadow-xl">
        <h2 className="font-semibold tracking-wide text-2xl">Profile</h2>
        <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 my-4 gap-4 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                //value={userObj.name}
                className="input input-bordered"
                {...register("name", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z]+[A-Za-z0-9 -]*/i,
                    message: "Enter valid name",
                  },
                })}
              />
            </div>
            {errors.name && (
              <span className="text-red-400 text-left text-sm">
                {errors.name}
              </span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                //value={userObj.name}
                placeholder="User Name"
                className="input input-bordered"
                {...register("userName", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z]+[A-Za-z0-9 -]*/i,
                    message: "Enter valid User Name",
                  },
                })}
              />
            </div>
            {errors.userName && (
              <span className="text-red-400 text-left text-sm">
                {errors.userName}
              </span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                //value={userObj.email}
                className="input input-bordered"
                required
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z]+[A-Za-z0-9 -]*/i,
                    message: "Invalid Email",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-400 text-left text-sm ml-1 my-1">
                  {errors?.email?.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                className="input input-bordered"
                {...register("location", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z]+[A-Za-z0-9 -]*/i,
                    message: "Enter valid location",
                  },
                })}
              />
            </div>
            {errors.location && (
              <span className="text-red-400 text-left text-sm">
                {errors.location}
              </span>
            )}

            <div className="flex gap-2 justify-start place-items-end">
              <button className="btn btn-primary w-1/2 tracking-wider">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileComp;
