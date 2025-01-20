import React from "react";
import ProgresPerUsPegabdianPage from "./ProgresPerUsPegabdianPage";
import ProgressUsulanBaruPengabdian from "../components/Pengabdian/ProgressUsulanBaruPengabdian";
import NavBar from "../components/NavBar";
import { useParams } from 'react-router-dom'

const ProgressUsulanBaruPengabdianPage = () => {
  const {id} = useParams();
  return (
    <NavBar>
      <ProgressUsulanBaruPengabdian id={id} />
    </NavBar>
  );
};

export default ProgressUsulanBaruPengabdianPage;
