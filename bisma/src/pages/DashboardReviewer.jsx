import React from "react";
import NavbarReviewer from "../components/Reviewer/NavbarReviewer";
import DashboardReviewerCmp from "../components/Reviewer/DashboardReviewerCmp";
import NavBar from "../components/NavBar";

const DashboardReviewer = () => {
  return (
    <NavBar>
      <DashboardReviewerCmp />
    </NavBar>
  );
};

export default DashboardReviewer;
