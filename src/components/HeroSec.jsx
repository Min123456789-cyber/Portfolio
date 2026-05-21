import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const HeroSec = () => {
  const [text] = useTypewriter({
    words: ["Aspiring Developer", "FullStack Developer", "DotNet Developer", "Learner"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="hero-wrap">
      <div className="hero-bg-shape s1" />
      <div className="hero-bg-shape s2" />
      <div className="hero-bg-shape s3" />

      <div className="hero-inner">
        <div className="anim-fade-up anim-d1">
          <span className="hero-badge">Portfolio</span>
        </div>

        <h1 className="hero-name anim-fade-up anim-d2">
          Hi, I'm
        </h1>

        <h1 className="hero-name anim-fade-up anim-d3">
          Min Bahadur{" "}
          <span className="hero-name-highlight">Gurung</span>
        </h1>

        <p className="hero-typewriter anim-fade-up anim-d4">
          I'm a{" "}
          <span className="type-word">{text}</span>
          <Cursor cursorBlinking cursorStyle="|" cursorColor="#F5C842" />
        </p>

        <div className="hero-cta anim-fade-up anim-d5">
          <NavLink to="/project" className="btn-hero-primary">
            View My Work <FiArrowRight />
          </NavLink>
          <a href="mailto:meen.gurung333@gmail.com" className="btn-hero-ghost">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
