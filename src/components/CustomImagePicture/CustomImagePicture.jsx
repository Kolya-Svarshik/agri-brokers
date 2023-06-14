import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';

export const CustomImagePicture = ({
    classNamePhoto,
    webp,
    photo,
    mediaType = "image/webp",
    altPhoto = "Image",
    ...deleegated }) => {
    return (
        <picture >
            <source className={classNamePhoto} srcSet={webp} type={mediaType} />
            <LazyLoadImage
                className={classNamePhoto}
                src={photo}
                alt={altPhoto}
                threshold={500}
                {...deleegated}
            />
        </picture >
    )
}
