import OutsideClickHandler from '../../hooks/OutsideClickHandler';

import { Link, animateScroll as scroll } from 'react-scroll';

import logoImg from '../../img/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaFacebookF } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import { useIsActive } from '../../hooks/useIsActive';

import s from './header.module.scss';
import { useState } from 'react';

const Header = () => {
  const { onModal, isActiveModal, setIsActiveModal } = useIsActive();

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.section}>
          <Link onClick={() => scroll.scrollToTop()} to=".">
            <img
              src={logoImg}
              className={s.logo}
              width="200px"
              alt="Logo"
            ></img>
          </Link>

          <button
            type="button"
            name="menu"
            onClick={onModal}
            className={s.button_menu}
          >
            <GiHamburgerMenu className={s.icon_menu} />
          </button>
          <div
            className={
              isActiveModal
                ? `${s.backdrop_menu} ${s.activeMobile}`
                : `${s.backdrop_menu} ${s.inActiveMobile}`
            }
            id="menu"
            onClick={onModal}
          >
            <nav
              className={
                isActiveModal
                  ? `${s.nav} ${s.activeMobile}`
                  : `${s.nav} ${s.inActiveMobile}`
              }
            >
              <div className={s.nav_menu}>
                <p className={s.nav_text}>Меню сайту</p>
                <ul className={s.nav_list}>
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
                </ul>
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
                      href="mailto:y.otsabryk@gmail.com"
                      className={s.hookup_link}
                    >
                      <span>y.otsabryk@gmail.com</span>
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
                      className={s.control_link}
                      rel="noreferrer"
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
          </div>
          <OutsideClickHandler onOutsideClick={handleClose}>
            <div className={s.contact}>
              <button
                type="button"
                onClick={handleToggle}
                className={s.contact_title}
              >
                <span>Контакти</span>
                <IoIosArrowDown
                  className={
                    isOpen
                      ? `${s.icon_arrow} ${s.icon_arrow_activev}`
                      : `${s.icon_arrow}`
                  }
                />
              </button>
              {isOpen && (
                <ul className={s.contact_list}>
                  <li className={s.contact_item}>
                    <a href="tel:+380675211100" className={s.elem_link}>
                      <FiPhoneCall className={s.icon_tel} />
                      <span>+38 (067) 521 11 00</span>
                    </a>
                  </li>
                  <li className={s.contact_item}>
                    <a href="tel:+380675202508" className={s.elem_link}>
                      <FiPhoneCall className={s.icon_tel} />
                      <span>+38 (067) 520 25 08</span>
                    </a>
                  </li>
                  <li className={s.contact_item}>
                    <a
                      href="mailto:y.otsabryk@gmail.com"
                      className={s.elem_link}
                    >
                      <AiOutlineMail className={s.icon_mail} />
                      <span>y.otsabryk@gmail.com</span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </OutsideClickHandler>
        </div>
      </div>
    </header>
  );
};

export default Header;
