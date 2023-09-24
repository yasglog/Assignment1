import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context/MyContext";
import { toast } from "react-toastify";

const Shortbreak = () => {
  const { shortBreakTimer, setShortBreakTimer } = useContext(MyContext);
  const { shortBreakTimerStatus, setShortBreakTimerStatus } =useContext(MyContext);
  const { accountType, setAccountType } = useContext(MyContext);

  useEffect(() => {
    if (shortBreakTimerStatus && shortBreakTimer > 0) {
      const interval = setInterval(() => {
        setShortBreakTimer((shortBreakTimer) => shortBreakTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    else{
      
    }
  }, [shortBreakTimer, shortBreakTimerStatus]);

  const GetTime = (shortBreakTimer) => {
    const min = Math.floor(shortBreakTimer / 60);
    const sec = shortBreakTimer % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  function Starttimer() {
    setShortBreakTimerStatus(true);
    console.log("time start ,", shortBreakTimerStatus);
    toast.success("Start Successfully");

  }
  function Stoptimer() {
    setShortBreakTimerStatus(false);
    console.log("time stop ,", shortBreakTimerStatus);
    toast.success("Pause Successfully");
  }

  function Restarttimer() {
    setShortBreakTimerStatus(false);
    setShortBreakTimer(300);
    toast.success("Reset Successfully");
  }
  return (
    <div className="  w-full flex flex-col items-center h-[10rem] justify-center gap-8">
      <div className="text-4xl font-inter font-bold">
        {GetTime(shortBreakTimer)}
      </div>
      <div className=" w-[80%] flex flex-row justify-between">

      {
        shortBreakTimerStatus?(<button
          className=" cursor-pointer bg-[#6674CC] text-white py-2 w-20  rounded-md text-center "
          onClick={Stoptimer}
        >
          
          Pause
        </button>):(<button
          className=" cursor-pointer bg-[#6674CC] text-white py-2 w-20 rounded-md text-center "
          onClick={Starttimer}
        >
          Start
        </button>)
      }
       
        
        <button
          className=" cursor-pointer bg-[#6674CC] text-white py-2 w-20  rounded-md text-center "
          onClick={Restarttimer}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Shortbreak;
