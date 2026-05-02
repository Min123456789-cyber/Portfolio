import React, { useState, useRef } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { FaPenNib } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const collapseRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-custom position-fixed w-100"
      style={{ padding: "0 1.5rem", maxWidth: "870px", margin: "0 auto", left: 0, right: 0, zIndex: 1030 }}
    >
      <div className="container-fluid bg-white border shadow rounded mt-3">
        <Logo />
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          style={{ outline: "none", boxShadow: "none" }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          ref={collapseRef}
          onTransitionEnd={() => {
            if (!isMenuOpen && collapseRef.current) {
              collapseRef.current.style.transition = "none";
              collapseRef.current.style.height = "";
              setTimeout(() => {
                if (collapseRef.current) collapseRef.current.style.transition = "";
              }, 10);
            }
          }}
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1">
            <li className="nav-item" onClick={closeMenu}>
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item" onClick={closeMenu}>
              <NavLink className="nav-link" to="/project">
                Projects
              </NavLink>
            </li>
          </ul>

          <li className="nav-item me-2" onClick={closeMenu}>
            <NavLink className="nav-link navbar-contact-btn" to="mailto:meen.gurung333@gmail.com">
              <FaPenNib style={{ marginRight: "0.35rem", verticalAlign: "middle" }} />
              Contact
            </NavLink>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
