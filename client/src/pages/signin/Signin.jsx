import React from 'react';
import SigninForm from '../../components/signin_form/SigninForm';
import Header from '../../components/header/Header';
import './signin.css'

function Signin() {
  return (
    <>
      <Header></Header>
      <SigninForm></SigninForm>
    </>
  )
}


// useEffect(() => {
//   if (isLogged) navigate('/stats');
// }, [isLogged]);

export default Signin