import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate"

const Login = () => {

  const [isSigninform , setIsSignInForm] = useState(true);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSihnInForm = ()=>{
      setIsSignInForm(!isSigninform);
  };

  const handlebuttonclick = ()=>{
    //validate form data
    const message = checkValidData(email.current.value ,password.current.value);
    console.log(email);
    //console.log(message);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Logo"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSigninform? "Sign In" : "Sign Up"}
        </h1>
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {!isSigninform && (
          <input
          type="text"
          placeholder="Full name"
          className="p-4 my-4 w-full bg-gray-700"
        />
        )}
        <input
        ref={password}
          type="password"
          placeholder="passwaord"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg" onClick={handlebuttonclick}>{isSigninform? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSihnInForm}>{isSigninform? "New to netflix-sign up" : "already user sign in now"}</p>
      </form>
    </div>
  );
};

export default Login;
