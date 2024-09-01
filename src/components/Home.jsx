import React from "react";
import Header from "./Header";
import banner from "./../assets/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute z-50 w-full">
          <Header page={"home"}/>
        </div>
        <div className="absolute top-0 z-10 image-container ">
          <img src={banner} alt="" className="w-lvw h-lvh" />
          <div class="image-overlay"></div>
        </div>
        <div className="absolute z-20 p-4 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[700px]">
          <h1 className="text-6xl leading-tight tracking-wide text-center archivo-black-regular">
            Unlimited movies, TV shows and more
          </h1>
          <p className="mt-5 text-2xl text-center">
            Starts at ₹149. Cancel anytime.
          </p>
          <p className="mt-5 text-center text-md">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex justify-center w-full gap-2 mt-5" >
            <input type="text" className=" rounded-md px-4 py-[10px] w-[400px] bg-transparent border border-gray-500" placeholder="Email address"/>
            <button className="bg-[--primary-color] text-white rounded-md px-6 py-[10px] flex gap-2 items-center text-2xl justify-center"> Get Started <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
