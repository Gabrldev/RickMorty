import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import { useEffect } from "react";
import { supabase } from "../client/client";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
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
          <Nav  />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default ProtectedRoute;
