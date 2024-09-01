import React, { useState } from "react";
import Header from "./Header";
import banner from "./../assets/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="relative">
        <div className="absolute z-50 w-full">
          <Header page={"login"} />
        </div>
        <div className="absolute top-0 z-10 hidden image-container md:block">
          <img src={banner} alt="" className=" w-lvw h-lvh" />
          <div class="image-overlay"></div>
        </div>
        <div className="absolute z-20  text-white bg-black top-32 left-1/2 transform -translate-x-1/2 w-[450px] p-14 bg-opacity-60">
          <form className="flex flex-col justify-center">
           <h1 className="text-3xl font-bold">
             {
                isSignInForm ? "Sign In" : "Sign Up"
             }
           </h1>
            {
                !isSignInForm &&   <input
                type="text"
                className="mt-5 bg-transparent px-4 py-[16px] border border-gray-500"
                placeholder="Full Name"
              />
            }
            <input
              type="text"
              className="mt-5 bg-transparent px-4 py-[16px] border border-gray-500"
              placeholder="Email"
            />
            <input
              type="text"
              className="mt-5 bg-transparent px-4 py-[16px] border border-gray-500"
              placeholder="Password"
            />
            
            <button className="mt-5 bg-[--primary-color] text-white rounded-md px-4 py-[12px]">
                {
                    isSignInForm ? "Sign In" : "Sign Up"
                }
            </button>
            {
                isSignInForm ?<p className="mt-5 text-gray-500">
                New to Netflix?{" "}
                <span
                  className="font-bold text-white hover:underline"
                  onClick={toggleSignInForm}
                >
                  Sign up now.
                </span>
              </p> :  <p className="mt-5 text-gray-500">
                Already have an account?{" "}
                <span
                  className="font-bold text-white hover:underline"
                  onClick={toggleSignInForm}
                >
                  Sign in now.
                </span>
              </p>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
