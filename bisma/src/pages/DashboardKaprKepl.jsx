import React from "react";
import NavbarKaprKepl from "../components/Kaprodi dan Kepala/NavbarKaprKepl";
import ListUsulanKaprodi from "../components/Kaprodi dan Kepala/ListUsulanKaprodi";
import NavBar from "../components/NavBar";

const DashboardKaprKepl = () => {
  return (
    <NavBar>
      <ListUsulanKaprodi />
    </NavBar>
  );
};

export default DashboardKaprKepl;
