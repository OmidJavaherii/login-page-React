import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './Register.css'

export default function Register() {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [pass2, setPass2] = useState('')
  const [visible, setVisible] = useState(true)
  const [visible2, setVisible2] = useState(true)
  const [checkIsLongEnough, setIsLongEnough] = useState(false)
  const [checkHasLower, setHasLower] = useState(false)
  const [checkHasUpper, setHasUpper] = useState(false)
  const [checkHasDigit, setHasDigit] = useState(false)
  const [checkHasSpecial, setHasSpecial] = useState(false)
  const [checkCorrect, setCheckCorrect] = useState(false)

  const visibility = e => {
    e.preventDefault()
    setVisible(!visible)
  }
  const visibility2 = e => {
    e.preventDefault()
    setVisible2(!visible2)
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
  function correctPassword(value, password) {
    if (value === password) {
      setCheckCorrect(true)
    } else {
      setCheckCorrect(false)
    }
  }

  return (
    <div className="login-box">

      <form action="#">
        <h1 className='sign-up'>sign Up</h1>

        <div className="input-box">
          <i className="material-symbols-outlined">mail</i>
          <input
            type="email"
            id="input-email"
            className="input-tag"
            autoComplete='off'
            required
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
            required
            value={pass}
            onFocus={e => e.target.nextElementSibling.style.top = "0"}
            onBlur={e => pass.length === 0 ? (e.target.nextElementSibling.style.top = "50%") : e.target.nextElementSibling.style.top = "0"}
            onChange={e => {
              setPass(e.target.value)
              validatePassword(e.target.value)
            }}
          />
          <label id="label-password" required="">Create Password</label>
        </div>
        <div className='validation valid-singUp'>
          <span>{!checkIsLongEnough ? '.8 Characters' : ''}</span>
          <span>{!checkHasUpper ? '.Upper Case' : ''}</span>
          <span>{!checkHasLower ? '.Lower case' : ''}</span>
          <span>{!checkHasSpecial ? '.Specials' : ''}</span>
          <span>{!checkHasDigit ? '.Digits' : ''}</span>
        </div>

        <div className="input-box try-again">
          <i className="material-symbols-outlined">lock</i>
          <a href="##"><i className="material-symbols-outlined visibility" onClick={e => visibility2(e)}>{visible ? 'Visibility_Off' : 'visibility'}</i></a>

          <input
            type={visible2 ? "password" : 'text'}
            id="input-password"
            className="input-tag"
            autoComplete="off"
            required
            value={pass2}
            onFocus={e => e.target.nextElementSibling.style.top = "0"}
            onBlur={e => pass2.length === 0 ? (e.target.nextElementSibling.style.top = "50%") : e.target.nextElementSibling.style.top = "0"}
            onChange={e => {
              setPass2(e.target.value)
              correctPassword(e.target.value , pass)
            }}
          />
          <label id="label-password" required="">Confirm Password</label>
        </div>
        <div className='validation valid-correct'>
          <span>{!checkCorrect ? '.Not Same' : ''}</span>
        </div>
        <a href="##" className="btn-login signUpBtn">Sign Up</a>

        <div className="register-link">
          <p>
            Already a member?
            <Link to='/' className="btn-register">Log in</Link>
          </p>
        </div>

      </form>
    </div>
  )
}
