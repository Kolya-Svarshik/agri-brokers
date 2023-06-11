// import { useRef } from 'react';

import { ReactComponent as HeadphoneIcon } from '../../img/headphone.svg';
import { GrClose } from 'react-icons/gr';

import s from './modal.module.scss';

const Modal = ({ onModal }) => {
  return (
    <div className={s.backdrop} id="modal" onClick={onModal}>
      <div className={s.modal}>
        <div className={s.data_titel}>
          <HeadphoneIcon className={s.icon_headphone} />
          <h2 className={s.data_text}>Замовлення зворотнього дзвінку</h2>
        </div>
        <form>
          <ul className={s.form_list}>
            <li className={s.form_item}>
              <input
                type="text"
                name="name"
                id="name"
                className={s.input_item}
                placeholder=" "
              />
              <label htmlFor="name" className={s.input_text}>
                Ім'я*
              </label>
            </li>
            <li className={s.form_item}>
              <input
                type="tel"
                name="tel"
                id="tel"
                className={s.input_item}
                placeholder=" "
              />
              <label htmlFor="tel" className={s.input_text}>
                Номер телефону*
              </label>
            </li>
            <li className={s.form_item}>
              <textarea
                name="comment"
                id="comment"
                placeholder=" "
                className={s.input_textarea}
              ></textarea>
              <label htmlFor="comment" className={s.input_text}>
                Введіть повідомлення
              </label>
            </li>
            <li className={s.form_item}>
              <button
                type="submit"
                name="modal"
                onClick={onModal}
                className={s.button_submit}
              >
                Замовити
              </button>
            </li>
          </ul>
        </form>
        <button
          type="button"
          name="modal"
          onClick={onModal}
          className={s.button_close}
        >
          <GrClose className={s.icon_close} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
