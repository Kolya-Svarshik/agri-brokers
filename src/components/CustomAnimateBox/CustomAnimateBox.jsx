import { useSpring, animated, useInView } from '@react-spring/web'

const animateOption = { leftR: -150, rightL: 150 }



export const CustomAnimateBox = ({ classNameAnimate, idAnimate, animateProps = "rightL", children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : `translateX(${animateProps === 'leftR' ? animateOption.leftR : animateOption.rightL}px) `,
    });




    return < animated.li
        ref={ref}
        style={animation}
        className={classNameAnimate} id={idAnimate}>
        {children}
    </animated.li>
}
