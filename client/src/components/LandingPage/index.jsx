import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-4 flex flex-col justify-center place-items-start mt-12 gap-y-12">
        <h2 className="text-4xl font-bold italic lg:ml-8 ">Jobster</h2>
        <div className="grid grid-cols-2 justify-start place-items-start mt-8 lg:ml-8">
          <div className="flex flex-col place-items-start mt-8 gap-y-8">
            <h2 className="uppercase text-2xl font-bold"> Job Tracking App</h2>
            <p className="text-left w-3/4">
              Crucifix narwhal street art asymmetrical, humblebrag tote bag
              pop-up fixie raclette taxidermy craft beer. Brunch bitters synth,
              VHS crucifix heirloom meggings bicycle rights.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/login")}
            >
              Login / Register
            </button>
          </div>
          <div className="">
            <img
              src="https://redux-toolkit-jobster.netlify.app/static/media/main.17b316de742b3a1202078c5ae18c8261.svg"
              alt="Home banner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
