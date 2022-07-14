import React from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import UserNav from "./UserNav";
import { Link } from "react-scroll";
import CategoryCourseMenu from "./CategoryCourseMenu/CategoryCourseMenu";
import Search from "./Search";

export default function HeaderLayout() {
  return (
    <div className="h-16 w-full flex items-center justify-between shadow-lg fixed top-0 left-0 z-50 bg-white">
      <div className="flex items-center">
        <NavLink to={"/"}>
          <div className="flex">
            <img src="/cybersoftlogo.png" alt="logo" className="mx-3 h-14" />
          </div>
        </NavLink>

        {/* <div className="text-base hidden md:block px-4 min-w-[220px]">
          <CategoryCourseMenu />
        </div> */}
        {/* <div className="text-base hidden md:block">
          <Search />
        </div> */}
      </div>
      <div style={{ minWidth: 200 }} className="hidden md:flex md:justify-end">
        <UserNav />
      </div>
    </div>
  );
}
