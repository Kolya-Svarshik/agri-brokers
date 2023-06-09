import logoImg from '../../img/IMG_8766.PNG';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ReactComponent as FacebookIcon } from '../../img/facebook-logo.svg';
import { ReactComponent as ArrowIcon } from '../../img/arrow.svg';
import { ReactComponent as PhoneIcon } from '../../img/phone.svg';
import { ReactComponent as MailIcon } from '../../img/mail.svg';

import s from './header.module.scss';

const Header = ({ isActive, setIsActive }) => {
  const handlerMenu = () => {
    setIsActive(!isActive);
  };

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

          <button type="button" onClick={handlerMenu} className={s.button_menu}>
            <GiHamburgerMenu className={s.icon_menu} />
          </button>

          <nav
            className={
              isActive
                ? `${s.nav} ${s.activeMobile}`
                : `${s.nav} ${s.inActiveMobile}`
            }
          >
            <div className={s.nav_menu}>
              <p className={s.nav_text}>Меню сайту</p>
              <ul className={s.nav_list}>
                <li className={s.nav_item}>
                  <a href="#" className={s.nav_title}>
                    <span>Про нас</span>
                  </a>
                </li>
                <li className={`${s.nav_elem} ${s.nav_item}`}>
                  <a href="#" className={s.nav_title}>
                    <span>Наші Послуги</span>
                    <ArrowIcon className={s.icon_arrow} />
                  </a>
                  <div className={s.elem_list}>
                    <a href="#" className={s.elem_link}>
                      <span>Для виробників с/г продукції</span>
                    </a>
                    <a href="#" className={s.elem_link}>
                      <span>Для переробників</span>
                    </a>
                    <a href="#" className={s.elem_link}>
                      <span>Для трейдерів</span>
                    </a>
                  </div>
                </li>
                <li className={`${s.nav_elem} ${s.nav_item}`}>
                  <a href="#" className={s.nav_title}>
                    <span>Гарячі пропозиції</span>
                    <ArrowIcon className={s.icon_arrow} />
                  </a>
                  <div className={s.elem_list}>
                    <a href="#" className={s.elem_link}>
                      <span>Гарячі пропозиції продаж</span>
                    </a>
                    <br></br>
                    <a href="#" className={s.elem_link}>
                      <span>Гарячі пропозиції купівля</span>
                    </a>
                  </div>
                </li>
                <li className={s.nav_item}>
                  <a href="#" className={s.nav_title}>
                    <span>Партнерство</span>
                  </a>
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
                    <FacebookIcon className={s.icon_facebook} />
                  </a>
                </li>
                <li className={s.control_item}>
                  <botton
                    type="button"
                    onClick={handlerMenu}
                    className={s.button_exit}
                  >
                    Закрити
                  </botton>
                </li>
              </ul>
            </div>
          </nav>

          <div className={s.contact}>
            <p className={s.contact_title}>
              <span>Контакти</span>
              <ArrowIcon className={s.icon_arrow} />
            </p>
            <div className={s.contact_list}>
              <a href="tel:+380675211100" className={s.elem_link}>
                <PhoneIcon className={s.icon_tel} />
                <span>+38 (067) 521 11 00</span>
              </a>
              <a href="tel:+380675202508" className={s.elem_link}>
                <PhoneIcon className={s.icon_tel} />
                <span>+38 (067) 520 25 08</span>
              </a>
              <a href="mailto:y.otsabryk@gmail.com" className={s.elem_link}>
                <MailIcon className={s.icon_mail} />
                <span>y.otsabryk@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
