import React from "react";
import NavbarOperator from "../components/Operator/NavbarOperator";
import ProfileUserList from "../components/Operator/Profile User/ProfileUserList";
import NavBar from "../components/NavBar";

const ProfileUserListPage = () => {
  return (
    <NavBar>
      <ProfileUserList />
    </NavBar>
  );
};

export default ProfileUserListPage;
