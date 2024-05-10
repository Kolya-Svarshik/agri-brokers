import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";

import bgVideo from '../../media/hero_video.mp4';

import s from './hero.module.scss';


const Hero = () => {
  const { t } = useTranslation()
  return (
    <div className={s.hero}>
      <section className="container" id="hero">
        <div className={s.section}>
          <h1 className={s.hero_title}>{t('main.hero.title')}</h1>
          <p className={s.hero_text}>
            {t('main.hero.text')}
          </p>
          <div className={s.hero_nav}>
            <Link
              to="about_us"
              href="#about_us"
              smooth={true}
              offset={-100}
              duration={500}
              className={s.hero_button}
            >
              {t('main.hero.button.about_us')}
            </Link>
            <Link
              to="partnership"
              href="#partnership"
              smooth={true}
              offset={-100}
              duration={500}
              className={s.hero_button}
            >
              {t('main.hero.button.partnership')}
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
                <p>{t('main.hero.button.link.facebook')}</p>
              </a>
            </li>
            <li className={s.link_item}>
              <a
                href="https://www.instagram.com/agri_brokers_ukraine?igsh=MWh3cWh6MjV5ZXRjOA%3D%3D"
                target="_blank"
                rel="noreferrer"
                className={s.social_text}
              >
                <div className={s.icon_button}>
                  <AiFillInstagram className={s.icon_instagram} />
                </div>
                <p>{t('main.hero.button.link.instagram')}</p>
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
                <p>{t('main.hero.button.link.telegram.sale')}</p>
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
                <p>{t('main.hero.button.link.telegram.purchase')}</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className={s.video}>
        <video autoPlay loop muted playsInline preload="metadata" className={s.video_item}>
          <source src={bgVideo} type="video/mp4" />
          {t('main.hero.video.error_text')}
        </video>

      </div>
    </div>
  );
};

export default Hero;
