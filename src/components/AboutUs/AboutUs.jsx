import photo from '../../img/IMG_1746.JPG';

import s from './aboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={s.bg_color}>
      <section className="container" id="about_us">
        <div className={s.section}>
          <h2 className={s.about_tetle}>Про нас</h2>
          <ul className={s.cart}>
            <li className={s.cart_item}>
              <div className={s.cart_elem}>
                {/* <h3 className={s.elem_title}>Для виробників с/г продукції</h3> */}
                <p className={s.elem_text}>
                  Agri Brokers Ukraine - брокерська компанія, що допомагає
                  отримати найкращі контракти з купівлі-продажу продукції
                  сільського господарства як в Україні, так і за її межами. Ми
                  забезпечуємо комплексні послуги, укладаємо найкращі угоди,
                  допомагаючи збільшувати прибутковість Вашого бізнесу. Працюємо
                  з трейдерами, фермерами, переробниками та посередниками,
                  надаючи вигідні контракти. Наша головна мета - задоволений
                  клієнт! І наша команда експертів докладе максимум зусиль для
                  успішної реалізації Ваших запитів. Співпраця з Agri Brokers
                  Ukraine дарує Вам успіх!
                </p>
              </div>
              <img src={photo} className={s.cart_photo}></img>
            </li>
            <li className={s.cart_item}>
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
              <img src={photo} className={s.cart_photo}></img>
            </li>
            <li className={s.cart_item}>
              <div className={s.cart_elem}>
                {/* <h3 className={s.elem_title}>Для переробників</h3> */}
                <p className={s.elem_text}>
                  Наша команда експертів гарантує професіоналізм і прагне
                  досягти успіху у кожній угоді. Ми знаємо, як забезпечити
                  максимальну вигоду для наших клієнтів, забезпечуючи надійні
                  угоди та встановлюючи довгострокові партнерські відносини.
                  Звертайтесь до Agri Brokers Ukraine для ефективного продажу
                  зерна та отримання надійної підтримки у вашому
                  сільськогосподарському бізнесі.
                </p>
              </div>
              <img src={photo} className={s.cart_photo}></img>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
