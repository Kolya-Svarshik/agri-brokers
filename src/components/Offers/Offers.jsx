import cerealsPhotoWebp from '../../img/cereals.webp';
import cerealsPhotoJpg from '../../img/cereals.jpg';
import wheatPhotoWebp from '../../img/wheat.webp';
import wheatPhotoJpq from '../../img/wheat.jpg';


import { FaTelegramPlane } from 'react-icons/fa';

import s from './offers.module.scss';
import { CustomAnimateBox } from '../CustomAnimateBox/CustomAnimateBox';
import { CustomImagePicture } from '../CustomImagePicture/CustomImagePicture';

const Offers = () => {
  return (
    <div className={s.bg_color}>
      <section className="container" id="offers">
        <div className={s.section}>
          <h2 className={s.offers_tetle}>Ми пропонуємо</h2>
          <ul className={s.cart}>
            <CustomAnimateBox classNameAnimate={s.cart_item} idAnimate="offers_purchase">
              <>
                <div className={s.cart_elem}>
                  <h3 className={s.elem_title}>Купуємо сьогодні:</h3>
                  <p className={s.elem_text}>
                    Якщо Ви фермер, переробник чи трейдер с/г продукції, ви можете продавати свою продукцію за вигідними цінами разом з нами. Відвідайте наш Telegram-канал, де Ви знайдете актуальні пропозиції по закупівлі від наших партнерів та наші менеджери проконсультують Вас щодо деталей та умов контрактів.
                  </p>
                  <p className={s.elem_text}>
                    Якщо Ви не знаходите необхідної пропозиції у нас на каналі, зверніться до нас і ми вигідно продамо вашу продукцію.
                  </p>
                  <p className={s.elem_text}>Переходьте за посиланням:</p>
                  <a
                    href="https://t.me/I_buy_grain"
                    target="_blank"
                    without rel="noreferrer"
                    className={s.social_text}
                  >
                    <div className={s.icon_button}>
                      <FaTelegramPlane className={s.icon_telegram} />
                    </div>
                    <p>Купівля зерна</p>
                  </a>
                </div>
                <CustomImagePicture classNamePhoto={s.cart_photo} webp={cerealsPhotoWebp} photo={cerealsPhotoJpg} altPhoto='Крупи' />
              </>
            </CustomAnimateBox>
            <CustomAnimateBox
              animateProps={"leftR"}
              classNameAnimate={s.cart_item} idAnimate="offers_purchase">
              <>
                <div className={s.cart_elem}>
                  <h3 className={s.elem_title}>Сьогодні у продажу:</h3>
                  <p className={s.elem_text}>
                    Ознайомтесь з актуальними пропозиціями від наших клієнтів с/г
                    виробників та переробників щодо продажу продукції сільського
                    господарства на нашому Telegram-каналі. Там Ви знайдете
                    актуальну інформацію про наявність, обсяги, якість та умови
                    продажу. Наші досвідчені менеджери з радістю нададуть Вам
                    консультацію та відповіді на всі Ваші запитання. Якщо не
                    знаходите потрібної пропозиції, звʼяжіться з нашим менеджером та
                    розмістіть необхідне замовлення і ми допоможемо його
                    забезпечити.
                  </p>
                  <p className={s.elem_text}>Пропозиції за посиланням:</p>
                  <a
                    href="https://t.me/agrosales_sale_grain"
                    target="_blank"
                    without rel="noreferrer"
                    className={s.social_text}
                  >
                    <div className={s.icon_button}>
                      <FaTelegramPlane className={s.icon_telegram} />
                    </div>
                    <p>Продаж зерна</p>
                  </a>
                </div>
                <CustomImagePicture classNamePhoto={s.cart_photo} webp={wheatPhotoWebp} photo={wheatPhotoJpq} altPhoto='Пшениця' />
              </>
            </CustomAnimateBox>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Offers;
