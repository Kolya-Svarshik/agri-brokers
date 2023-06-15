import React from 'react';

import { Link } from 'react-scroll';

import { IoIosArrowDown } from 'react-icons/io';

import { useIsActive } from '../../../hooks/useIsActive';
import { useTranslation } from 'react-i18next';

import s from '../footer.module.scss';

export const NavigationFooter = () => {
  const { onModal, isActiveModal } = useIsActive();
  const { t } = useTranslation()
  return (
    <nav className={s.nav}>
      <h2 onClick={onModal} id="dropDownsFooter" className={s.nav_title}>
        {t('footer.nav.title')}
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
            ? `${s.nav_list} ${s.activeMobile}`
            : `${s.nav_list} ${s.inActiveMobile}`
        }
      >
        <li className={s.nav_item}>
          <Link
            to="about_us"
            smooth={true}
            offset={-100}
            duration={500}
            className={s.nav_text}
          >
            <span>{t('footer.nav.list.about_us')}</span>
          </Link>
        </li>
        <li className={s.nav_item}>
          <Link
            to="services"
            smooth={true}
            offset={-100}
            duration={500}
            className={s.nav_text}
          >
            <span>{t('footer.nav.list.services')}</span>
          </Link>
        </li>
        <li className={s.nav_item}>
          <Link
            to="offers"
            smooth={true}
            offset={-100}
            duration={500}
            className={s.nav_text}
          >
            <span>{t('footer.nav.list.offers')}</span>
          </Link>
        </li>
        <li className={s.nav_item}>
          <Link
            to="partnership"
            smooth={true}
            offset={-100}
            duration={500}
            className={s.nav_text}
          >
            <span>{t('footer.nav.list.partnership')}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
