import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context/MyContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Worktimer = () => {
  // const [time,setTime]=useState(1500);
  const { workTimer, setWorkTimer } = useContext(MyContext);
  const { workTimerStatus, setWorkTimerStatus } = useContext(MyContext);
  const { shortBreakTimerStatus, setShortBreakTimerStatus } =useContext(MyContext);

  const { accountType, setAccountType } = useContext(MyContext);

  const{takeShortBreak,setTakeShortBreak}=useContext(MyContext);


  useEffect(() => {
    if (workTimerStatus && workTimer > 0) {
      // setTakShortBreak(false);
      const interval = setInterval(() => {
        setWorkTimer((workTimer) => workTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    else{
      // setTakShortBreak(true);
      if(workTimer===0){
        setTakeShortBreak(true);
        setAccountType("Shortbreak")
        setWorkTimer(1500);
        setWorkTimerStatus(false)
        setShortBreakTimerStatus(true)
      }
    }
  }, [workTimer, workTimerStatus]);

  const Gettime = (workTimer) => {
    const min = Math.floor(workTimer / 60);
    const sec = workTimer % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  function Starttimer() {
    setWorkTimerStatus(true);
    console.log("time start ,", workTimerStatus);
    toast.success("Start Successfully");
  }
  function Stoptimer() {
    setWorkTimerStatus(false);
    console.log("time stop ,", workTimerStatus);
    toast.success("Pause Successfully");
  }

  function Restarttimer() {
    setWorkTimerStatus(false);
    setWorkTimer(1500);
    toast.success("Reset Successfully");
    setTakeShortBreak(false)
    console.log(workTimer);
  }

  return (
    <div className="  w-full flex flex-col items-center h-[10rem] justify-center gap-8 bg-[#F9FAFC]">
      <div className=" text-4xl font-inter font-bold">{Gettime(workTimer)}</div>
      <div className=" w-[80%] flex flex-row justify-between">
        {workTimerStatus ? (
          <button
            className=" cursor-pointer bg-[#6674CC] text-white py-2 w-20  rounded-md text-center "
            onClick={Stoptimer}
          >
            Pause
          </button>
        ) : (
          <button
            className=" cursor-pointer bg-[#6674CC] text-white py-2 w-20 rounded-md text-center "
            onClick={Starttimer}
          >
            Start
          </button>
        )}

        <button
          className=" cursor-pointer bg-[#6674CC] text-white py-2 w-20 rounded-md text-center "
          onClick={Restarttimer}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Worktimer;
