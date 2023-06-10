import { ReactComponent as HeadphoneIcon } from '../../img/headphone.svg';

import { GrClose } from 'react-icons/gr';

import s from './modal.module.scss';

const Modal = () => {
  return (
    <div className={s.backdrop} data-backdrop id="jsBackdrop">
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
              <label for="name" className={s.input_text}>
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
              <label for="tel" className={s.input_text}>
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
              <label for="comment" className={s.input_text}>
                Введіть повідомлення
              </label>
            </li>
            <li className={s.form_item}>
              <button type="submit" className={s.button_submit}>
                Замовити
              </button>
            </li>
          </ul>
        </form>
        <button data-close-modal className={s.button_close}>
          <GrClose className={s.icon_close} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
