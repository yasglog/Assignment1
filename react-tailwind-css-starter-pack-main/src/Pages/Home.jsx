import React from "react";
import clock from "../Assest/Clock.jpg";

import officesvg from "../Assest/Officeimg1.png";
import { Link } from "react-router-dom";
import UseAuth from "../Custom-hook/UseAuth";


const Home = () => {
    const currentUser = UseAuth();

  return (
    <div className=" w-10/12 flex flex-row mx-auto items-center justify-between h-screen ">
      <div className=" flex flex-col gap-4 w-[60%] ">
        <h1 className=" text-5xl font-bold font-serif ">
        Time management is  <span className="text-[#6674CC]">about life</span> management
        </h1>
        <p className=" text-xl text-blue-600  font-inter">
        Time management is about life management
        </p>
        <p className=" text-base font-inter">
        Time management is not a peripheral activity or skill. It is the core skill upon which everything else in life depends
        </p>

        {
            !currentUser?(<Link to="/Login">
          <button className=" w-[20%] border-2 py-3 bg-[#6674CC] rounded-md text-white">
            Login
          </button>
        </Link>):(<Link to="/Timestamp">
          <button className=" w-[20%] border-2 py-3 bg-[#6674CC] rounded-md text-white">
            Timestamp
          </button>
        </Link>)
        }
      </div>
      <img src={officesvg} className=" "></img>
    </div>
  );
};

export default Home;
