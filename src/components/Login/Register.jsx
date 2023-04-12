import { useState } from 'react'
import { supabase } from '../../client/client'
import { Link } from 'react-router-dom'
const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            fullname: formData.fullname
          }
        }
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Full Name'
          name='fullname'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={handleChange}
        />
        <button>Register</button>
      </form>
      <strong style={{ color: 'white' }}>Ya tienes una <Link to='/login'>cuenta?</Link></strong>
    </div>
  )
}
export default Register
