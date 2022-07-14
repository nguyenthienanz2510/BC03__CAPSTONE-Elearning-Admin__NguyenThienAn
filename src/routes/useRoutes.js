import MainLayout from "../HOC/MainLayout";
import CourseManagementPage from "../pages/CourseManagementPage/CourseManagementPage";
import CourseRegistrationManagementPage from "../pages/CourseRegistrationManagementPage/CourseRegistationManagementPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import UserManagementPage from "../pages/UserManagementPage/UserManagementPage";
import UserPage from "../pages/UserPage/UserPage";

export const usePublicRoutes = [
  {
    path: "/",
    component: <MainLayout Component={HomePage} />,
    exact: true,
    isUseLayout: true,
  },
  {
    path: "/user-management",
    component: <MainLayout Component={UserManagementPage} />,
    isUseLayout: true,
  },
  {
    path: "/course-management",
    component: <MainLayout Component={CourseManagementPage} />,
    isUseLayout: true,
  },
  {
    path: "/register-management",
    component: <MainLayout Component={CourseRegistrationManagementPage} />,
    isUseLayout: true,
  },
  {
    path: "/user",
    component: <MainLayout Component={UserPage} />,
    isUseLayout: true,
  },
  {
    path: "/login",
    component: LoginPage,
  },
];
