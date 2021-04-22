import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [selectedPage, setSelectedPage] = useState("home");

  const handleSelectedPage = (page) => {
    setSelectedPage(page);
  };
  return (
    <div className="navbar">
      <ul>
        <Link to="/" className={`${selectedPage === "home" ? "selected-page" : ""}`} onClick={() => handleSelectedPage("home")}>
          <span>Home</span>
        </Link>
        <Link
          to="/product"
          className={`${selectedPage === "product" ? "selected-page" : ""}`}
          onClick={() => handleSelectedPage("product")}
        >
          <span>Product</span>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
