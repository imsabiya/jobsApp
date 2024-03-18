import React from "react";
import Home from "../../Home";
import EditJobComp from "./EditJobComp";

const EditJob = () => {
  return (
    <>
      <div className="">
        <Home component={<EditJobComp />} />
      </div>
    </>
  );
};

export default EditJob;
