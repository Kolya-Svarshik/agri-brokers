import cerealsPhotoWebp from '../../img/cereals.webp';
import cerealsPhotoJpg from '../../img/cereals.jpg';
import wheatPhotoWebp from '../../img/wheat.webp';
import wheatPhotoJpq from '../../img/wheat.jpg';


import { FaTelegramPlane } from 'react-icons/fa';

import s from './offers.module.scss';
import { CustomAnimateBox } from '../CustomAnimateBox/CustomAnimateBox';
import { CustomImagePicture } from '../CustomImagePicture/CustomImagePicture';
import { useTranslation } from 'react-i18next';

const Offers = () => {
  const { t } = useTranslation()
  return (
    <div className={s.bg_color}>
      <section className="container" id="offers">
        <div className={s.section}>
          <h2 className={s.offers_tetle}>{t('main.offers.title')}</h2>
          <ul className={s.cart}>
            <CustomAnimateBox classNameAnimate={s.cart_item} idAnimate="offers_purchase">
              <>
                <div className={s.cart_elem}>
                  <h3 className={s.elem_title}>{t('main.offers.cart.buy.title')}</h3>
                  <p className={s.elem_text}>
                    {t('main.offers.cart.buy.text.one')}
                  </p>
                  <p className={s.elem_text}>
                    {t('main.offers.cart.buy.text.two')}
                  </p>
                  <p className={s.elem_text}>{t('main.offers.cart.buy.text.three')}</p>
                  <a
                    href="https://t.me/I_buy_grain"
                    target="_blank"
                    without rel="noreferrer"
                    className={s.social_text}
                  >
                    <div className={s.icon_button}>
                      <FaTelegramPlane className={s.icon_telegram} />
                    </div>
                    <p>{t('main.offers.cart.buy.link.telegram.purchase')}</p>
                  </a>
                </div>
                <CustomImagePicture classNamePhoto={s.cart_photo} webp={cerealsPhotoWebp} photo={cerealsPhotoJpg} altPhoto={t('main.offers.cart.buy.photo_alt')} />
              </>
            </CustomAnimateBox>
            <CustomAnimateBox
              animateProps={"leftR"}
              classNameAnimate={s.cart_item} idAnimate="offers_purchase">
              <>
                <div className={s.cart_elem}>
                  <h3 className={s.elem_title}>{t('main.offers.cart.sale.title')}</h3>
                  <p className={s.elem_text}>
                    {t('main.offers.cart.sale.text.one')}
                  </p>
                  <p className={s.elem_text}>    {t('main.offers.cart.sale.text.two')}</p>
                  <a
                    href="https://t.me/agrosales_sale_grain"
                    target="_blank"
                    without rel="noreferrer"
                    className={s.social_text}
                  >
                    <div className={s.icon_button}>
                      <FaTelegramPlane className={s.icon_telegram} />
                    </div>
                    <p>{t('main.offers.cart.sale.link.telegram.sale')}</p>
                  </a>
                </div>
                <CustomImagePicture classNamePhoto={s.cart_photo} webp={wheatPhotoWebp} photo={wheatPhotoJpq} altPhoto={t('main.offers.cart.sale.photo_alt')} />
              </>
            </CustomAnimateBox>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Offers;
