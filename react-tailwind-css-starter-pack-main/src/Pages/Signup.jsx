
import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// toast.configure();
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';


import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  
} from "firebase/auth";
import { Auth, provider } from "../Firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/MyContext";

const Signup = (props) => {
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const navigate = useNavigate();
  const {ShowToastMessage}=props;
  const Signupfirebase = async (e) => {
    e.preventDefault();
    try {
      const email = emailSignUp;
      const password = passwordSignUp;
      const userCredential = await createUserWithEmailAndPassword(
        Auth,
        email,
        password
      );
      const user = userCredential.user;
      
      console.log("user", user);
      setEmailSignUp("");
      setPasswordSignUp("");
      navigate("/Timestamp");
      ShowToastMessage();

    } catch (error) {
      console.log("error come ");
      toast.error("We are alredy register");
    }
  };
  const Signwithgoogle = async () => {
    try {
      const credential = await signInWithPopup(Auth, provider);
      console.log("credential", credential);
      ShowToastMessage();
    } catch (error) {}
    // signInWithPopup(Auth,provider)
  };

  
  return (
    <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          SignUp to Your Account
        </h1>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={Signupfirebase} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={emailSignUp}
                  onChange={(e) => setEmailSignUp(e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={passwordSignUp}
                  onChange={(e) => setPasswordSignUp(e.target.value)}
                  className=" w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex  justify-center border-2 py-3 bg-[#6674CC] rounded-md text-white text-cente hover:bg-[#4e5dc4] transition-all duration-700"
              >
                SignUp
              </button>
            </div>
            <div>
              <button
                className="w-full flex items-center gap-2  justify-center border-2 py-3 bg-[#6674CC] rounded-md text-white text-cente hover:bg-[#4e5dc4] transition-all duration-700"
                onClick={Signwithgoogle}
              >
                <FcGoogle size={30}></FcGoogle><h2>Sign in with Google</h2>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
