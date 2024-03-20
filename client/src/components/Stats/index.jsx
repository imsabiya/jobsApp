import React, {useEffect} from "react";
import Home from "../Home";
import StatsComp from "./StatsComp";

const Stats = () => {
  return (
    <>
      <div className="w-full h-full">
        <Home component={<StatsComp />} />
      </div>
    </>
  );
};

export default Stats;
