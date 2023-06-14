import peoplePhotoWebp from '../../img/people.webp';
import peoplePhotoJpeg from '../../img/people.jpg';
import oilPhotoWebp from '../../img/oil.webp';
import oilPhotoJpg from '../../img/oil.jpg';
import grainPhotoWebp from '../../img/grain.webp';
import grainPhotoJpg from '../../img/grain.jpg';


import s from './ourServices.module.scss';
import { CustomAnimateBox } from "../CustomAnimateBox/CustomAnimateBox";
import { CustomImagePicture } from '../CustomImagePicture/CustomImagePicture';

const OurServices = () => {
  return (
    <section className="container" id="services">
      <div className={s.section}>
        <h2 className={s.services_tetle}>Наші Послуги</h2>
        <ul className={s.cart}>
          <CustomAnimateBox
            classNameAnimate={s.cart_item}
            idAnimate={"services_manufacturers"}>
            <>
              <div className={s.cart_elem}>
                <h3 className={s.elem_title}>Для виробників с/г продукції</h3>
                <p className={s.elem_text}>
                  Agri Brokers Ukraine допомагає фермерам вигідно продати свій
                  урожай на найкращих для них умовах.
                </p>
                <p className={s.elem_text}>
                  Наші експерти вивчають ринкові тенденції та допомагають укладати
                  найвигідніші контракти.
                </p>
                <p className={s.elem_text}>
                  Ми співпрацюємо з великою кількістю трейдингових компаній, що
                  допомагає отримати найкращі ціни для наших клієнтів
                  сільгоспвиробників та переробників, як на ринку України, так і
                  за кордоном. Пропонуємо контракти на умовах FCA, CPT, FOB, DAP,
                  CIF та інші.
                </p>
              </div>
              <CustomImagePicture classNamePhoto={s.cart_photo} webp={peoplePhotoWebp} photo={peoplePhotoJpeg} altPhoto='Люди потискають руки' />
            </>
          </CustomAnimateBox>
          <CustomAnimateBox
            animateProps={"leftR"}
            classNameAnimate={s.cart_item} idAnimate="services_processors">
            <>
              <div className={s.cart_elem}>
                <h3 className={s.elem_title}>Для переробників</h3>
                <p className={s.elem_text}>
                  Agri Brokers Ukraine допомагає переробникам забезпечити себе
                  сировиною та ефективно реалізувати продукти її переробки. Наша
                  команда експертів допоможе укласти найкращі контракти на шріт
                  соняшнику, сою, олію соняшникову, ріпакову, соєву та багато
                  інших продуктів, забезпечуючи Вам оптимальні умови.
                </p>
              </div>
              <CustomImagePicture classNamePhoto={s.cart_photo} webp={oilPhotoWebp} photo={oilPhotoJpg} altPhoto='Олія та соняшникова олія' />
            </>
          </CustomAnimateBox>
          <CustomAnimateBox
            classNameAnimate={s.cart_item} idAnimate="services_traders">
            <>
              <div className={s.cart_elem}>
                <h3 className={s.elem_title}>Для трейдерів</h3>
                <p className={s.elem_text}>
                  Співпраця з Agri Brokers Ukraine дає можливість зернотрейдерам
                  отримувати необхідні обсяги зерна необхідної якості за
                  прийнятними цінами та з необхідними строками поставки.
                  Співпрацюючи з великою кількістю фермерів з усієї території
                  України, ми допоможемо Вам укласти найкращі контракти, на
                  купівлю кукурудзи, пшениці, ячменю, сої, ріпаку та інших
                  культур, а також продуктів їх переробки за оптимальними умовами.
                </p>
              </div>
              <CustomImagePicture classNamePhoto={s.cart_photo} webp={grainPhotoWebp} photo={grainPhotoJpg} altPhoto='Завод де вивантажують зерно' />
            </>
          </CustomAnimateBox>
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
