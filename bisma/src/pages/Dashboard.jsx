import React from 'react';
import NavBar from '../components/NavBar';
import DashboardKaprodi from '../components/DashboardKaprodi';
import ListUsulanKaprodi from '../components/ListUsulanKaprodi';

const Dashboard = () => {
  return (
        <NavBar>
          {/* <DashboardKaprodi/> */}
          <ListUsulanKaprodi/>
        </NavBar>
    
  )
}

export default Dashboard