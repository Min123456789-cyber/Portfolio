import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <Logo inverted />
      <p className="footer-copy">
        Copyright <span className="accent">&copy;</span> 2024 Min Bahadur Gurung. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
