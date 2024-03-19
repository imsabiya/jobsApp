import React from "react";
import { Routes, Route } from "react-router-dom";
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
import ProtectedRoutes from "./routes/protectedRoutes";

function App() {
  const token = sessionStorage.getItem("token");

  return (
    <div className="App container mx-4 mt-4">
      <Routes>
        {token ? (
          <Route
            exact
            path="/"
            element={
              <ProtectedRoutes exact path="/" element={<LandingPage />} />
            }
          />
        ) : (
          <Route exact path="/" element={<LandingPage />} />
        )}

        {token ? (
          <Route
            path="/login"
            element={<ProtectedRoutes path="/login" element={<Login />} />}
          />
        ) : (
          <Route path="/login" element={<Login />} />
        )}

        {token ? (
          <Route
            path="/register"
            element={
              <ProtectedRoutes path="/register" element={<Register />} />
            }
          />
        ) : (
          <Route path="/register" element={<Register />} />
        )}

        {token ? (
          <Route
            path="/resetPwd"
            element={
              <ProtectedRoutes path="/resetPwd" element={<ResetPwd />} />
            }
          />
        ) : (
          <Route path="/resetPwd" element={<ResetPwd />} />
        )}

        <Route
          path="/stats"
          element={<ProtectedRoutes path="/stats" element={<Stats />} />}
        />

        <Route
          path="/all-jobs"
          element={<ProtectedRoutes path="/all-jobs" element={<AllJobs />} />}
        />
        <Route
          path="/add-job"
          element={<ProtectedRoutes path="/add-job" element={<AddJob />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoutes path="/profile" element={<Profile />} />}
        />
        <Route
          path="/edit-job/:id"
          element={
            <ProtectedRoutes path="/edit-job/:id" element={<EditJob />} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
