import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="container mx-auto pt-32 px-4">
    
      <div className="flex items-center justify-center">
        <Image
          src="/pic2.avif"
          alt="Profile Image"
          width={700}
          height={700}
          className="rounded-full"  data-aos="zoom-in-up"
        />
      </div>
      
      <div className="text-center mt-10">
        <h2 className="text-4xl md:text-5xl font-bold" data-aos="zoom-in-up">About Me</h2>
        <p className="text-gray-500 pt-6" data-aos="zoom-in-up">
          I have a master's degree in English and Teaching from Metropolitan School, and I am currently studying at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, and the Metaverse. I am passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
        </p>
      </div>
    </div>
  );
};

export default About;
