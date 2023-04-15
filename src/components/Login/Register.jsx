import { useState } from 'react'
import Rick from '../../assets/rick2.png'
import logo from '../../assets/logo.png'
import style from './style.module.css'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import checkLogin from '../../utils/checkLogin'
import { supabase } from '../../client/client'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast'

const Login = () => {
  const check = checkLogin()
  check()

  const [showPass, setShowPass] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  })

  function handleChange (event) {
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
  const registerUser = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.username
          }
        }
      })
      if (error) {
        toast.error(error.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <Toaster />
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
        <form onSubmit={registerUser} className={style.form}>
          <h1 className={style.title}>Welcome to Rick and Morty</h1>
          <span className={style.spanLogin}>Register account</span>
          <div className={style.inputContainer} style={{ marginBottom: '38px' }}>
            <FaUserAlt className={style.fimail} />
            <input
              type='text'
              placeholder='Username...'
              name='username'
              onChange={handleChange}
              className={style.input}
            />
          </div>
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
                <FiEye className={style.eye} onClick={handleShowPass} />
                )
              : (
                <FiEyeOff onClick={handleShowPass} className={style.eyeLock} />
                )}
          </div>
          <button type='submit' className={style.btnLogin}>
            Register
          </button>
          <div className={style.register} style={{ marginTop: '20px' }}>
            <span>Do you already have an account?</span>
            <span className={style.register2}><Link className={style.register2} to='/'>Login</Link></span>
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
