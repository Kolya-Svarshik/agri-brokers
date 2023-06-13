import React, { useState } from 'react';

export const useIsActive = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const onModal = e => {
    if (e.currentTarget.name === 'menu' || e.target.id === 'menu') {
      const body = document.querySelector('body');
      body.classList.toggle('no_scroll');
      setIsActiveModal(!isActiveModal);
    }

    if (
      e.currentTarget.name === 'dropDownsFooter' ||
      e.target.id === 'dropDownsFooter'
    ) {
      setIsActiveModal(!isActiveModal);
    }
  };

  return { onModal, isActiveModal, setIsActiveModal };
};
