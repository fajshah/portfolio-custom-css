import React from "react";
import Image from "next/image";
import '../app/styles/about.css';

const About = () => {
  // Use environment variable or default to local image
  const imageUrl = "/pic2.avif";

  return (
    <div id="about" className="about-container">
    
      <div className="about-image">
        <Image
          src={imageUrl}
          alt="Profile Image"
          width={500}
          height={500}
          className="rounded-full"  
          data-aos="zoom-in-up"
          priority
        />
      </div>
      
      <div className="text-center">
        <h2 className="about-heading" data-aos="zoom-in-up">About Me</h2>
        <p className="about-text" data-aos="zoom-in-up">
          I have a master's degree in English and Teaching from Metropolitan School, and I am currently studying at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, and the Metaverse. I am passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
        </p>
      </div>
    </div>
  );
};

export default About;

