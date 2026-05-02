import React from "react";
import { IoStarHalf } from "react-icons/io5";
import { BiCheck } from "react-icons/bi";

const Tag = ({ label, variant = "blue" }) => (
  <span className={`stag stag-${variant}`}>
    <BiCheck />
    {label}
  </span>
);

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <p className="section-eyebrow">What I know</p>
        <h2 className="section-heading">Skills</h2>

        <div className="skills-card">
          <div className="skills-icon-box">
            <IoStarHalf />
          </div>
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              color: "var(--navy-soft)",
              marginBottom: "1.5rem",
            }}
          >
            The skills necessary for Web Development
          </p>

          <p className="skill-category">Programming Language</p>
          <div>
            <Tag label="C#" variant="blue" />
          </div>

          <div className="skills-divider" />

          <p className="skill-category">Frameworks & Libraries</p>
          <div>
            <Tag label="ASP.NET" variant="blue" />
            <Tag label="ASP.NET WebForms" variant="blue" />
            <Tag label="ASP.NET Core" variant="blue" />
            <Tag label="Entity Framework" variant="blue" />
            <Tag label="React" variant="yellow" />
            <Tag label="Bootstrap" variant="yellow" />
            <Tag label="Tailwind CSS" variant="yellow" />
          </div>

          <div className="skills-divider" />

          <p className="skill-category">Tools</p>
          <div>
            <Tag label="Git" variant="neutral" />
            <Tag label="GitHub" variant="neutral" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
