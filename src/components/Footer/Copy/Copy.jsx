import { useTranslation } from 'react-i18next';

import s from './copy.module.scss';

const Copy = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation()
  return (
    <div className={s.copy}>
      <p className={s.copy_text}>
        &copy; <span>{currentYear}</span>{t("footer.copy.text")}
      </p>
      <p className={s.created_text}>
        Created by <a className={`${s.created_text} ${s.created_link}`} href="https://github.com/Kolya-Svarshik">Nazar Buialo</a>
      </p>
    </div>
  );
};

export default Copy;
