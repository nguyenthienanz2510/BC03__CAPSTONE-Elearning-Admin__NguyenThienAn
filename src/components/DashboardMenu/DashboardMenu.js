import React from "react";
import { NavLink } from "react-router-dom";

export default function DashboardMenu() {
  return (
    <div className="py-5 border-r h-full shadow-xl  font-bold">
      <ul>
        <li className=" hover:bg-gray-200  cursor-pointer ">
          <NavLink
            className="px-5 block leading-[45px] hover:text-color-primary"
            to="/course-management"
          >
            Quản lý khóa học
          </NavLink>
        </li>
        <li className=" hover:bg-gray-200  cursor-pointer ">
          <NavLink
            className="px-5 block leading-[45px] hover:text-color-primary"
            to="/user-management"
          >
            Quản lý người dùng
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
