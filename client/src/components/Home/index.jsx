import React, { useState } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";

const Home = ({ component }) => {
  // const navigate = useNavigate();

  // const [currentTab, setCurrentTab] = useState("Stats");

  // const tabs = [
  //   {
  //     name: "Stats",
  //     link: "#stats",
  //     content: <>Stats content</>,
  //   },
  //   {
  //     name: "All Jobs",
  //     link: "#allJobs",
  //     content: <>All Jobs content</>,
  //   },
  //   {
  //     name: "Add Job",
  //     link: "#addJob",
  //     content: <>Add Job content</>,
  //   },
  //   {
  //     name: "Profile",
  //     link: "#profile",
  //     content: <>Profile content</>,
  //   },
  // ];

  return (
    <div className="w-full overflow-x-hidden ">
      <div className="container mx-0 navbar bg-base-100">
        <div className="flex-1">
          <h2 className="text-3xl font-bold italic tracking-widest">Jobster</h2>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>UserName </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </details>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-[10%_90%] gap-2 mt-2 w-full h-full">
        <div className="flex flex-col justify-start place-items-center my-12 px-2">
          <ul className="flex flex-col justify-start place-items-start gap-8">
            <li>
              <NavLink to="/stats">Stats</NavLink>
            </li>
            <li>
              <NavLink to="/all-jobs">All Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/add-job">Add Job</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
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
