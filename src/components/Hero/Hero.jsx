import bgVideo from '../../media/IMG_1732.MOV';
import { ReactComponent as FacebookIcon } from '../../img/facebook-logo.svg';
import { ReactComponent as TelegramIcon } from '../../img/telegram-logo.svg';

import s from './hero.module.scss';

const Hero = () => {
  return (
    <div className={s.hero}>
      <section className={s.section}>
        <h1 className={s.hero_title}>Agri Brokers Ukraine</h1>
        <p className={s.hero_text}>
          Найкращі контракти з купівлі-продажу продукції сільського
          господарства.
        </p>
        <div className={s.hero_nav}>
          <a href="#" className={s.hero_button}>
            Про нас
          </a>
          <a href="#" className={s.hero_button}>
            Партнерство
          </a>
        </div>
        <ul className={s.link_social}>
          <li className={s.link_item}>
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
          </li>
          <li className={s.link_item}>
            <a
              href="https://t.me/agrosales_sale_grain"
              target="_blank"
              className={s.social_text}
            >
              <div className={s.icon_button}>
                <TelegramIcon className={s.icon_telegram} />
              </div>
              <p>Продаж зерна</p>
            </a>
          </li>
          <li className={s.link_item}>
            <a
              href="https://t.me/I_buy_grain"
              target="_blank"
              className={s.social_text}
            >
              <div className={s.icon_button}>
                <TelegramIcon className={s.icon_telegram} />
              </div>
              <p>Купівля зерна</p>
            </a>
          </li>
        </ul>
      </section>
      <div className={s.video}>
        <video autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
