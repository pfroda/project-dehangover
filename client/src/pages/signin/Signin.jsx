import React from 'react';
import { useEffect } from 'react';
import SigninForm from '../../components/signin_form/SigninForm';
import './signin.css'

function Signin() {
  return (
      <SigninForm></SigninForm>
  )
}


// useEffect(() => {
//   if (isLogged) navigate('/stats');
// }, [isLogged]);

export default Signin