import React from 'react'
import { createUser } from '../../services/apiUser';
import './signup_form.css'

function Signup_form() {

  async function handleSignup(event) {
    event.preventDefault();

    const userData = {
        email: event.target.email.value,
        password: event.target.password.value,
        firstName: event.target.firstName.value
    }

    await createUser(userData);
    event.target.reset();
  }

  return (
    <div className='Signup_form'>
      <h2>Sign up</h2>
      <form className='signup-form' onSubmit={handleSignup}>

        <input type="text" name='firstName' required={true} placeholder="Name"/>
        <input type="email" name="email" required={true} placeholder='Email' />
        <input type="password" name="password" required={true} placeholder='Password'/>
        <button type="submit">Sign up</button>

      </form>

    </div>
  )
}

export default Signup_form