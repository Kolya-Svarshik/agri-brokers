import photo from '../../img/people1.jpg';
import peoplePhoto2 from '../../img/people2.jpg';

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
              <img src={peoplePhoto2} className={s.cart_photo} alt="" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
