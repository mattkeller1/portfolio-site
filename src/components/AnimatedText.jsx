import { useState, useEffect } from 'react';

function AnimatedText({ phrases }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 300);
    }, 3500); // Slightly longer interval for full sentences

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <span 
      className="animated-text"
      style={{ 
        opacity: fade ? 1 : 0
      }}
    >
      {phrases[currentIndex]}
    </span>
  );
}

export default AnimatedText;