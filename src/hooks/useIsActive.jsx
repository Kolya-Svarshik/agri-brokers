import React, { useState } from 'react';

export const useIsActive = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const onModal = e => {
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget);
    if (e) e.preventDefault();
    if (e.currentTarget.name === 'modal' || e.target.id === 'modal') {
      setIsActiveModal(!isActiveModal);
      //   console.log('!object');
      return;
    }
    if (e.currentTarget.name === 'menu' || e.currentTarget.id === 'menu') {
      const body = document.querySelector('body');
      body.classList.toggle('no_scroll');
      setIsActiveModal(!isActiveModal);
    }
  };

  return { onModal, isActiveModal, setIsActiveModal };
};
