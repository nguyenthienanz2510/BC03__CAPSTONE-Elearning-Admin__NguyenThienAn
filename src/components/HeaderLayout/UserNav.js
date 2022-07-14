import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { localStorageService } from "../../services/localStorageService";
import { Tooltip } from "antd";
import { NavLink } from "react-router-dom";

export default function UserNav() {
  let userInfo = useSelector((state) => {
    return state.userReducer.userInfo;
  });
  let handleLogout = () => {
    localStorageService.removeUserInfo();
    window.location.href = "/login";
  };

  return (
    <div>
      {userInfo ? (
        <div className=" px-3 ml-auto block justify-between">
          <NavLink to={"/user"} className="hover:text-color-primary">
            <span className="font-medium leading-[50px] text-lg ">
              {userInfo.taiKhoan}
            </span>
          </NavLink>
          <button
            onClick={handleLogout}
            className="px-3 py-2 hover:text-color-primary transition-all"
          >
            <Tooltip placement="bottomRight" title="Log out" color="#ff6500">
              <FontAwesomeIcon
                className="text-base "
                icon={faArrowRightFromBracket}
              />
            </Tooltip>
          </button>
        </div>
      ) : (
        <div className="px-3">
          <NavLink to={"/login"}>
            <button className="text-sm ml-1 px-5 py-2 rounded border-2 border-color-primary hover:text-white text-color-primary hover:bg-color-primary transition-all">
              Đăng nhập
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
