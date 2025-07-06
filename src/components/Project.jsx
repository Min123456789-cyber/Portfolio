import React from "react";
import Dice from "../assets/dice.png";
import ProjectCard from "./ProjectCard";
import ImageUps from "../assets/ImageUps.png";

const Project = () => {
  return (
    <>
      <section className="container">
        <div style={{ paddingTop: "150px" }} className="">
          <h3 className="text-center">
            Some of <br /> the basic{" "}
            <span className="badge bg-info">Projects</span>
        </h3>
        <div className="divider bg-info mx-auto my-3" style={{ width: '80px', height: '4px' }}></div>
      </div>
      
      <div className="row g-4 justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body p-0">
              <ProjectCard
                Image={Dice}
                title="Dice Game"
                description="Dice game with easy to understand rule."
                link="https://github.com/Min123456789-cyber/dice-game"
                live="https://dice-game-kappa-ebon.vercel.app/"
                code="Code"
                liveTitle="Play Game"
                className="h-100"
              />
            </div>
          </div>
        </div>
        
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body p-0">
              <ProjectCard
                Image={ImageUps}
                title="Image Uploader"
                description="Upload Your Image and make it a memory."
                link="https://github.com/Min123456789-cyber/ImageUpoader"
                code="Code"
                liveTitle="Not Available"
                className="h-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Project;
