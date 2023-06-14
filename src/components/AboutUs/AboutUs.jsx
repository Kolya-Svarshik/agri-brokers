import peoplePhoto2Webp from '../../img/people2.webp';
import peoplePhoto2Jpg from '../../img/people2.jpg';
import { CustomAnimateBox } from '../CustomAnimateBox/CustomAnimateBox';

import s from './aboutUs.module.scss';
import { CustomImagePicture } from '../CustomImagePicture/CustomImagePicture';

const AboutUs = () => {
  return (
    <div className={s.bg_color}>
      <section className="container" id="about_us">
        <div className={s.section}>
          <h2 className={s.about_tetle}>Про нас</h2>
          <ul className={s.cart}>
            <CustomAnimateBox classNameAnimate={s.cart_item}>
              <>
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
                <CustomImagePicture classNamePhoto={s.cart_photo} webp={peoplePhoto2Webp} photo={peoplePhoto2Jpg} altPhoto='Люди сидять та спілкуються в конферанс залі' />
              </>
            </CustomAnimateBox>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
