import React from "react";
import FormLogin from "./FormLogin/FormLogin";
import Lottie from "lottie-react";
import coderjson from "../../assets/coder.json";

export default function LoginPage() {
  return (
    <div className=" w-screen h-screen bg-orange-100 flex items-center">
      <div className="flex w-full h-full">
        <div className="hidden md:w-1/2 md:flex items-center justify-center">
          <Lottie animationData={coderjson} loop={true} />
        </div>
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
          <FormLogin />
        </div>
      </div>
    </div>
  );
}
