import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleEndSpinner,
  handleStartSpinner,
} from "../../redux/action/spinnerComponentAction";
import { courseService } from "../../services/courseService";
import ModalCreateCourse from "./ModalCreateCourse/ModalCreateCourse";
import TableCourseManagementPage from "./TableCourseManagementPage/TableCourseManagementPage";

export default function CourseRegistrationManagementPage() {
  const [UserList, setUserList] = useState([]);
  const dispatch = useDispatch();
  let fetchCourseList = () => {
    dispatch(handleStartSpinner());

    courseService
      .getCourses()
      .then((res) => {
        // console.log(res);
        let dataRaw = res.data.map((course) => {
          return {
            ...course,
            action: {
              onDelete: () => {
                dispatch(handleStartSpinner());
                courseService
                  .deleteCourse(course.maKhoaHoc)
                  .then((res) => {
                    // console.log(res);
                    message.success("Đã xóa khóa học");
                    // window.location.href = "/";
                    fetchCourseList();
                    dispatch(handleEndSpinner());
                  })
                  .catch((err) => {
                    err.response.data
                      ? message.error(err.response.data)
                      : message.error(
                          "Bạn chưa đăng nhập, vui lòng đăng nhập để thực hiện thao tác"
                        );

                    console.log(err);
                    dispatch(handleEndSpinner());
                  });
              },
              onEdit: () => {},
            },
          };
        });
        setUserList(dataRaw);
        dispatch(handleEndSpinner());
      })
      .catch((err) => {
        console.log(err);
        dispatch(handleEndSpinner());
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCourseList();
  }, []);
  return (
    <div className="min-h-screen p-5 ">
      <h2 className="text-3xl font-bold my-5 text-center text-color-primary">
        QUẢN LÝ GHI DANH
      </h2>
      {/* <div>
        <ModalCreateCourse />
      </div>
      <div className="container mx-auto">
        <TableCourseManagementPage UserList={UserList} />
      </div> */}
    </div>
  );
}
