import logoImg from './IMG_8766.PNG';

import s from './header.module.scss';

const HeaderNav = () => {
  return (
    <header className={s.header}>
      <div className={s.section}>
        <a href="#">
          <img src={logoImg} width="200px" alt="Logo"></img>
        </a>
        <nav className={s.nav}>
          <ul className={s.nav_list}>
            <li>
              <a href="#" className={s.nav_title}>
                Про нас
              </a>
            </li>
            <li>
              <a href="#" className={s.nav_title}>
                Наші Послуги
              </a>
            </li>
            <li>
              <a href="#" className={s.nav_title}>
                Гарячі пропозиції
              </a>
              {/* <a href="https://t.me/agrosales_sale_grain" className={s.nav_link}>
              гарячі пропозиції продаж
            </a>
            <a href="https://t.me/I_buy_grain" className={s.nav_link}>
              гарячі пропозиції купівля
            </a> */}
            </li>
            <li>
              <a href="#" className={s.nav_title}>
                Партнерство
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <p className={s.nav_title}>Контакти</p>
          {/* <a href="tel:+380675211100" className={s.nav_link}>
            +38 (067) 521 11 00
          </a>
          <a href="tel:+380675202508" className={s.nav_link}>
            +38 (067) 520 25 08
          </a>
          <a href="mailto:y.otsabryk@gmail.com" className={s.nav_link}>
            y.otsabryk@gmail.com
          </a> */}
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
