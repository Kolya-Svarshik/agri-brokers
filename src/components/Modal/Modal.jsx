import React from 'react';
import { useTranslation } from 'react-i18next';

import { ImCross } from 'react-icons/im';

import s from './modal.module.scss';

export const Modal = ({ onModal, isActiveModal }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={
        isActiveModal
          ? `${s.backdrop} ${s.activeMobile}`
          : `${s.backdrop} ${s.inActiveMobile}`
      }
      id="policy"
      onClick={onModal}
    >
      <div className={s.modal}>
        <div className={s.policy}>
          <p className={s.policy_text}>{t('footer.copy.policy.text')}</p>
        </div>
        <button
          type="button"
          onClick={onModal}
          name="policy"
          className={s.modal_exit}
        >
          <ImCross className={s.icon_exit} />
        </button>
      </div>
    </div>
  );
};
