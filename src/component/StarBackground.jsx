import { useState, useEffect } from "react";
export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    GenerateStars();
    GenerateMeteors();

    const handleResize = () => {
      GenerateStars();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);
  const GenerateMeteors = () => {
    const NumberOfMeteors = 4;
    const newMeteors = [];
    for (let i = 0; i < NumberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 10,
        delay: Math.random() * 3,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  const GenerateStars = () => {
    const NumberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000,
    );
    const newStars = [];
    for (let i = 0; i < NumberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  return <div 
  className='fixed inset-0 overflow-hidden pointer-events-none z-0'> 
    {stars.map((star) => (
      <div key={star.id} className='star animate-pulse-subtle' 
      style= {{
        width: `${star.size}px`,
        height: `${star.size}px`,
        left: `${star.x}%`,
        top: `${star.y}%`,
        opacity: star.opacity,
        animationDuration: `${star.animationDuration}s`,
      }} /> 
    ))}

    {meteors.map((meteor) => (
      <div key={meteor.id} className='meteor animate-meteor' 
      style= {{
        width: `${meteor.size * 40 }px`,
        height: `${meteor.size * 1.4}px`,
        left: `${meteor.x}%`,
        top: `${meteor.y}%`,
        // animationName: 'meteor',
        animationDelay: `${meteor.delay}s`,
        animationDuration: `${meteor.animationDuration}s`,
      }} /> 
    ))}
  </div>;
};
