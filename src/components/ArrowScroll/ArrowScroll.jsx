import { animateScroll as scroll } from 'react-scroll';
import { IoIosArrowUp } from 'react-icons/io';

import s from './arrowScroll.module.scss';

const ArrowScroll = () => {
  return (
    <div onClick={() => scroll.scrollToTop()} className={s.arrow_scroll}>
      <IoIosArrowUp className={s.icon_arrow_scroll} />
    </div>
  );
};

export default ArrowScroll;
