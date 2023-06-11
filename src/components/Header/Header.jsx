import { Link } from 'react-scroll';

import logoImg from '../../img/IMG_8766.PNG';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaFacebookF } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import { useIsActive } from '../../hooks/useIsActive';

import s from './header.module.scss';

const Header = () => {
  const { onModal, isActiveModal } = useIsActive();

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.section}>
          <a href="#">
            <img
              src={logoImg}
              className={s.logo}
              width="200px"
              alt="Logo"
            ></img>
          </a>

          <button
            type="button"
            name="menu"
            onClick={onModal}
            className={s.button_menu}
          >
            <GiHamburgerMenu className={s.icon_menu} />
          </button>
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
                    className={s.nav_title}
                  >
                    <span>Партнерство</span>
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
                  >
                    <FaFacebookF className={s.icon_facebook} />
                  </a>
                </li>
                <li className={s.control_item}>
                  <button
                    type="button"
                    name="menu"
                    id="menu"
                    onClick={e => onModal(e)}
                    className={s.button_exit}
                  >
                    Закрити
                  </button>
                </li>
              </ul>
            </div>
          </nav>

          <div className={s.contact}>
            <p className={s.contact_title}>
              <span>Контакти</span>
              <IoIosArrowDown className={s.icon_arrow} />
            </p>
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
                <a href="mailto:y.otsabryk@gmail.com" className={s.elem_link}>
                  <AiOutlineMail className={s.icon_mail} />
                  <span>y.otsabryk@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
