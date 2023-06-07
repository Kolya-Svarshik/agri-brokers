import s from './modal.module.scss';

const Modal = () => {
  return (
    <div className={s.backdrop} data-backdrop id="jsBackdrop">
      <div className={s.modal}>
        <h2 className={s.data_titel}>
          Оставьте свои данные, мы вам перезвоним
        </h2>
      </div>
    </div>
  );
};

export default Modal;
