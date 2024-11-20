import React from 'react';
import '../app/styles/skills.css';

const Skills = () =>{
  return(
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>
      <div  data-aos="zoom-in-up" className='skills-left'>
      <h2 className='skills-heading'>Technologies I Work With</h2>
      <p className='skills-text'> I have a solid foundation in teaching,specializing in MATHS ,ENGLISH ,and also i learn about the HTML,CSS, TYPESCRIPT, JAVASCRIPT.My experience extends to using like React and Next.js to create dynamic and user friendly applications. I'm also proficient in teaching to enhance my skills to taugh comfortly to my students.</p>
      </div>
      <div className='skills-right'>
        <div className='skills-icons-grid'>
          <div className='skills-space'>
            <h2  data-aos="zoom-in-up">Teaching</h2>
            <h2  data-aos="zoom-in-up">Tailwind</h2>
            <h2  data-aos="zoom-in-up">CSS</h2>
            <h2  data-aos="zoom-in-up"> HTML</h2>
          </div>
          <div className='skills-space'>
            <h2  data-aos="zoom-in-up">Typescript</h2>
            <h2  data-aos="zoom-in-up">React.js</h2>
            <h2 data-aos="zoom-in-up">Next.js</h2>
            <h2  data-aos="zoom-in-up"> Node.js</h2>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;