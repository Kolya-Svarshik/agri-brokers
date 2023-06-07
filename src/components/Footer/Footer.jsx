import logoImg from '../../img/IMG_8766.PNG';
import { ReactComponent as FacebookIcon } from '../../img/facebook-logo.svg';
import { ReactComponent as HeadphoneIcon } from '../../img/headphone.svg';
import { ReactComponent as PhoneIcon } from '../../img/phone.svg';
import { ReactComponent as MailIcon } from '../../img/mail.svg';
import { ReactComponent as GeoIcon } from '../../img/locatio.svg';

import s from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.section}>
        <div className={s.logo_bloc}>
          <a href="#">
            <img
              src={logoImg}
              width="200px"
              alt="Logo"
              className={s.logo}
            ></img>
          </a>
          <p className={s.logo_text}>
            Agri Brokers Ukraine - це брокерська компанія, яка спеціалізується
            на допомозі фермерам у продажу зернових культур за вигідними цінами.
            Маючи великий досвід та знання галузі, ми надаємо цінні рекомендації
            та підтримку як фермерам, так і трейдерам при купівлі-продажу різних
            зернових товарів.
          </p>
          <div className={s.social}>
            <p className={s.social_tetle}>СЛІДКУЙТЕ ЗА НАМИ</p>
            <div className={s.social_bloc}>
              <a
                href="https://www.facebook.com/profile.php?id=100093057441973"
                target="_blank"
                className={s.social_text}
              >
                <div className={s.icon_button}>
                  <FacebookIcon className={s.icon_facebook} />
                </div>
                <p>Наш Facebook</p>
              </a>
            </div>
          </div>
        </div>
        <nav className={s.nav}>
          <p className={s.nav_title}>МЕНЮ САЙТУ</p>
          <ul className={s.nav_list}>
            <li className={s.nav_item}>
              <a href="#" className={s.nav_text}>
                <span>Про нас</span>
              </a>
            </li>
            <li className={s.nav_item}>
              <a href="#" className={s.nav_text}>
                <span>Наші Послуги</span>
              </a>
            </li>
            <li className={s.nav_item}>
              <a href="#" className={s.nav_text}>
                <span>Гарячі пропозиції</span>
              </a>
            </li>
            <li className={s.nav_item}>
              <a href="#" className={s.nav_text}>
                <span>Партнерство</span>
              </a>
            </li>
          </ul>
          <a className={s.nav_button}>
            <HeadphoneIcon
              className={s.icon_headphone}
              width={20}
              height={20}
            />
            <span>Зворотній зв'язок</span>
          </a>
        </nav>
        <div className={s.contact}>
          <p className={s.contact_title}>Контакти</p>

          <ul className={s.contact_list}>
            <li className={s.contact_item}>
              <p className={s.contact_text}>Телефони:</p>
              <a href="tel:+380675211100" className={s.contact_link}>
                <PhoneIcon className={s.icon_tel} />
                <span>+38 (067) 521 11 00</span>
              </a>
              <a href="tel:+380675202508" className={s.contact_link}>
                <PhoneIcon className={s.icon_tel} />
                <span>+38 (067) 520 25 08</span>
              </a>
            </li>
            <li className={s.contact_item}>
              <p className={s.contact_text}>Електронна скринька:</p>
              <a href="mailto:y.otsabryk@gmail.com" className={s.contact_link}>
                <MailIcon className={s.icon_mail} />
                <span>y.otsabryk@gmail.com</span>
              </a>
            </li>
            <li className={s.contact_item}>
              <p className={s.contact_text}>Адреса офісу:</p>
              <a
                href="https://goo.gl/maps/DXx6PMhRGwQzJaxa6"
                target="_blank"
                className={s.contact_link}
              >
                <GeoIcon className={s.icon_geo} />
                <span>вулиця Академіка Вільямса, 2б</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.copy}>
        <p className={s.copy_text}>&copy; 2023 Всі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
