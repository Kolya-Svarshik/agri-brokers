import { useTranslation } from 'react-i18next';

import { CustomImagePicture } from '../CustomImagePicture/CustomImagePicture';
import { CustomAnimateBox } from '../CustomAnimateBox/CustomAnimateBox';

import peoplePhoto2Webp from '../../img/people2.webp';
import peoplePhoto2Jpg from '../../img/people2.jpg';

import s from './aboutUs.module.scss';

const AboutUs = () => {
  const { t } = useTranslation()
  return (
    <div className={s.bg_color}>
      <section className="container" id="about_us">
        <div className={s.section}>
          <h2 className={s.about_tetle}>{t('main.about_us.title')}</h2>
          <ul className={s.cart}>
            <CustomAnimateBox classNameAnimate={s.cart_item}>
              <>
                <div className={s.cart_elem}>
                  <p className={s.elem_text}>
                    {t('main.about_us.cart.about_us.text')}
                  </p>
                </div>
                <CustomImagePicture classNamePhoto={s.cart_photo} webp={peoplePhoto2Webp} photo={peoplePhoto2Jpg} altPhoto={t('main.about_us.cart.about_us.photo_alt')} />
              </>
            </CustomAnimateBox>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
