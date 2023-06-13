import peoplePhoto from '../../img/people.jpeg';
import oilPhoto from '../../img/oil.jpeg';
import grainPhoto from '../../img/grain.jpg';

import s from './ourServices.module.scss';

const OurServices = () => {
  return (
    <section className="container" id="services">
      <div className={s.section}>
        <h2 className={s.services_tetle}>Наші Послуги</h2>
        <ul className={s.cart}>
          <li className={s.cart_item} id="services_manufacturers">
            <div className={s.cart_elem}>
              <h3 className={s.elem_title}>Для виробників с/г продукції</h3>
              <p className={s.elem_text}>
                Agri Brokers Ukraine допомагає фермерам вигідно продати свій
                урожай на найкращих для них умовах.
              </p>
              <p className={s.elem_text}>
                Наші експерти вивчають ринкові тенденції та допомагають укладати
                найвигідніші контракти.
              </p>
              <p className={s.elem_text}>
                Ми співпрацюємо з великою кількістю трейдингових компаній, що
                допомагає отримати найкращі ціни для наших клієнтів
                сільгоспвиробників та переробників, як на ринку України, так і
                за кордоном. Пропонуємо контракти на умовах FCA, CPT, FOB, DAP,
                CIF та інші.
              </p>
            </div>
            <img src={peoplePhoto} className={s.cart_photo}></img>
          </li>
          <li className={s.cart_item} id="services_processors">
            <div className={s.cart_elem}>
              <h3 className={s.elem_title}>Для переробників</h3>
              <p className={s.elem_text}>
                Agri Brokers Ukraine допомагає переробникам забезпечити себе
                сировиною та ефективно реалізувати продукти її переробки. Наша
                команда експертів допоможе укласти найкращі контракти на шріт
                соняшнику, сою, олію соняшникову, ріпакову, соєву та багато
                інших продуктів, забезпечуючи Вам оптимальні умови.
              </p>
            </div>
            <img src={oilPhoto} className={s.cart_photo}></img>
          </li>
          <li className={s.cart_item} id="services_traders">
            <div className={s.cart_elem}>
              <h3 className={s.elem_title}>Для трейдерів</h3>
              <p className={s.elem_text}>
                Співпраця з Agri Brokers Ukraine дає можливість зернотрейдерам
                отримувати необхідні обсяги зерна необхідної якості за
                прийнятними цінами та з необхідними строками поставки.
                Співпрацюючи з великою кількістю фермерів з усієї території
                України, ми допоможемо Вам укласти найкращі контракти, на
                купівлю кукурудзи, пшениці, ячменю, сої, ріпаку та інших
                культур, а також продуктів їх переробки за оптимальними умовами.
              </p>
            </div>
            <img src={grainPhoto} className={s.cart_photo}></img>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
