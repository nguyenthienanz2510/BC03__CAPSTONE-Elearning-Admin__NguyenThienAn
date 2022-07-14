import React from "react";
import DashboardMenu from "../components/DashboardMenu/DashboardMenu";
import FooterLayout from "../components/FooterLayout/FooterLayout";
import HeaderLayout from "../components/HeaderLayout/HeaderLayout";

export default function MainLayout({ Component }) {
  return (
    <div className="min-h-screen">
      <HeaderLayout />
      <div className="flex">
        <div className="w-52 mt-16">
          <DashboardMenu />
        </div>
        <div className="mt-16 flex-1">
          <Component />
        </div>
      </div>
      <FooterLayout />
    </div>
  );
}
