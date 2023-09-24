import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Componets/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Timestamp from "./Pages/Timestamp";
import Home from "./Pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  function ShowToastMessage(){
    toast.success("Sign In Successfully")
  }
  return (
    // <Login></Login>
    <div className=" w-[100vw] h-[100vh] overflow-x-hidden overflow-y-hidden bg-[#F9FAFC] ">
    {/* <ToastContainer></ToastContainer> */}
      <Navbar></Navbar>
      {/* <Signup></Signup> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/SignUp" element={<Signup ShowToastMessage={ShowToastMessage}></Signup>}></Route>
        <Route path="/Login" element={<Login ShowToastMessage={ShowToastMessage}></Login>}></Route>
        <Route path="/Timestamp" element={<Timestamp></Timestamp>}></Route>
      </Routes>
      {/* <Timestamp></Timestamp> */}
    </div>
  );
}

export default App;
