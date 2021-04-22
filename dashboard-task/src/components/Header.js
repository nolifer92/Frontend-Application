import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const configuration = useSelector((store) => store.configuration.configurationData);

  return (
    <div className="header">
      <img src={configuration.logo} alt="logo" style={{ color: configuration.mainColor }} />
    </div>
  );
}

export default Header;
