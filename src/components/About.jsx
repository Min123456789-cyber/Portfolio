import React from "react";
import HeroImg from "../assets/don.png";
import { RiContactsFill } from "react-icons/ri";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <p className="section-eyebrow">Who I am</p>
        <h2 className="section-heading">About Me</h2>

        <div className="row align-items-center">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="about-img-frame">
              <img src={HeroImg} alt="Min Bahadur Gurung" />
            </div>
          </div>

          <div className="col-lg-8">
            <div
              style={{
                background: "var(--surface)",
                border: "1.5px solid var(--border)",
                borderRadius: "14px",
                padding: "2rem",
              }}
            >
              <div className="about-icon-box">
                <RiContactsFill />
              </div>

              <p className="about-text">
                Software Engineer and Full-Stack Developer focused on building responsive,
                scalable, and secure web applications. Experienced in front-end development
                with HTML, CSS, JavaScript, and React.js, and back-end development with .NET.
                Strong at turning requirements into clean, efficient, and user-focused solutions.
              </p>
              <p className="about-text" style={{ marginBottom: 0 }}>
                I bring a practical approach to development, with attention to performance, usability,
                and maintainable code. I work well across teams, adapt quickly, and stay current with
                modern tools and frameworks to deliver reliable, high-quality products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
