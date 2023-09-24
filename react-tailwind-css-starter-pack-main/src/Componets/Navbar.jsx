import React from "react";
import logo from "../Assest/Logo-Full-Dark.png";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../Custom-hook/UseAuth";
import toast, { Toaster } from "react-hot-toast";
import { FaBeer } from 'react-icons/fa';

// import React, { useState } from 'react'
import { signOut } from "firebase/auth";
import { Auth, provider } from "../Firebase/firebase-config";
const Navbar = () => {
  const currentUser = UseAuth();
  const navigate = useNavigate();
  console.log("currentUser:", currentUser);
  const Logout = async () => {
    try {
      await signOut(Auth);
      alert("Logout");
      navigate("/");
    } catch (error) {}
    // signInWithPopup(Auth,provider)
  };
   
  return (
    <div className="flex h-14 items-center justify-center  py-4 ">
      <div className=" flex w-11/12 max-w-maxContent items-center ">
        <Link to="/">
          
          <h2 className=" text-richblack-800 text-2xl font-serif font-semibold">
            {" "}
            Pomodro
          </h2>
        </Link>

        

        {/* NavLink */}

        <nav className=" flex items-center justify-center mx-auto">
          <ul className="flex gap-x-6 text-richblack-25 items-center justify-center">
            <div className="flex  items-center justify-center group relative gap-8">
              <Link to="/">
                <p className=" font-serif text-lg cursor-pointer text-richblack-800">
                  Home
                </p>
              </Link>
              <p className=" font-serif text-lg cursor-pointer text-richblack-800">
                About Us
              </p>
              <p className=" font-serif text-lg cursor-pointer text-richblack-800">
                Contact Us
              </p>
            </div>
          </ul>
        </nav>

        {/* .....signup login dashboard.... */}

        <div className="flex gap-x-6 items-center">
          <p className=" text-[#6674CC]">
            {currentUser ? currentUser?.email : ""}
          </p>
          {!currentUser ? (
            <div className=" flex flex-row gap-3">
              <Link to="/Login">
                <button className=" text-[#6674CC] border-[3px] border-[#6674CC] w-[5rem] py-[8px]  rounded-md">
                  Log in
                </button>
              </Link>

              <Link to="/SignUp">
                <button className=" text-[#6674CC] border-[3px] border-[#6674CC] w-[5rem] py-[8px]  rounded-md">
                  Sign up
                </button>
              </Link>
            </div>
          ) : (
            <button
              className="text-[#6674CC] border-[3px] border-[#6674CC] w-[5rem] py-[8px]  rounded-md"
              onClick={Logout}
            >
              Logout
            </button>
          )}

          {/* {token != null && <ProfileDropDown />} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
