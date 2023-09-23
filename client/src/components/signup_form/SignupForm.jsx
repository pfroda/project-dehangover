import React from 'react';
import { useAuth } from '../../context/AuthContext';
// import { useEffect } from 'react';
// import { createUser } from '../../services/apiUser';
import { Link, useNavigate } from 'react-router-dom';
import './signup_form.css'

// 

function SignupForm() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSignup (event) {
    event.preventDefault();

    const userData = {
      firstName: event.target.firstName.value,
      email: event.target.email.value,
      password: event.target.password.value
    }

    await signup(userData);
    event.target.reset();
    navigate('/drinks')
    
  }

  return (
    <div className='Signup_form'>
      {/* <h2>Sign up</h2> */}
      <form className='signup-form' onSubmit={handleSignup}>

        <input type="text" name='firstName' required={true} placeholder="Name"/>
        <input type="email" name="email" required={true} placeholder='Email' />
        <input type="password" name="password" required={true} placeholder='Password'/>
        <button type="submit">Sign up</button>
        <p>Already have an account? <Link to='/signin'>Sign in</Link></p>

      </form>

    </div>
  )
}



export default SignupForm