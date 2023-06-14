import React from 'react'
import s from './header.module.scss';

import { Link, animateScroll as scroll } from 'react-scroll';
import logoImg from '../../img/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaFacebookF } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

export const Navigation = ({ dataMenuNav, isActiveModal, onModal }) => {
  return (
    <nav
      className={
        isActiveModal
          ? `${s.nav} ${s.activeMobile}`
          : `${s.nav} ${s.inActiveMobile}`
      }
    >
      <div className={s.nav_menu}>
        <p className={s.nav_text}>Меню сайту</p>
        {/* <ul className={s.nav_list}>
        <li className={s.nav_item}>
          <Link
            to="about_us"
            smooth={true}
            offset={-100}
            duration={500}
            name="menu"
            onClick={onModal}
            className={s.nav_title}
          >
            <span>Про нас</span>
          </Link>
        </li>
        <li className={`${s.nav_elem} ${s.nav_item}`}>
          <Link
            to="services"
            smooth={true}
            offset={-100}
            duration={500}
            name="menu"
            onClick={onModal}
            className={s.nav_title}
          >
            <span>Наші Послуги</span>
            <IoIosArrowDown className={s.icon_arrow} />
          </Link>
          <ul className={s.elem_list}>
            <li className={s.elem_item}>
              <Link
                to="services_manufacturers"
                smooth={true}
                offset={-100}
                duration={500}
                className={s.elem_link}
              >
                <span>Для виробників с/г продукції</span>
              </Link>
            </li>
            <li className={s.elem_item}>
              <Link
                to="services_processors"
                smooth={true}
                offset={-100}
                duration={500}
                className={s.elem_link}
              >
                <span>Для переробників</span>
              </Link>
            </li>
            <li className={s.elem_item}>
              <Link
                to="services_traders"
                smooth={true}
                offset={-100}
                duration={500}
                className={s.elem_link}
              >
                <span>Для трейдерів</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className={`${s.nav_elem} ${s.nav_item}`}>
          <Link
            to="offers"
            smooth={true}
            offset={-100}
            duration={500}
            name="menu"
            onClick={onModal}
            className={s.nav_title}
          >
            <span>Гарячі пропозиції</span>
            <IoIosArrowDown className={s.icon_arrow} />
          </Link>
          <ul className={s.elem_list}>
            <li className={s.elem_item}>
              <Link
                to="offers_sale"
                smooth={true}
                offset={-100}
                duration={500}
                className={s.elem_link}
              >
                <span>Гарячі пропозиції продаж</span>
              </Link>
            </li>
            <li className={s.elem_item}>
              <Link
                to="offers_purchase"
                smooth={true}
                offset={-100}
                duration={500}
                className={s.elem_link}
              >
                <span>Гарячі пропозиції купівля</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className={s.nav_item}>
          <Link
            to="partnership"
            smooth={true}
            offset={-100}
            duration={500}
            name="menu"
            onClick={onModal}
            className={s.nav_title}
          >
            <span>Партнерам</span>
          </Link>
        </li>
      </ul> */}
        <ul>{dataMenuNav.map((item) =>
          <li className={s.nav_item}>
            <Link
              to={item.to}
              smooth={item.smooth}
              offset={item.offset}
              duration={item.duration}
              name={item.name}
              onClick={onModal}
              className={s.nav_title}
            >
              <span>Про нас</span>
            </Link>
          </li>)}</ul>
      </div>
      <div className={s.hookup_menu}>
        <ul className={s.hookup_list}>
          <li className={s.hookup_item}>
            <a href="tel:+380675211100" className={s.hookup_link}>
              <span>+38 (067) 521 11 00</span>
            </a>
          </li>
          <li className={s.hookup_item}>
            <a href="tel:+380675202508" className={s.hookup_link}>
              <span>+38 (067) 520 25 08</span>
            </a>
          </li>
          <li className={s.hookup_item}>
            <a
              href="mailto:agribrokersukraine@gmail.com"
              className={s.hookup_link}
            >
              <span>agribrokersukraine@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={s.control_menu}>
        <ul className={s.control_list}>
          <li className={s.control_item}>
            <a
              href="https://www.facebook.com/profile.php?id=100093057441973"
              target="_blank"
              rel="noreferrer"
              className={s.control_link}
            >
              <FaFacebookF className={s.icon_facebook} />
            </a>
          </li>
          <li className={s.control_item}>
            <button
              type="button"
              name="menu"
              onClick={onModal}
              className={s.button_exit}
            >
              Закрити
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
