import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

export default function LoginPage() {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [visible, setVisible] = useState(true)
  const [checkIsLongEnough, setIsLongEnough] = useState(false)
  const [checkHasLower, setHasLower] = useState(false)
  const [checkHasUpper, setHasUpper] = useState(false)
  const [checkHasDigit, setHasDigit] = useState(false)
  const [checkHasSpecial, setHasSpecial] = useState(false)

  const visibility = e => {
    e.preventDefault()
    setVisible(!visible)
  }

  function validatePassword(password) {
    setIsLongEnough(false)
    setHasLower(false)
    setHasUpper(false)
    setHasDigit(false)
    setHasSpecial(false)
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()\-=+[\]{}|;:'",.<>?/\\~`]/.test(password);
    const isLongEnough = password.length >= 8;

    if (isLongEnough) {
      setIsLongEnough(true)
    }
    if (hasLower) {
      setHasLower(true)
    }
    if (hasUpper) {
      setHasUpper(true)
    }
    if (hasDigit) {
      setHasDigit(true)
    }
    if (hasSpecial) {
      setHasSpecial(true)
    }
  }

  return (
    <div className="login-box">

      <form action="#">
        <h1 className='login-header'>Login</h1>

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

        <div className="input-box">
          <i className="material-symbols-outlined">lock</i>
          <a href="##"><i className="material-symbols-outlined visibility" onClick={e => visibility(e)}>{visible ? 'Visibility_Off' : 'visibility'}</i></a>

          <input
            type={visible ? "password" : 'text'}
            id="input-password"
            className="input-tag"
            autoComplete="off"
            value={pass}
            required onFocus={e => e.target.nextElementSibling.style.top = "0"}
            onBlur={e => pass.length === 0 ? (e.target.nextElementSibling.style.top = "50%") : e.target.nextElementSibling.style.top = "0"}
            onChange={e => {
              setPass(e.target.value)
              validatePassword(e.target.value)
            }}
          />
          <label id="label-password" required="">Password</label>
        </div>
        <div className='validation valid-login'>
          <span>{!checkIsLongEnough ? '.8 Characters' : ''}</span>
          <span>{!checkHasUpper ? '.Upper Case' : ''}</span>
          <span>{!checkHasLower ? '.Lower case' : ''}</span>
          <span>{!checkHasSpecial ? '.Specials' : ''}</span>
          <span>{!checkHasDigit ? '.Digits' : ''}</span>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <Link to='/recovery' className="btn-forgot-password">Forgot Password?</Link>
        </div>
        <a href="##" className="btn-login login-loginBtn">Login</a>

        <div className="register-link">
          <p>
            Don't have an account?
            <Link to='/register' className="btn-register">Register</Link>
          </p>
        </div>

      </form>
    </div>
  )
}