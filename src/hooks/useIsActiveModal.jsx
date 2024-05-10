import React, { useState } from 'react';

const body = document.querySelector('body');

export const useIsActiveModal = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);

  const onModal = e => {
    if (e.currentTarget.name === 'menu' || e.target.id === 'menu') {
      body.classList.toggle('no_scroll');
      setIsActiveModal(!isActiveModal);
      return
    }
    if (e.currentTarget.name === 'item_menu' || e.target.id === 'item_menu') {
      body.classList.remove('no_scroll');
      setIsActiveModal(!isActiveModal);
      return
    }
  };

  return { onModal, isActiveModal, setIsActiveModal };
};
