import { useTranslation } from 'react-i18next';
import { useIsActive } from '../../../hooks/useIsActive';

import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

import s from '../footer.module.scss';

export const ContactFooter = () => {
  const { onModal, isActiveModal } = useIsActive();
  const { t } = useTranslation()
  return (
    <div className={s.contact} id="contact">
      <h2 onClick={onModal} id="dropDownsFooter" className={s.contact_title}>
        {t('footer.contact.title')}
      </h2>
      <IoIosArrowDown
        className={
          !isActiveModal
            ? `${s.icon_arrow} ${s.icon_arrow_activev}`
            : `${s.icon_arrow}`
        }
      />
      <ul
        className={
          !isActiveModal
            ? `${s.contact_list} ${s.activeMobile}`
            : `${s.contact_list} ${s.inActiveMobile}`
        }
      >
        <li className={s.contact_item}>
          <p className={s.contact_text}>{t('footer.contact.info.tel')}</p>
          <a href="tel:+380675211100" className={`${s.contact_link} ${s.contact_link_marg}`}>
            <FiPhoneCall className={s.icon_tel} />
            <span>+38 (067) 521 11 00</span>
          </a>
          <a href="tel:+380675230304" className={`${s.contact_link} ${s.contact_link_marg}`}>
            <FiPhoneCall className={s.icon_tel} />
            <span>+38 (067) 523 03 04</span>
          </a>
          <a href="tel:+380931249898" className={`${s.contact_link} ${s.contact_link_marg}`}>
            <FiPhoneCall className={s.icon_tel} />
            <span>+38 (093) 124 98 98</span>
          </a>
          <a href="tel:+380675202508" className={`${s.contact_link} ${s.contact_link_marg}`}>
            <FiPhoneCall className={s.icon_tel} />
            <span>+38 (067) 520 25 08</span>
          </a>
        </li>
        <li className={s.contact_item}>
          <p className={s.contact_text}>{t('footer.contact.info.email')}</p>
          <a href="mailto:agribrokersukraine@gmail.com" className={s.contact_link}>
            <AiOutlineMail className={s.icon_mail} />
            <span>agribrokersukraine@gmail.com</span>
          </a>
        </li>
        <li className={s.contact_item}>
          <p className={s.contact_text}>{t('footer.contact.info.geo.title')}</p>
          <a
            href="https://goo.gl/maps/DXx6PMhRGwQzJaxa6"
            target="_blank"
            className={`${s.contact_link} ${s.contact_link_underline}`}
            rel="noreferrer"
          >
            <MdLocationPin className={s.icon_geo} />
            <span>{t('footer.contact.info.geo.text')}</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
