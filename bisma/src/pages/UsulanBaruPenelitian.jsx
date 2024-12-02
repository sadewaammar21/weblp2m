import React from 'react'
import NavBar from '../components/NavBar'
import ProgressBarUsulan from '../components/UsulanBaru/ProgressBarUsulan'
import { useParams } from 'react-router-dom'

const UsulanBaruPenelitian = () => {
  const {id} = useParams();
  return (
    <NavBar>
        <ProgressBarUsulan id={id}/>
    </NavBar>
  )
}

export default UsulanBaruPenelitian