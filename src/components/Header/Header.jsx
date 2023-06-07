import logoImg from '../../img/IMG_8766.PNG';
import { ReactComponent as ArrowIcon } from '../../img/arrow.svg';
import { ReactComponent as PhoneIcon } from '../../img/phone.svg';
import { ReactComponent as MailIcon } from '../../img/mail.svg';
import { ReactComponent as ArrowUpIcon } from '../../img/arrow-up.svg';

import s from './header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.section}>
        <a href="#">
          <img src={logoImg} width="200px" alt="Logo"></img>
        </a>
        <nav className={s.nav}>
          <ul className={s.nav_list}>
            <li>
              <a href="#" className={s.nav_title}>
                <span>Про нас</span>
              </a>
            </li>
            <li>
              <a href="#" className={s.nav_title}>
                <span>Наші Послуги</span>
              </a>
            </li>
            <li className={s.nav_elem}>
              <a href="#" className={s.nav_title}>
                <span>Гарячі пропозиції</span>
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
            <li>
              <a href="#" className={s.nav_title}>
                <span>Партнерство</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className={s.contact}>
          <p className={s.nav_title}>
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
      <div className={s.arrow_scroll}>
        <ArrowUpIcon className={s.icon_arrow_scroll} />
      </div>
    </header>
  );
};

export default Header;
