import { Link, animateScroll as scroll } from 'react-scroll';

import photo from '../../img/people1.jpg';

import s from './partnership.module.scss';

const Partnership = ({ onModal }) => {
  return (
    <div className={s.bg_color}>
      <section className="container" id="partnership">
        <div className={s.section}>
          <h2 className={s.partnership_tetle}>Партнерам</h2>
          <div className={s.cart}>
            <div className={s.cart_item}>
              <div className={s.cart_elem}>
                <p className={s.elem_text}>
                  Agri Brokers Ukraine відкрита для партнерства для всіх
                  компаній як з України, так і з-за кордону, які зацікавлені в
                  гарних угодах з купівлі продажу продукції
                  сільського-господарства. Співпраця з нами допомагає вам
                  досягати успіху, розширюючи ваші можливості в торгівлі
                  агропродукцією, включаючи угоди з країнами ЄС та іншими
                  регіонами земної кулі.
                </p>
                <p className={s.elem_text}>
                  Agri Brokers Ukraine допоможе фермерам, трейдерам,
                  переробникам, брокерським та іншим компаніям досягнути своїх
                  цілей на внутрішньому та міжнародному ринках.
                </p>

                <span className={s.elem_span}>
                  Щодо партнерства пишіть на пошту, в месенджери або телефонуйте
                  -
                </span>
                <Link
                  to="contact"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={s.elem_link}
                >
                  Контакти
                </Link>
              </div>
              <img src={photo} className={s.cart_photo} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
