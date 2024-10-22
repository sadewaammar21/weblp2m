import React from 'react';
import NavBar from '../components/NavBar';
import UsulanBaruList from '../components/UsulanBaruList';

const UsulanBaru = () => {
  return (
    <NavBar>
        <div>
        <h1>
          <UsulanBaruList/>
        </h1>
        </div>
       
    </NavBar>
  )
}

export default UsulanBaru