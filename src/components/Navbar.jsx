import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { FaPenNib } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const collapseRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white position-fixed z-1 w-100" style={{ padding: '0 1.5rem', maxWidth: '850px', margin: '0 auto', left: 0, right: 0 }}>
        <div className="container-fluid border shadow rounded mt-3">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div 
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} 
            id="navbarSupportedContent"
            ref={collapseRef}
            onTransitionEnd={() => {
              if (!isMenuOpen && collapseRef.current) {
                collapseRef.current.style.transition = 'none';
                collapseRef.current.style.height = '';
                setTimeout(() => {
                  if (collapseRef.current) {
                    collapseRef.current.style.transition = '';
                  }
                }, 10);
              }
            }}
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={closeMenu}>
                <NavLink className="nav-link fs-5" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <NavLink className="nav-link fs-5" to="/project">
                  Project
                </NavLink>
              </li>
            </ul>
            <li className="nav-item text-bg-info rounded me-3" onClick={closeMenu}>
              <NavLink className="nav-link fs-6 p-2" to="mailto: meen.gurung333@gmail.com ">
                <FaPenNib className="fs-6"/> Contact
              </NavLink>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
