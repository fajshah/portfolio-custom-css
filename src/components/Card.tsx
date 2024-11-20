import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../app/Styles/card.css';

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    
    // Set initial screen size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`card ${isSmallScreen ? '' : 'card-sm'}`} data-aos="zoom-in-up">
      <div>
        <Image
          className={`card-image ${isSmallScreen ? '' : 'card-image-sm'}`}
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>
      <div className="card-container">
        <div className="card-title">{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((tag) => (
            <div className="card-tags" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
