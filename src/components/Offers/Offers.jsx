import { CustomAnimateBox } from '../CustomAnimateBox/CustomAnimateBox';
import { CustomImagePicture } from '../CustomImagePicture/CustomImagePicture';
import { useTranslation } from 'react-i18next';

import { FaTelegramPlane } from 'react-icons/fa';

import cerealsPhotoWebp2x from '../../img/cereals.2x.webp';
import cerealsPhotoWebp from '../../img/cereals.webp';
import cerealsPhotoJpg from '../../img/cereals.jpg';
import wheatPhotoWebp from '../../img/wheat.webp';
import wheatPhotoJpq from '../../img/wheat.jpg';

import s from './offers.module.scss';

const Offers = () => {
  const { t } = useTranslation()
  return (
    <div className={s.bg_color}>
      <section className="container" id="offers">
        <div className={s.section}>
          <h2 className={s.offers_title}>{t('main.offers.title')}</h2>
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
                    without="Link Telegram"
                    rel="noreferrer"
                    className={s.social_text}
                  >
                    <div className={s.icon_button}>
                      <FaTelegramPlane className={s.icon_telegram} />
                    </div>
                    <strong>{t('main.offers.cart.buy.link.telegram.purchase')}</strong>
                  </a>
                </div>
                <CustomImagePicture classNamePhoto={s.cart_photo} webp={cerealsPhotoWebp} webp2x={cerealsPhotoWebp2x} photo={cerealsPhotoJpg} altPhoto={t('main.offers.cart.buy.photo_alt')} />
              </>
            </CustomAnimateBox>
            <CustomAnimateBox
              animateProps={"leftR"}
              classNameAnimate={s.cart_item} idAnimate="offers_sale">
              <>
                <div className={s.cart_elem}>
                  <h3 className={s.elem_title}>{t('main.offers.cart.sale.title')}</h3>
                  <p className={s.elem_text}>
                    {t('main.offers.cart.sale.text.one')}
                  </p>
                  <p className={s.elem_text}>{t('main.offers.cart.sale.text.two')}</p>
                  <a
                    href="https://t.me/agrosales_sale_grain"
                    target="_blank"
                    without="Link Telegram"
                    rel="noreferrer"
                    className={s.social_text}
                  >
                    <div className={s.icon_button}>
                      <FaTelegramPlane className={s.icon_telegram} />
                    </div>
                    <strong>{t('main.offers.cart.sale.link.telegram.sale')}</strong>
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
