import React from "react";
import { NavLink } from "react-router-dom";

export default function DashboardMenu() {
  return (
    <div className="py-5 border-r-2 h-full  font-bold">
      <ul className="fixed min-w-[208px]">
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
        <li className=" hover:bg-gray-200  cursor-pointer ">
          <NavLink
            className="px-5 block leading-[45px] hover:text-color-primary"
            to="/register-management"
          >
            Quản lý ghi danh
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
