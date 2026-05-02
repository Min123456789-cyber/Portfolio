import React from "react";
import LogoPic from "../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = ({ inverted }) => {
  return (
    <div className="p-2">
      <Link to="/">
        <img
          src={LogoPic}
          style={{
            width: "42px",
            height: "42px",
            filter: inverted ? "brightness(0) invert(1)" : "none",
            transition: "filter 0.2s",
          }}
          alt="Logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
