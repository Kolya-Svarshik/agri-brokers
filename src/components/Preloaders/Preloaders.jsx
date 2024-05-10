import React from 'react'
import { Circles } from 'react-loader-spinner'

import s from './preloaders.module.scss';

export const Preloaders = () => {
    return (
        <div className={s.preloader}>
            <Circles
            />
        </div>
    )
}
