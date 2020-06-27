import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <ol id="menu" className="additionCL">
      <li className="active_menu_item">
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/store/shoes">store</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ol>
  );
};

export default Header;