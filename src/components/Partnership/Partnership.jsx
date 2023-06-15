import { Link } from 'react-scroll';

import people1PhotoWebp from '../../img/people1.webp';
import people1PhotoJpg from '../../img/people1.jpg';

import s from './partnership.module.scss';
import { CustomAnimateBox } from '../CustomAnimateBox/CustomAnimateBox';
import { CustomImagePicture } from '../CustomImagePicture/CustomImagePicture';
import { useTranslation } from 'react-i18next';

const Partnership = () => {
  const { t } = useTranslation()
  return (
    <section className="container" id="partnership">
      <div className={s.section}>
        <h2 className={s.partnership_tetle}>{t('main.partnership.title')}</h2>
        <ul className={s.cart}>
          <CustomAnimateBox classNameAnimate={s.cart_item}>
            <>
              <div className={s.cart_elem}>
                <p className={s.elem_text}>
                  {t('main.partnership.cart.partners.text.one')}
                </p>
                <p className={s.elem_text}>
                  {t('main.partnership.cart.partners.text.two')}
                </p>
                <span className={s.elem_span}>
                  {t('main.partnership.cart.partners.link.text.span')}
                </span>
                <Link
                  to="contact"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={s.elem_link}
                >
                  {t('main.partnership.cart.partners.link.text.link')}
                </Link>
              </div>
              <CustomImagePicture classNamePhoto={s.cart_photo} webp={people1PhotoWebp} photo={people1PhotoJpg} altPhoto={t('main.partnership.cart.partners.photo_alt')} />
            </>
          </CustomAnimateBox>
        </ul>
      </div>
    </section>
  );
};

export default Partnership;
