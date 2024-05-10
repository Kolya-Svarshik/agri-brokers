import React from 'react';
import { useTranslation } from 'react-i18next';

import CookieConsent from 'react-cookie-consent';

import s from './consentCookie.module.scss';

export const ConsentCookie = ({ onModal, isActiveModal }) => {
  const { t, i18n } = useTranslation();
  return (
    <CookieConsent
      style={{ background: '#343333' }}
      buttonText={t('footer.cookie.button')}
      buttonStyle={{
        color: '#fff',
        background: '#007120',
        borderRadius: '10px',
        padding: '10px',
      }}
      expires={365}
    >
      {t('footer.cookie.text.before')}
      <button
        type="button"
        onClick={onModal}
        name="policy"
        className={s.policy}
      >
        {t('footer.cookie.text.button')}
      </button>
      {t('footer.cookie.text.after')}
    </CookieConsent>
  );
};
