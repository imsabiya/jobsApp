import React from "react";
import Home from "../Home";
import ProfileComp from "./ProfileComp";

const Profile = () => {
  return (
    <>
      <div className="">
        <Home component={<ProfileComp />} />
      </div>
    </>
  );
};

export default Profile;
