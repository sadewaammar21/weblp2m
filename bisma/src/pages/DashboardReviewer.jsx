import React from 'react';
import NavbarReviewer from '../components/Reviewer/NavbarReviewer';
import DashboardReviewerCmp from '../components/Reviewer/DashboardReviewerCmp';

const DashboardReviewer = () => {
  return (
    <NavbarReviewer>
        <DashboardReviewerCmp/>
    </NavbarReviewer>
  )
}

export default DashboardReviewer