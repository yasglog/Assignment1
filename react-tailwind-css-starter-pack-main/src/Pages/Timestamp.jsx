import React, { useContext, useState } from "react";
import { MyContext } from "../Context/MyContext";
import Worktimer from "../Componets/Worktimer";
import Shortbreak from "../Componets/Shortbreak";
import clock from "../Assest/Clock.jpg";

const Timestamp = () => {
  const { accountType, setAccountType } = useContext(MyContext);
  const { workTimer, setWorkTimer } = useContext(MyContext);

  const { takShortBreak, setTakShortBreak } = useContext(MyContext);

  return (
    <div className=" w-[30%] mx-auto flex flex-col relative items-center justify-center min-h-[600px] ">
      <div className=" w-full mx-auto  border-2 flex flex-col items-center shadow-lg min-h-[380px] justify-center rounded-xl ">
        {
          workTimer>0?(<h2 className=" text-[#7785dc]">You cannot take a short break when mean task running</h2>):(<h2 className=" text-[#7785dc]">Now You Can take a short break</h2>)
        }
        <div className="flex bg-[#7b89e5] p-1 gap-x-1 my-6  w-[80%] justify-around rounded-md  ">
          <button
            className={`${
              accountType === "student"
                ? "bg-[#6674CC] text-white"
                : "  text-white"
            } py-2 px-5 rounded-md transition-all duration-200`}
            onClick={() => setAccountType("student")}
          >
            WorkClock
          </button>

          <button
            className={`${
              accountType === "instructor"
                ? "bg-[#6674CC] text-white"
                : " text-white"
            } py-2 px-5 rounded-md transition-all duration-200`}
            onClick={() => (takShortBreak ? setAccountType("instructor") : "")}
          >
            ShortBreak
          </button>
        </div>

        <div className=" w-[80%]  ">
          {accountType === "student" ? (
            <div className=" w-full">
              <Worktimer></Worktimer>
            </div>
          ) : takShortBreak ? (
            <div className=" w-full">
              <Shortbreak></Shortbreak>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Timestamp;
