import logoImg from '../../img/IMG_8766.PNG';

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
            <li className={s.nav_elem}>
              <a href="#" className={s.nav_title}>
                Гарячі пропозиції
              </a>
              <div className={s.elem_last}>
                <a href="#" className={s.elem_link}>
                  Гарячі пропозиції продаж
                </a>
                <br></br>
                <a href="#" className={s.elem_link}>
                  Гарячі пропозиції купівля
                </a>
              </div>
            </li>
            <li>
              <a href="#" className={s.nav_title}>
                Партнерство
              </a>
            </li>
          </ul>
        </nav>
        <div className={s.contact}>
          <p className={s.nav_title}>Контакти</p>
          <div className={s.contact_list}>
            <a href="tel:+380675211100" className={s.elem_link}>
              +38 (067) 521 11 00
            </a>
            <a href="tel:+380675202508" className={s.elem_link}>
              +38 (067) 520 25 08
            </a>
            <a href="mailto:y.otsabryk@gmail.com" className={s.elem_link}>
              y.otsabryk@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
