import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { courseService } from "../../../services/courseService";
import "./CategoryCourseMenu.scss";

const CategoryCourseMenu = () => {
  const [CategoryCourse, setCategoryCourse] = useState([]);
  useEffect(() => {
    let fetchCategoryCourse = async () => {
      try {
        let result = await courseService.getCategoryCourse();
        // console.log(result.data);
        setCategoryCourse(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategoryCourse();
  }, []);
  return (
    <div className="relative" id="CategoryCourseMenu">
      <div className="CategoryCourseMenu__menu leading-[64px] ">
        <div className="md:hover:text-color-primary md:cursor-pointer">
          <FontAwesomeIcon className="mx-2" icon={faList} />
          <span className="font-bold">Danh mục khóa học</span>
        </div>
        <ul className="CategoryCourseMenu__submenu md:shadow-2xl md:absolute top-16 pb-2 left-0 min-w-[200px] z-10 bg-white font-semibold">
          {CategoryCourse.map((categoryItem, index) => {
            return (
              <NavLink key={index} to={`/category/${categoryItem.maDanhMuc}`}>
                <li className=" px-4 leading-[60px] md:leading-12 hover:text-color-primary hover:bg-slate-200 cursor-pointer">
                  {categoryItem.tenDanhMuc}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryCourseMenu;
