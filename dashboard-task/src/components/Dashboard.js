import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Logo</h1>
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

export default Dashboard;
