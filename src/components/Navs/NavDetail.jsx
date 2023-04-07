import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const NavDetail = () => {

  return (
    <header>
      <img src={Logo} alt="logo"  width='150px'/ >
      <ul>

        <Link to="/dashboard" >
          <li>Back</li>
        </Link>
      </ul>
    </header>
  );

}

export default NavDetail;
