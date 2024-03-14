import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ResetPwd from "./components/Auth/ResetPwd";

function App() {
  return (
    <div className="App container mx-4 mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetPwd" element={<ResetPwd />} />
      </Routes>
    </div>
  );
}

export default App;
