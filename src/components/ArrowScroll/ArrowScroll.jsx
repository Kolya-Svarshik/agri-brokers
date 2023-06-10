import { IoIosArrowUp } from 'react-icons/io';

import s from './arrowScroll.module.scss';

const ArrowScroll = () => {
  return (
    <div className={s.arrow_scroll}>
      <IoIosArrowUp className={s.icon_arrow_scroll} />
    </div>
  );
};

export default ArrowScroll;
