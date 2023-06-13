import React, { useEffect, useState } from 'react';

export const useTargetScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const viewportHeight = window.innerHeight;

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollY, viewportHeight };
};
