import s from './map.module.scss';

const Map = () => {
  return (
    <div className={s.google_map}>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2543.7091624011014!2d30.4642!3d50.39062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c91f8b17c85b%3A0x4b03b4dc93fb0666!2z0LLRg9C70LjRhtGPINCh0YLQtdC_0LDQvdCwINCg0YPQtNC90LjRhtGM0LrQvtCz0L4sIDLQsSwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1699878709314!5m2!1suk!2sua"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
};

export default Map;
