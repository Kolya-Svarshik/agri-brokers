import React from 'react';

import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
import { IoIosArrowDown } from 'react-icons/io';
import { useIsActive } from '../../../hooks/useIsActive';
import { useTranslation } from 'react-i18next';

import s from '../footer.module.scss';

export const Social = () => {
  const { onModal, isActiveModal } = useIsActive();
  const { t } = useTranslation()
  return (
    <div className={s.social}>
      <h2 onClick={onModal} id="dropDownsFooter" className={s.social_title}>
        {t('footer.social.title')}
      </h2>
      <IoIosArrowDown
        className={
          isActiveModal
            ? `${s.icon_arrow} ${s.icon_arrow_active}`
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
        <li className={s.link_item}>
          <a
            href="https://www.facebook.com/profile.php?id=100093057441973"
            target="_blank"
            rel="noreferrer"
            className={s.social_text}
          >
            <div className={s.icon_button}>
              <FaFacebookF className={s.icon_facebook} />
            </div>
            <p>{t('footer.social.link.facebook')}</p>
          </a>
        </li>
        <li className={s.link_item}>
          <a
            href="https://www.instagram.com/agri_brokers_ukraine?igsh=MWh3cWh6MjV5ZXRjOA%3D%3D"
            target="_blank"
            rel="noreferrer"
            className={s.social_text}
          >
            <div className={s.icon_button}>
              <AiFillInstagram className={s.icon_instagram} />
            </div>
            <p>{t('main.hero.button.link.instagram')}</p>
          </a>
        </li>
      </ul>
    </div>
  );
};
