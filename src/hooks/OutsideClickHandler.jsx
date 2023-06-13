import React, { useEffect } from 'react';

const OutsideClickHandler = ({ onOutsideClick, children }) => {
  useEffect(() => {
    const handleClick = event => {
      if (!event.target.closest('.dropdown')) {
        onOutsideClick();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [onOutsideClick]);

  return <div className="dropdown">{children}</div>;
};

export default OutsideClickHandler;
