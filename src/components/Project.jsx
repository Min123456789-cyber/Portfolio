import React from "react";
import Dice from "../assets/dice.png";
import ImageUps from "../assets/ImageUps.png";
import Trade from "../assets/trade.png";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <p className="section-eyebrow" style={{ textAlign: "center" }}>What I've built</p>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "2rem",
            color: "var(--navy)",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}
        >
          Some of the basic{" "}
          <span
            style={{
              background: "var(--yellow)",
              color: "var(--navy)",
              borderRadius: "4px",
              padding: "0 0.4rem",
              fontStyle: "italic",
            }}
          >
            Projects
          </span>
        </h2>
        <div
          style={{
            width: "48px",
            height: "3px",
            background: "var(--sky)",
            borderRadius: "2px",
            margin: "0.75rem auto 2.5rem",
          }}
        />

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <ProjectCard
              Image={Dice}
              title="Dice Game"
              description="Dice game with easy to understand rules."
              link="https://github.com/Min123456789-cyber/dice-game"
              live="https://dice-game-kappa-ebon.vercel.app/"
              code="View Code"
              liveTitle="Play Game"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <ProjectCard
              Image={ImageUps}
              title="Image Uploader"
              description="Upload your image and make it a memory."
              link="https://github.com/Min123456789-cyber/ImageUpoader"
              code="View Code"
              liveTitle="Not Available"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <ProjectCard
              Image={Trade}
              title="Trade Sora"
              description="A import/export platform website with a modern and clean interface."
              live="https://trade-sora-website.vercel.app/"
              liveTitle="Live Demo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
