import MainLayout from "../HOC/MainLayout";
import CourseManagementPage from "../pages/CourseManagementPage/CourseManagementPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
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
    path: "/course-management",
    component: <MainLayout Component={CourseManagementPage} />,
    isUseLayout: true,
  },
  {
    path: "/user-management",
    component: <MainLayout Component={UserManagementPage} />,
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
  {
    path: "/register",
    component: RegisterPage,
  },
];
