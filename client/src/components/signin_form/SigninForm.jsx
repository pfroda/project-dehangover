import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './signin_form.css'

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
    <div className='SigninForm'>
      <h2>Sign In</h2>
      <form className="signup-form" onSubmit={handleSignin}>
        <input type="text" name='email' required={true} placeholder='Email'/>
        <input type="password" name='password' required={true} placeholder='Password'/>
        <button type="submit" >Sign in</button>
        <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>

      </form>

    </div>
  )
}

export default SigninForm;