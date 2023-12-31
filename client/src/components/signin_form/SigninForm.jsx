import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './signin_form.css';
import cover from '../../assets/images/dehangover_signup.png';

function SigninForm() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  async function handleSignin (event) {
    event.preventDefault();

    const userData = {
      email: event.target.email.value,
      password: event.target.password.value
    }

    await signin(userData);
    event.target.reset();
    navigate('/stats')
  }

  return (
    <div className='Signin_form'>
      <h2>It's alright if you don't remember</h2>
      <h6>DeHangover does</h6>
      <img src={cover} alt="" />
      <form className="signin-form" onSubmit={handleSignin}>
        <input type="text" name='email' required={true} placeholder='Email'/>
        <input type="password" name='password' required={true} placeholder='Password'/>
        <button type="submit" >Sign in</button>
        <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>

      </form>

    </div>
  )
}

export default SigninForm;