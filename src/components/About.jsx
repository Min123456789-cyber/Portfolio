import React from "react";
import HeroImg from "../assets/don.png";
import { RiContactsFill } from "react-icons/ri";

const About = () => {
  return (
    <>
      <div className="m-4">
        <div className="container">
          <div>
            <h5 className="fs-2 py-4">About Me</h5>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-3">
              <img src={HeroImg} className="img-fluid rounded" alt="MyImage" />
            </div>
            <div className="col-lg-8 border mb-3 rounded p-4">
              <RiContactsFill className="my-3 fs-1 border p-2 rounded bg-body-tertiary"/>
              <p style={{textAlign: "justify"}}>
                Software Engineer and Full-Stack Developer focused on building responsive, 
                scalable, and secure web applications. Experienced in front-end development 
                with HTML, CSS, JavaScript, and React.js, and back-end development with .NET. 
                Strong at turning requirements into clean, efficient, and user-focused solutions.
              </p>
              <p style={{textAlign: "justify"}}>
                I bring a practical approach to development, with attention to performance, usability, 
                and maintainable code. I work well across teams, adapt quickly, and stay current with 
                modern tools and frameworks to deliver reliable, high-quality products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
