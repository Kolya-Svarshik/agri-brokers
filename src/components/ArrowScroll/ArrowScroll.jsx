import { animateScroll as scroll } from 'react-scroll';
import { IoIosArrowUp } from 'react-icons/io';

import { useTargetScroll } from '../../hooks/useTargetScroll';
import { useEffect, useState } from 'react';

import s from './arrowScroll.module.scss';

const ArrowScroll = () => {
  const [vp, setVp] = useState(false);

  const { scrollY, viewportHeight } = useTargetScroll();

  useEffect(() => {


    if (viewportHeight < 1500) {
      if (scrollY > 800) {
        setVp(true)

      } else {
        setVp(false)
      }
    }

  }, [scrollY])

  return (
    <div onClick={() => scroll.scrollToTop()} className={vp ? `${s.arrow_scroll} ${s.arrow_scroll_active}` : `${s.arrow_scroll} ${s.arrow_scroll_unActive}`} >
      <IoIosArrowUp className={s.icon_arrow_scroll} />
    </div >
  );
};

export default ArrowScroll;
