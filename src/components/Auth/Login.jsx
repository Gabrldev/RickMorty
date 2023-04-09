import { useState } from "react";
import { supabase } from "../../client/client";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate()

  const [formData,setFormData] = useState({
        email:'',password:''
  })


  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })

      if (error) throw error
      navigate('/dashboard')


    //   alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      <strong style={{ color: "white" }}>
        No tienes una<Link to="/login">cuenta?</Link>
      </strong>
    </div>
  );
};
export default Login;
