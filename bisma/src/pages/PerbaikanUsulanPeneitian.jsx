import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProgressBarPerbUsulan from '../components/PerbaikanUsulan/ProgressBaraPerbUsulan';

const PerbaikanUsulanPeneitian = () => {
  const {id} = useParams();
  return (
    <NavBar>
        <ProgressBarPerbUsulan id={id}/>
    </NavBar>
  )
}

export default PerbaikanUsulanPeneitian
