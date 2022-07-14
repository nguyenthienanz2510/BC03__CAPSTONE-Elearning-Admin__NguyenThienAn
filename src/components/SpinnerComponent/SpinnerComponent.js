import React from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

export default function SpinnerComponent() {
  let isLoading = useSelector((state) => {
    return state.spinnerComponentReducer.isLoading;
  });
  return isLoading ? (
    <div className="z-[100] fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] tra">
      <PacmanLoader
        size={80}
        color={"#ff6500"}
        className="-translate-x-1/2 -translate-y-1/2"
      />
    </div>
  ) : (
    <></>
  );
}
