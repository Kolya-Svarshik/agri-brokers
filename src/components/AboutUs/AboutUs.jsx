import photo from '../../img/IMG_1746.JPG';

import s from './aboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={s.bg_color}>
      <section className={s.section}>
        <h2 className={s.about_tetle}>Про нас</h2>
        <div className={s.cart}>
          <div className={s.cart_item}>
            <img src={photo} className={s.cart_photo}></img>
            <div className={s.cart_elem}>
              {/* <h3 className={s.elem_title}>Для виробників с/г продукції</h3> */}
              <p className={s.elem_text}>
                Agri Brokers Ukraine - це компанія, що спеціалізується на
                продажу зернових культур за вигідними цінами та наданні цінних
                рекомендацій фермерам та трейдерам. Ми пропонуємо комплексні
                послуги, починаючи від пошуку якісної продукції до укладання
                контрактів на купівлю-продаж зерна. Наша ефективна мережа та
                знання ринку допомагають з'єднувати виробників з потенційними
                покупцями, забезпечуючи швидкі угоди та надійні контракти.
              </p>
            </div>
          </div>
          <div className={s.cart_item}>
            <img src={photo} className={s.cart_photo}></img>
            <div className={s.cart_elem}>
              {/* <h3 className={s.elem_title}>Для переробників</h3> */}
              <p className={s.elem_text}>
                Співпраця з трейдерами, фермерами та переробниками є основою
                нашої діяльності. Agri Brokers Ukraine допомагає виробникам
                сільськогосподарської продукції ефективно реалізувати свої
                врожаї, як на внутрішньому ринку, так і за кордоном. Ми
                пропонуємо вигідні контракти на продаж кукурудзи, соняшнику,
                сої, ріпаку, соняшникового масла, пшениці та інших продуктів.
              </p>
            </div>
          </div>
          <div className={s.cart_item}>
            <img src={photo} className={s.cart_photo}></img>
            <div className={s.cart_elem}>
              {/* <h3 className={s.elem_title}>Для переробників</h3> */}
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
    </div>
  );
};

export default AboutUs;
