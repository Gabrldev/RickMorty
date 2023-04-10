import { useState } from "react";
import { supabase } from "../../client/client";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Rick from "../../assets/rick2.png";
import logo from "../../assets/logo.png";
import style from "./style.module.css";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { BsGoogle, BsGithub } from "react-icons/bs";
const Login = () => {
  let navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      navigate("/dashboard");

    } catch (error) {
      alert(error);
    }
  }
  function handleShowPass() {
    setShowPass(!showPass);
  }
  return (
    <>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo rick and morty" width="150px" />
      </header>

      <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.form}>
          <h1 className={style.title}>Welcome to Rick and Morty</h1>
          <span className={style.spanLogin}>Login your account</span>
          <div className={style.inputContainer}>
            <FiMail style={{ fontSize: "24px", marginRight: "6px" }} />
            <input
              type="text"
              placeholder="Email..."
              name="email"
              onChange={handleChange}
              className={style.input}
            />
          </div>
          <div className={style.inputContainer + " " + style.inputPassword}>
            <FiLock style={{ fontSize: "24px", marginRight: "6px" }} />
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password..."
              name="password"
              onChange={handleChange}
              className={style.input}
            />
            {showPass ? (
              <FiEye
                style={{
                  position: "absolute",
                  right: "25px",
                  fontSize: "24px",
                }}
                onClick={handleShowPass}
              />
            ) : (
              <FiEyeOff
                onClick={handleShowPass}
                style={{
                  position: "absolute",
                  right: "25px",
                  fontSize: "24px",
                }}
              />
            )}
          </div>
          <div className={style.forgotPassword}>
            <div style={{ display: "flex" }}>
              <div className={style.boxR} style={{ marginRight: "7px" }} />
              <span
                style={{
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#ffffff33",
                }}
              >
                Remember password
              </span>
            </div>
            <span style={{ cursor: "pointer" }}>Forgot password</span>
          </div>
          <button type="submit" className={style.btnLogin}>
            Login
          </button>
          <div className={style.loginWhith}>
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "15px",
                fontWeight: "400",
                color: "#ffffff33",
                marginRight: "12px",
              }}
            >
              Login whith
            </span>
            <div className={style.continLogin}>
              <div className={style.IconBox}>
                <BsGoogle style={{ fontSize: "15px" }} />
              </div>
              <div className={style.IconBox}>
                <BsGithub style={{ fontSize: "15px" }} />
              </div>
            </div>
          </div>
          <div className={style.register}>
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "15px",
                fontWeight: "400",
                color: "#ffffff33",
              }}
            >
              You do not have an account?
              <span className={style.register2}>Register</span>
            </span>
          </div>
        </form>
        <div className={style.rick}>
          <img src={Rick} alt="rick" width="100%" />
        </div>
      </div>
    </>
  );
};
export default Login;
