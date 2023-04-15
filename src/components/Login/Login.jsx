import { useState } from 'react'
import Rick from '../../assets/rick2.png'
import logo from '../../assets/logo.png'
import style from './style.module.css'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import { BsGoogle, BsGithub } from 'react-icons/bs'
import LoginGoogle from '../../services/LoginGoogle'
import loginWhithEmail from '../../services/loginEmail'
import checkLogin from '../../utils/checkLogin'
import { Link } from 'react-router-dom'

const Login = () => {
  const check = checkLogin()
  check()

  const [showPass, setShowPass] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  function handleChange (event) {
    validate()
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleShowPass () {
    setShowPass(!showPass)
  }
  const signInWithGoogle = LoginGoogle()
  const handleSubmit = loginWhithEmail(formData)
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })
  const validate = () => {
    const errors = {}
    if (!formData.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid'
    }
    if (!formData.password) {
      errors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }
    setErrors(errors)
  }
  console.log(errors)
  return (
    <>
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <img src={logo} alt='logo rick and morty' width='150px' />
      </header>

      <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.form}>
          <h1 className={style.title}>Welcome to Rick and Morty</h1>
          <span className={style.spanLogin}>Login your account</span>
          <div className={style.inputContainer}>
            <FiMail className={style.fimail} />
            <input
              type='text'
              placeholder='Email...'
              name='email'
              onChange={handleChange}
              className={style.input}
            />

          </div>
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          <div className={style.inputContainer + ' ' + style.inputPassword}>
            <FiLock className={style.lock} />
            <input
              type={showPass ? 'text' : 'password'}
              placeholder='Password...'
              name='password'
              onChange={handleChange}
              className={style.input}
            />
            {showPass
              ? (
                <FiEye
                  className={style.eye}
                  onClick={handleShowPass}
                />
                )
              : (
                <FiEyeOff
                  onClick={handleShowPass}
                  className={style.eyeLock}
                />
                )}
          </div>
          <div className={style.forgotPassword}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className={style.boxR} style={{ marginRight: '7px' }} />
              <span style={{ color: '#ffffff33' }}>Remember password</span>
            </div>
            <span className={style.forgotP}>Forgot password</span>
          </div>
          <button type='submit' className={style.btnLogin}>
            Login
          </button>
          <div className={style.loginWhith}>
            <span className={style.loginW}>Login whith</span>
            <div className={style.continLogin}>
              <div className={style.IconBox} onClick={signInWithGoogle}>
                <BsGoogle className={style.google} />
              </div>
              <div className={style.IconBox}>
                <BsGithub className={style.github} />
              </div>
            </div>
          </div>
          <div className={style.register}>
            <span>You do not have an account?</span>
            <span className={style.register2}><Link className={style.register2} to='/register'>Register</Link></span>
          </div>
        </form>
        <div className={style.rick}>
          <img src={Rick} alt='rick' width='100%' />
        </div>
      </div>
    </>
  )
}
export default Login
