import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ResetPwd from "./components/Auth/ResetPwd";
import LandingPage from "./components/LandingPage";
import Stats from "./components/Stats";
import AllJobs from "./components/AllJobs";
import AddJob from "./components/AddJob";
import Profile from "./components/Profile";
import EditJob from "./components/AllJobs/EditJob";

function App() {
  return (
    <div className="App container mx-4 mt-4">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetPwd" element={<ResetPwd />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/all-jobs" element={<AllJobs />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-job/:id" element={<EditJob />}/>
      </Routes>
    </div>
  );
}

export default App;
