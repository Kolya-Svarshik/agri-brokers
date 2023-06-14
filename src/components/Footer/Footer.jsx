import Copy from '../Copy/Copy';

import { Link, animateScroll as scroll } from 'react-scroll';

import logoImgPng from '../../img/logo.png';
import logoImgWebp from '../../img/logo.webp';

import s from './footer.module.scss';
import { Social } from './DropDowns/Social';
import { NavigationFooter } from './DropDowns/NavigationFooter';
import { ContactFooter } from './DropDowns/ContactFooter';
import { CustomImagePicture } from '../CustomImagePicture/CustomImagePicture';

const Footer = () => {

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.section}>
          <div className={s.logo_bloc}>
            <div className={s.logo_sheave}>
              <Link onClick={() => scroll.scrollToTop()} to=".">
                <CustomImagePicture classNamePhoto={s.logo} webp={logoImgWebp} photo={logoImgPng} altPhoto='Логотип Agri Brokers Ukraine' width="200px" />
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
          <ContactFooter />
        </div>
        <Copy />
      </div>
    </footer>
  );
};

export default Footer;
