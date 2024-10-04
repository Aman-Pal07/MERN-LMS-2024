import React from "react";
import { Outlet } from "react-router-dom";

const StudentViewCommonLayout = () => {
  return (
    <div>
      comman content
      <Outlet />
    </div>
  );
};

export default StudentViewCommonLayout;
