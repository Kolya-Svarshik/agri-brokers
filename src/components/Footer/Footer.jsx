import Copy from './Copy/Copy';

import { Link, animateScroll as scroll } from 'react-scroll';

import logoImgPng from '../../img/logo.png';
import logoImgWebp from '../../img/logo.webp';

import s from './footer.module.scss';
import { Social } from './DropDowns/Social';
import { NavigationFooter } from './DropDowns/NavigationFooter';
import { ContactFooter } from './DropDowns/ContactFooter';
import { CustomImagePicture } from '../CustomImagePicture/CustomImagePicture';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.section}>
          <div className={s.logo_bloc}>
            <div className={s.logo_sheave}>
              <Link onClick={() => scroll.scrollToTop()} to=".">
                <CustomImagePicture classNamePhoto={s.logo} webp={logoImgWebp} photo={logoImgPng} altPhoto={t('footer.logo.photo_alt')} width="200px" />
              </Link>
              <p className={s.logo_text}>
                {t('footer.logo.text')}
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
