import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

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
      </div>
    </div>
  );
};

export default HeroSec;
