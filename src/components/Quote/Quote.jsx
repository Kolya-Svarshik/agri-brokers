import s from './quote.module.scss';

const Quote = () => {
  return (
    <section className={s.section}>
      <div className={s.quote}>
        <span>
          Agri Brokers Ukraine - це брокерська компанія, яка спеціалізується на
          допомозі фермерам у продажу зернових культур за вигідними цінами.
          Маючи великий досвід та знання галузі, ми надаємо цінні рекомендації
          та підтримку як фермерам, так і трейдерам при купівлі-продажу різних
          зернових товарів.
        </span>
      </div>
    </section>
  );
};

export default Quote;
