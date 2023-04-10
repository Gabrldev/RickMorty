import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ getRandon, onSearch, children}) => {

  const user = localStorage.getItem('sb-uzpmvpjlwmktjtipuxxf-auth-token')
  if(!user){
    return <Navigate to='/login' />
  }

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
