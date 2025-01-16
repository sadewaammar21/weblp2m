import React from "react";
import NavbarOperator from "../components/Operator/NavbarOperator";
import DashboardOperatorCmp from "../components/Operator/DashboardOperatorCmp";
import NavBar from "../components/NavBar";

const DashboardOperator = () => {
  return (
    <NavBar>
      <DashboardOperatorCmp />
    </NavBar>
  );
};

export default DashboardOperator;
