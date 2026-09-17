import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../../components/UserNavbar";
import UserFooter from "../../components/UserFooter";

const UserLayout = () => {
  return (
    <>
      <UserNavbar />

      <main className="p-6">
        <Outlet />
      </main>

      <UserFooter />
    </>
  );
};

export default UserLayout;
