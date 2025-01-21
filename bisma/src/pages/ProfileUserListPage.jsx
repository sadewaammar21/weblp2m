import React from "react";
import NavbarOperator from "../components/Operator/NavbarOperator";
import ProfileUserList from "../components/Operator/Profile User/ProfileUserList";

const ProfileUserListPage = () => {
  return (
    <NavbarOperator>
      <ProfileUserList />
    </NavbarOperator>
  );
};

export default ProfileUserListPage;
