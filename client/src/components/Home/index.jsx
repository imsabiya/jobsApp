import React from "react";
import { NavLink } from "react-router-dom";

const Home = ({ component }) => {
  const userObj = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="w-[100%] overflow-x-hidden">
      <div className="container mx-0 navbar bg-base-100">
        <div className="flex-1">
          <h2 className="text-3xl font-bold italic tracking-widest">Jobster</h2>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 w-full">
            <li className="">
              <details className="">
                <summary className="capitalize text-lg flex gap-2 justify-between place-items-center">
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
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <p>{userObj.name}</p>
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/" onClick={() => sessionStorage.clear()}>
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-[10%_90%] gap-2 mt-2 w-full">
        <div className="flex flex-col justify-start place-items-center my-12 px-2 w-full">
          <ul className="flex flex-col justify-start place-items-start gap-8 w-full">
            <li className="flex justify-start place-items-start w-full rounded-md">
              <NavLink
                to="/stats"
                className="flex gap-2 p-2 w-full rounded-md"
                activeClassName="active"
              >
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
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                  />
                </svg>
                <p>Stats</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-jobs"
                className="flex gap-2 p-2 w-full rounded-md"
                activeClassName="active"
              >
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
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <p>All Jobs</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-job"
                className="flex gap-2 p-2 w-full rounded-md"
                activeClassName="active"
              >
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
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                <p>Add Job</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className="flex gap-2 p-2 w-full rounded-md"
                activeClassName="active"
              >
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
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <p>Profile</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="bg-slate-100 flex flex-col justify-start place-items-start">
          {component}
        </div>
      </div>
    </div>
  );
};

export default Home;
