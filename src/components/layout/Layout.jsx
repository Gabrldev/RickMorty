import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav.jsx";

const Layout = ({getRandon, onSearch}) => {
  return (
    <div>
      <Nav getRandon={getRandon} onSearch={onSearch}/>
      <Outlet />
    </div>
  );
};
export default Layout;
