import s from './quote.module.scss';

const Quote = () => {
  return (
    <section className="container">
      <div className={s.section}>
        <div className={s.quote}>
          <span>
            Співпраця з Agri Brokers Ukraine принесе Вам успіх та позитивні
            емоції. Ми забезпечимо вигідні угоди, ефективне виконання замовлень
            та професійний підхід до кожного партнера. Обирайте Agri Brokers
            Ukraine для укладання вигідних контрактів та розширення можливостей
            Вашого бізнесу.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Quote;
