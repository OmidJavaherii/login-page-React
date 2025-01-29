import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './RecoveryPass.css';

export default function RecoveryPass() {

  const [email, setEmail] = useState('')

  return (
      <div className="login-box">
        <form action="#">
          <h1 className='header'>Reset Password</h1>

          <div className="input-box">
            <i className="material-symbols-outlined">mail</i>
            <input
              type="email"
              id="input-email"
              className="input-tag"
              autoComplete="off"
              value={email}
              onFocus={e => e.target.nextElementSibling.style.top = "0"}
              onBlur={e => email.length === 0 ? (e.target.nextElementSibling.style.top = "50%") : e.target.nextElementSibling.style.top = "0"}
              onChange={e => { setEmail(e.target.value) }}
            />
            <label id="label-email" required="">Email</label>
          </div>
          <a href="##" className="btn-login recovery-login">Send Email</a>

          <div className="register-link">
            <p>
              remember your account?
              <Link to='/' className="btn-register">Log in</Link>
            </p>
          </div>

        </form>
      </div>
  )
}