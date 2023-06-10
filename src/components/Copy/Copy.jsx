import s from './copy.module.scss';

const Copy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={s.copy}>
      <p className={s.copy_text}>
        &copy; <span>{currentYear}</span> Всі права захищені.
      </p>
    </div>
  );
};

export default Copy;
