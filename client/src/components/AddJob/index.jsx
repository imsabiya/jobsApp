import React from "react";
import Home from "../Home";
import AddJobComp from "./AddJobComp";

const AddJob = () => {
  return (
    <>
      <div className="">
        <Home component={<AddJobComp />} />
      </div>
    </>
  );
};

export default AddJob;
