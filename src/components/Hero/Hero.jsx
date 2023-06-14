import { Link } from 'react-scroll';

import bgVideo from '../../media/hero_video.mp4';

import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa';

import s from './hero.module.scss';

const Hero = () => {
  return (
    <div className={s.hero}>
      <section className="container" id="hero">
        <div className={s.section}>
          <h1 className={s.hero_title}>Agri Brokers Ukraine</h1>
          <p className={s.hero_text}>
            Найкращі контракти з купівлі-продажу продукції сільського
            господарства.
          </p>
          <div className={s.hero_nav}>
            <Link
              to="about_us"
              smooth={true}
              offset={-100}
              duration={500}
              className={s.hero_button}
            >
              Про нас
            </Link>
            <Link
              to="partnership"
              smooth={true}
              offset={-100}
              duration={500}
              className={s.hero_button}
            >
              Партнерство
            </Link>
          </div>
          <ul className={s.link_social}>
            <li className={s.link_item}>
              <a
                href="https://www.facebook.com/profile.php?id=100093057441973"
                target="_blank"
                rel="noreferrer"
                className={s.social_text}
              >
                <div className={s.icon_button}>
                  <FaFacebookF className={s.icon_facebook} />
                </div>
                <p>Наш Facebook</p>
              </a>
            </li>
            <li className={s.link_item}>
              <a
                href="https://t.me/agrosales_sale_grain"
                target="_blank"
                rel="noreferrer"
                className={s.social_text}
              >
                <div className={s.icon_button}>
                  <FaTelegramPlane className={s.icon_telegram} />
                </div>
                <p>Продаж зерна</p>
              </a>
            </li>
            <li className={s.link_item}>
              <a
                href="https://t.me/I_buy_grain"
                target="_blank"
                rel="noreferrer"
                className={s.social_text}
              >
                <div className={s.icon_button}>
                  <FaTelegramPlane className={s.icon_telegram} />
                </div>
                <p>Купівля зерна</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className={s.video}>
        <video autoPlay loop muted playsInline className={s.video_item}>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
