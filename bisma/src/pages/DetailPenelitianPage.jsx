import React from "react";
import NavBar from "../components/NavBar";
import DetailPenelitian from "../components/Penelitian Dosen/DetailPenelitian";
import { useParams } from "react-router-dom";

const DetailPenelitianPage = () => {
  const {id} = useParams();
  return (
    <NavBar>
      <DetailPenelitian id={id}/>
    </NavBar>
  );
};

export default DetailPenelitianPage;
