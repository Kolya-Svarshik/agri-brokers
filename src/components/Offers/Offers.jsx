import photo from '../../img/IMG_1746.JPG';
import { ReactComponent as TelegramIcon } from '../../img/telegram-logo.svg';

import s from './offers.module.scss';

const Offers = () => {
  return (
    <section className={s.section}>
      <h2 className={s.offers_tetle}>Ми пропонуємо</h2>
      <div className={s.cart}>
        <div className={s.cart_item}>
          <img src={photo} className={s.cart_photo}></img>
          <div className={s.cart_elem}>
            <h3 className={s.elem_title}>Для виробників с/г продукції</h3>
            <p className={s.elem_text}>
              Agri Brokers Ukraine - це компанія, що спеціалізується на продажу
              зернових культур за вигідними цінами та наданні цінних
              рекомендацій фермерам та трейдерам. Ми пропонуємо комплексні
              послуги, починаючи від пошуку якісної продукції до укладання
              контрактів на купівлю-продаж зерна. Наша ефективна мережа та
              знання ринку допомагають з'єднувати виробників з потенційними
              покупцями, забезпечуючи швидкі угоди та надійні контракти.
            </p>
            <a
              href="https://t.me/agrosales_sale_grain"
              target="_blank"
              className={s.social_text}
            >
              <div className={s.icon_button}>
                <TelegramIcon className={s.icon_telegram} />
              </div>
              <p>Продаж зерна</p>
            </a>
          </div>
        </div>
        <div className={s.cart_item}>
          <img src={photo} className={s.cart_photo}></img>
          <div className={s.cart_elem}>
            <h3 className={s.elem_title}>Для переробників</h3>
            <p className={s.elem_text}>
              Співпраця з трейдерами, фермерами та переробниками є основою нашої
              діяльності. Agri Brokers Ukraine допомагає виробникам
              сільськогосподарської продукції ефективно реалізувати свої врожаї,
              як на внутрішньому ринку, так і за кордоном. Ми пропонуємо вигідні
              контракти на продаж кукурудзи, соняшнику, сої, ріпаку,
              соняшникового масла, пшениці та інших продуктів.
            </p>
            <a
              href="https://t.me/I_buy_grain"
              target="_blank"
              className={s.social_text}
            >
              <div className={s.icon_button}>
                <TelegramIcon className={s.icon_telegram} />
              </div>
              <p>Купівля зерна</p>
            </a>
          </div>
        </div>
        <div className={s.cart_item}>
          <img src={photo} className={s.cart_photo}></img>
          <div className={s.cart_elem}>
            <h3 className={s.elem_title}>Для переробників</h3>
            <p className={s.elem_text}>
              Наша команда експертів гарантує професіоналізм і прагне досягти
              успіху у кожній угоді. Ми знаємо, як забезпечити максимальну
              вигоду для наших клієнтів, забезпечуючи надійні угоди та
              встановлюючи довгострокові партнерські відносини. Звертайтесь до
              Agri Brokers Ukraine для ефективного продажу зерна та отримання
              надійної підтримки у вашому сільськогосподарському бізнесі.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
