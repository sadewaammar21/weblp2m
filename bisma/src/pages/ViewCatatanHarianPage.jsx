import React from "react";
import NavBar from "../components/NavBar";
import ViewCatatanHarianpnt from "../components/UsulanBaru/ViewCatatanHarianpnt";
import { useParams } from "react-router-dom";

const ViewCatatanHarianPage = () => {
  const { id } = useParams();
  return (
    <NavBar>
      <ViewCatatanHarianpnt id={id} />
    </NavBar>
  );
};

export default ViewCatatanHarianPage;
