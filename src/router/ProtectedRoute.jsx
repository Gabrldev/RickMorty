import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../client/client";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = ({ getRandon, onSearch, children}) => {

  useEffect(()=>{
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/dashboard");
      }else{
        navigate("/");
      }
    })
  },[])
const navigate = useNavigate();
  return (
    <div>
      {children ? (
        children
      ) : (
        <>
          <Nav getRandon={getRandon} onSearch={onSearch} />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default ProtectedRoute;
