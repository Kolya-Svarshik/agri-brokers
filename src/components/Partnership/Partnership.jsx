import { Link } from 'react-scroll';

import people1PhotoWebp from '../../img/people1.webp';
import people1PhotoJpg from '../../img/people1.jpg';

import s from './partnership.module.scss';
import { CustomAnimateBox } from '../CustomAnimateBox/CustomAnimateBox';
import { CustomImagePicture } from '../CustomImagePicture/CustomImagePicture';

const Partnership = () => {
  return (
    <section className="container" id="partnership">
      <div className={s.section}>
        <h2 className={s.partnership_tetle}>Партнерам</h2>
        <ul className={s.cart}>
          <CustomAnimateBox classNameAnimate={s.cart_item}>
            <>
              <div className={s.cart_elem}>
                <p className={s.elem_text}>
                  Agri Brokers Ukraine відкрита для партнерства для всіх компаній як з України, так і з-за кордону, які зацікавлені в гарних угодах з купівлі продажу продукції сільського-господарства. Співпраця з нами допомагає вам досягати успіху, розширюючи ваші можливості в торгівлі агропродукцією, включаючи угоди з країнами ЄС та по всьому світу.
                </p>
                <p className={s.elem_text}>
                  Agri Brokers Ukraine допоможе фермерам, трейдерам, переробникам, брокерським та іншим компаніям досягнути своїх цілей на внутрішньому та міжнародному ринках.
                </p>
                <span className={s.elem_span}>
                  Щодо партнерства пишіть на пошту, в месенджери або телефонуйте -
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
              <CustomImagePicture classNamePhoto={s.cart_photo} webp={people1PhotoWebp} photo={people1PhotoJpg} altPhoto='Команда людей для підняття командного духу в коли кладуть руки на руки' />
            </>
          </CustomAnimateBox>
        </ul>
      </div>
    </section>
  );
};

export default Partnership;
