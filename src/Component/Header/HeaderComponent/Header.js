import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";
const Header = () => {
  return (
      <div>
        <nav>
          <ul >
            <li>
              <Link to="/"><h3>HOME</h3></Link>
            </li>
            <li>
              <Link to="/signup"><h3>SIGNUP</h3></Link>
            </li>
            <li>
              <Link to="/login"><h3>LOGIN</h3></Link>
            </li>
            <li>
              <Link to="/user"><h3>USER</h3></Link>
            </li>
          </ul>
        </nav>
        
      </div>
  );
}

export default Header;
