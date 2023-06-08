import { ReactComponent as ArrowUpIcon } from '../../img/arrow-up.svg';

import s from './arrowScroll.module.scss';

const ArrowScroll = () => {
  return (
    <div className={s.arrow_scroll}>
      <ArrowUpIcon className={s.icon_arrow_scroll} />
    </div>
  );
};

export default ArrowScroll;
