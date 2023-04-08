import { useState } from "react";
import { supabase } from "../../client/client";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };
  async function handleSubmit(e) {
    e.preventDefault()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })

      if (error) throw error
      console.log(data)
      setToken(data)
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
        <button>Login</button>
      </form>
      <strong style={{ color: "white" }}>
        No tienes una<Link to="/login">cuenta?</Link>
      </strong>
    </div>
  );
};
export default Login;
