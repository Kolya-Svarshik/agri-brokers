import photo from '../../img/IMG_1746.JPG';

import s from './partnership.module.scss';

const Partnership = ({ onModal }) => {
  return (
    <div className={s.bg_color}>
      <section className="container" id="partnership">
        <div className={s.section}>
          <h2 className={s.partnership_tetle}>Партнерство</h2>
          <div className={s.cart}>
            <div className={s.cart_item}>
              <div className={s.cart_elem}>
                <h3 className={s.elem_title}>Для виробників с/г продукції</h3>
                <p className={s.elem_text}>
                  Agri Brokers Ukraine - це компанія, що спеціалізується на
                  продажу зернових культур за вигідними цінами та наданні цінних
                  рекомендацій фермерам та трейдерам. Ми пропонуємо комплексні
                  послуги, починаючи від пошуку якісної продукції до укладання
                  контрактів на купівлю-продаж зерна. Наша ефективна мережа та
                  знання ринку допомагають з'єднувати виробників з потенційними
                  покупцями, забезпечуючи швидкі угоди та надійні контракти.
                </p>
                <button
                  type="button"
                  name="modal"
                  onClick={onModal}
                  className={s.elem_link}
                >
                  Отримати консультацію
                </button>
              </div>
              <img src={photo} className={s.cart_photo}></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
