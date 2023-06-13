import s from './map.module.scss';

const Map = () => {
  return (
    <div className={s.google_map}>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.7091624011014!2d30.464200399999996!3d50.39062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c91f8b17c85b%3A0x4b03b4dc93fb0666!2z0LLRg9C70LjRhtGPINCQ0LrQsNC00LXQvNGW0LrQsCDQktGW0LvRjNGP0LzRgdCwLCAy0LEsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1686131110313!5m2!1suk!2sua"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
