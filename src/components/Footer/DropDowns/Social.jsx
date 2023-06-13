import React from 'react';
import logoImg from '../../../img/logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { useIsActive } from '../../../hooks/useIsActive';

import s from '../footer.module.scss';

export const Social = () => {
  const { onModal, isActiveModal, setIsActiveModal } = useIsActive();

  return (
    <div className={s.social}>
      <h2 onClick={onModal} id="dropDownsFooter" className={s.social_tetle}>
        СЛІДКУЙТЕ ЗА НАМИ
      </h2>
      <IoIosArrowDown
        className={
          isActiveModal
            ? `${s.icon_arrow} ${s.icon_arrow_activev}`
            : `${s.icon_arrow}`
        }
      />
      <ul
        className={
          isActiveModal
            ? `${s.social_bloc} ${s.activeMobile}`
            : `${s.social_bloc} ${s.inActiveMobile}`
        }
      >
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100093057441973"
            target="_blank"
            className={s.social_text}
          >
            <div className={s.icon_button}>
              <FaFacebookF className={s.icon_facebook} />
            </div>
            <p>Наш Facebook</p>
          </a>
        </li>
      </ul>
    </div>
  );
};
