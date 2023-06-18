import { useTranslation } from 'react-i18next';

import s from './quote.module.scss';

const Quote = () => {
  const { t } = useTranslation()
  return (
    <section className="container">
      <div className={s.section}>
        <div className={s.quote}>
          <span>
            {t('main.quote.text')}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Quote;
