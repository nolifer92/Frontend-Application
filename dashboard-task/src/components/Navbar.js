import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="dashboard">
      <ul>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/product">
            <span>Product</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
