import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <section className="connect-section">
      <div className="container">
        <p className="section-eyebrow" style={{ textAlign: "center" }}>Find me online</p>
        <div className="connect-divider" />
        <h2 className="connect-heading">Feel free to check on me</h2>

        <div className="connect-icons">
          <Link
            to="https://github.com/Min123456789-cyber"
            className="connect-icon-link github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/minbahadurgurung/"
            className="connect-icon-link linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="https://www.instagram.com/mingurung45/"
            className="connect-icon-link instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareInstagram />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Connect;
