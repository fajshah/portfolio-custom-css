import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-hero-pattern bg-[url('/public/mypic.jpg')]bg-left lg:bg-[15%] bg-cover"
      style={{backgroundSize:"32%"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[100px] sm:text-[125px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p  data-aos="zoom-in-up">It's</p>
            <p  data-aos="zoom-in-up">Syeda</p>
            <p  data-aos="zoom-in-up">Farzana</p>
            <p  data-aos="zoom-in-up">Shah</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Hero;
