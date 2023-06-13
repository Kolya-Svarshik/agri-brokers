import Copy from '../Copy/Copy';

import { Link, animateScroll as scroll } from 'react-scroll';

import logoImg from '../../img/logo.png';
// import { FaFacebookF } from 'react-icons/fa';
// import { FiPhoneCall } from 'react-icons/fi';
// import { AiOutlineMail } from 'react-icons/ai';
// import { MdLocationPin } from 'react-icons/md';
// import { IoIosArrowDown } from 'react-icons/io';

// import { useIsActive } from '../../hooks/useIsActive';

import s from './footer.module.scss';
// import { useState } from 'react';
import { Social } from './DropDowns/Social';
import { NavigationFooter } from './DropDowns/NavigationFooter';
import { ContactFooter } from './DropDowns/ContactFooter';

const Footer = () => {
  // const { onModal, isActiveModal, setIsActiveModal } = useIsActive();

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.section}>
          <div className={s.logo_bloc}>
            <div className={s.logo_sheave}>
              <Link onClick={() => scroll.scrollToTop()} to=".">
                <img
                  src={logoImg}
                  width="200px"
                  alt="Logo"
                  className={s.logo}
                ></img>
              </Link>
              <p className={s.logo_text}>
                Agri Brokers Ukraine – це надійний партнер, який розуміє
                цінність бізнесу та допомагає отримати найкращі контракти з
                купівлі-продажу продукції сільського господарства як в Україні,
                так і за її межами.
              </p>
            </div>

            <Social />
          </div>

          <NavigationFooter />
          {/* <div className={s.contact} id="contact">
            <h2 onClick={onModal} id="contact" className={s.contact_title}>
              Контакти
            </h2>
            <IoIosArrowDown
              className={
                !isActiveModal
                  ? `${s.icon_arrow} ${s.icon_arrow_activev}`
                  : `${s.icon_arrow}`
              }
            />
            <ul
              className={
                !isActiveModal
                  ? `${s.contact_list} ${s.activeMobile}`
                  : `${s.contact_list} ${s.inActiveMobile}`
              }
            >
              <li className={s.contact_item}>
                <p className={s.contact_text}>Телефони:</p>
                <a href="tel:+380675211100" className={s.contact_link}>
                  <FiPhoneCall className={s.icon_tel} />
                  <span>+38 (067) 521 11 00</span>
                </a>
                <a href="tel:+380675202508" className={s.contact_link}>
                  <FiPhoneCall className={s.icon_tel} />
                  <span>+38 (067) 520 25 08</span>
                </a>
              </li>
              <li className={s.contact_item}>
                <p className={s.contact_text}>Електронна скринька:</p>
                <a
                  href="mailto:y.otsabryk@gmail.com"
                  className={s.contact_link}
                >
                  <AiOutlineMail className={s.icon_mail} />
                  <span>y.otsabryk@gmail.com</span>
                </a>
              </li>
              <li className={s.contact_item}>
                <p className={s.contact_text}>Адреса офісу:</p>
                <a
                  href="https://goo.gl/maps/DXx6PMhRGwQzJaxa6"
                  target="_blank"
                  className={s.contact_link}
                >
                  <MdLocationPin className={s.icon_geo} />
                  <span>вулиця Академіка Вільямса, 2б</span>
                </a>
              </li>
            </ul>
          </div> */}
          <ContactFooter />
        </div>
        <Copy />
      </div>
    </footer>
  );
};

export default Footer;
