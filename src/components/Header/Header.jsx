import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, animateScroll as scroll } from 'react-scroll';

import OutsideClickHandler from '../../hooks/OutsideClickHandler';
import { useIsActive } from '../../hooks/useIsActive';
import { CustomImagePicture } from '../CustomImagePicture/CustomImagePicture';

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaFacebookF } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import logoImgWebp from '../../img/logo.webp';
import logoImgPng from '../../img/logo.png';

import s from './header.module.scss';

const Header = () => {
  const { onModal, isActiveModal } = useIsActive();
  const { t, i18n } = useTranslation()

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };



  const locales = {
    en: { title: 'Eng' },
    uk: { title: 'Ukr' }
  }

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.section}>
          <Link onClick={() => scroll.scrollToTop()} to="." href="#">
            <CustomImagePicture classNamePhoto={s.logo} webp={logoImgWebp} photo={logoImgPng} altPhoto={t('header.logo.photo_alt')} />
          </Link>
          <button
            type="button"
            name="menu"
            aria-label={t('header.nav.menu.button_alt')}
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
                <p className={s.nav_text}>{t('header.nav.menu.text')}</p>
                <ul className={s.nav_list}>
                  <li className={s.nav_item}>
                    <Link
                      to="about_us"
                      href="#about_us"
                      smooth={true}
                      offset={-100}
                      duration={500}
                      name="item_menu"
                      onClick={onModal}
                      className={s.nav_title}
                    >
                      <span>{t('header.nav.menu.list.about_us')}</span>
                    </Link>
                  </li>
                  <li className={`${s.nav_elem} ${s.nav_item}`}>
                    <Link
                      to="services"
                      href="#services"
                      smooth={true}
                      offset={-100}
                      duration={500}
                      name="item_menu"
                      onClick={onModal}
                      className={s.nav_title}
                    >
                      <span>{t('header.nav.menu.list.services.text')}</span>
                      <IoIosArrowDown className={s.icon_arrow} />
                    </Link>
                    <ul className={s.elem_list}>
                      <li className={s.elem_item}>
                        <Link
                          to="services_manufacturers"
                          href="#services_manufacturers"
                          smooth={true}
                          offset={-100}
                          duration={500}
                          className={s.elem_link}
                        >
                          <span>{t('header.nav.menu.list.services.manufacturers')}</span>
                        </Link>
                      </li>
                      <li className={s.elem_item}>
                        <Link
                          to="services_processors"
                          href="#services_processors"
                          smooth={true}
                          offset={-100}
                          duration={500}
                          className={s.elem_link}
                        >
                          <span>{t('header.nav.menu.list.services.processors')}</span>
                        </Link>
                      </li>
                      <li className={s.elem_item}>
                        <Link
                          to="services_traders"
                          href="#services_traders"
                          smooth={true}
                          offset={-100}
                          duration={500}
                          className={s.elem_link}
                        >
                          <span>{t('header.nav.menu.list.services.traders')}</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`${s.nav_elem} ${s.nav_item}`}>
                    <Link
                      to="offers"
                      href="#offers"
                      smooth={true}
                      offset={-100}
                      duration={500}
                      name="item_menu"
                      onClick={onModal}
                      className={s.nav_title}
                    >
                      <span>{t('header.nav.menu.list.offers.text')}</span>
                      <IoIosArrowDown className={s.icon_arrow} />
                    </Link>
                    <ul className={`${s.elem_list} ${s.elem_list_two}`}>
                      <li className={s.elem_item}>
                        <Link
                          to="offers_purchase"
                          href="#offers_purchase"
                          smooth={true}
                          offset={-100}
                          duration={500}
                          className={s.elem_link}
                        >
                          <span>{t('header.nav.menu.list.offers.purchase')}</span>
                        </Link>
                      </li>
                      <li className={s.elem_item}>
                        <Link
                          to="offers_sale"
                          href="#offers_sale"
                          smooth={true}
                          offset={-100}
                          duration={500}
                          className={s.elem_link}
                        >
                          <span>{t('header.nav.menu.list.offers.sale')}</span>
                        </Link>
                      </li>

                    </ul>
                  </li>
                  <li className={s.nav_item}>
                    <Link
                      to="partnership"
                      href="#partnership"
                      smooth={true}
                      offset={-100}
                      duration={500}
                      name="item_menu"
                      onClick={onModal}
                      className={s.nav_title}
                    >
                      <span>{t('header.nav.menu.list.partnership')}</span>
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
                      aria-label={t('header.nav.control.button.facebook')}
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
                      {t('header.nav.control.button.exit')}
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
                <span>{t("header.contact.title")}</span>
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

          <ul className={s.language_list}>
            {Object.keys(locales).map((locale) => (
              <li key={locale} className={s.language_item}>
                <button
                  className={i18n.resolvedLanguage === locale ?
                    `${s.language_button} ${s.activebutton}` :
                    `${s.language_button} ${s.inActivebutton}`}
                  type='submit' onClick={() => i18n.changeLanguage(locale)}>
                  {locales[locale].title}
                </button>
              </li>))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
