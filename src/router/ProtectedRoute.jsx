import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../client/client";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const ProtectedRoute = ({ getRandon, onSearch, children }) => {
  const rutas = useParams();
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      switch (session) {
        case null:
          navigate("/");
        default:
          break;
      }
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      {children ? (
        children
      ) : (
        <>
          <Nav getRandon={getRandon} onSearch={onSearch}  />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default ProtectedRoute;
