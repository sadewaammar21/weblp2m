import React from 'react';
import NavBar from '../components/NavBar';
import UsulanBaruList from '../components/UsulanBaru/UsulanBaruList';

const UsulanBaru = () => {
  return (
    <NavBar>
        <div>
          <UsulanBaruList/>
        </div>
       
    </NavBar>
  )
}

export default UsulanBaru