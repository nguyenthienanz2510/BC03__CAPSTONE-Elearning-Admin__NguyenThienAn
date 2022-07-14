import React from "react";
import { NavLink } from "react-router-dom";
import UserNav from "./UserNav";

export default function HeaderLayout() {
  return (
    <div className="h-16 w-full flex items-center justify-between shadow-lg fixed top-0 left-0 z-50 bg-white">
      <div className="flex items-center">
        <NavLink to={"/"}>
          <div className="flex">
            <img src="/cybersoftlogo.png" alt="logo" className="mx-3 h-14" />
          </div>
        </NavLink>
      </div>
      <div>
        <UserNav />
      </div>
    </div>
  );
}
