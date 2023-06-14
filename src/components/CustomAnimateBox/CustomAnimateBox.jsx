import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"

const animateOption = { leftR: -150, rightL: 150 }


export const CustomAnimateBox = ({ classNameAnimate, idAnimate, animateProps = "rightL", children }) => {
    const scrollRef = useRef(null)

    const mainControls = useAnimation()
    const isInView = useInView(scrollRef, { once: true })

    useEffect(() => {
        if (isInView) {
            console.log('object');
            mainControls.start("visible")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])

    return (
        <motion.li
            ref={scrollRef}
            variants={{
                hidden: { opacity: 0, x: animateProps === 'leftR' ? animateOption.leftR : animateOption.rightL },
                visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, ease: 'easeIn' }}

            className={classNameAnimate} id={idAnimate}>

            {children}

        </motion.li>
    )
}
