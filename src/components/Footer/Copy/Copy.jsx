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
      <a className={s.created_link}
        target="_blank"
        href="https://github.com/Kolya-Svarshik"
        rel="noreferrer" >Created by Nazar Buialo</a>
    </div>
  );
};

export default Copy;
