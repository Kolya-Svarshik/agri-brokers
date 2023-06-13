import React from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

import { IoIosArrowDown } from 'react-icons/io';

import { useIsActive } from '../../../hooks/useIsActive';

import s from '../footer.module.scss';

export const NavigationFooter = () => {
  const { onModal, isActiveModal, setIsActiveModal } = useIsActive();

  return (
    <nav className={s.nav}>
      <h2 onClick={onModal} id="dropDownsFooter" className={s.nav_title}>
        МЕНЮ САЙТУ
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
            <span>Про нас</span>
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
            <span>Наші Послуги</span>
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
            <span>Гарячі пропозиції</span>
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
            <span>Партнерам</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
