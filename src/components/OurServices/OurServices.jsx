import peoplePhotoWebp from '../../img/people.webp';
import peoplePhotoJpeg from '../../img/people.jpg';
import oilPhotoWebp from '../../img/oil.webp';
import oilPhotoJpg from '../../img/oil.jpg';
import grainPhotoWebp from '../../img/grain.webp';
import grainPhotoJpg from '../../img/grain.jpg';


import s from './ourServices.module.scss';
import { CustomAnimateBox } from "../CustomAnimateBox/CustomAnimateBox";
import { CustomImagePicture } from '../CustomImagePicture/CustomImagePicture';
import { useTranslation } from 'react-i18next';

const OurServices = () => {
  const { t } = useTranslation()
  return (
    <section className="container" id="services">
      <div className={s.section}>
        <h2 className={s.services_tetle}>{t('main.our_services.title')}</h2>
        <ul className={s.cart}>
          <CustomAnimateBox
            classNameAnimate={s.cart_item}
            idAnimate={"services_manufacturers"}>
            <>
              <div className={s.cart_elem}>
                <h3 className={s.elem_title}>{t('main.our_services.cart.manufacturers.title')}</h3>
                <p className={s.elem_text}>
                  {t('main.our_services.cart.manufacturers.text.one')}
                </p>
                <p className={s.elem_text}>
                  {t('main.our_services.cart.manufacturers.text.two')}
                </p>
                <p className={s.elem_text}>
                  {t('main.our_services.cart.manufacturers.text.three')}
                </p>
              </div>
              <CustomImagePicture classNamePhoto={s.cart_photo} webp={peoplePhotoWebp} photo={peoplePhotoJpeg} altPhoto={t('main.our_services.cart.manufacturers.photo_alt')} />
            </>
          </CustomAnimateBox>
          <CustomAnimateBox
            animateProps={"leftR"}
            classNameAnimate={s.cart_item} idAnimate="services_processors">
            <>
              <div className={s.cart_elem}>
                <h3 className={s.elem_title}>{t('main.our_services.cart.processors.title')}</h3>
                <p className={s.elem_text}>
                  {t('main.our_services.cart.processors.text')}
                </p>
              </div>
              <CustomImagePicture classNamePhoto={s.cart_photo} webp={oilPhotoWebp} photo={oilPhotoJpg} altPhoto={t('main.our_services.cart.processors.photo_alt')} />
            </>
          </CustomAnimateBox>
          <CustomAnimateBox
            classNameAnimate={s.cart_item} idAnimate="services_traders">
            <>
              <div className={s.cart_elem}>
                <h3 className={s.elem_title}>{t('main.our_services.cart.traders.title')}</h3>
                <p className={s.elem_text}>
                  {t('main.our_services.cart.traders.text')}
                </p>
              </div>
              <CustomImagePicture classNamePhoto={s.cart_photo} webp={grainPhotoWebp} photo={grainPhotoJpg} altPhoto={t('main.our_services.cart.traders.photo_alt')} />
            </>
          </CustomAnimateBox>
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
