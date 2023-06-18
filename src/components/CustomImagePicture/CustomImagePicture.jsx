import React from 'react'

export const CustomImagePicture = ({
    classNamePhoto,
    webp,
    webp2x = { webp },
    photo,
    mediaType = "image/webp",
    altPhoto = "Image",
    ...deleegated }) => {
    return (
        <picture>
            <source media="(max-width: 420px)" className={classNamePhoto}
                srcSet={webp2x}
                type={mediaType} />
            <source className={classNamePhoto}
                srcSet={webp}
                type={mediaType}
            />
            <img src={photo}
                className={classNamePhoto}
                alt={altPhoto}
                {...deleegated}
                loading='lazy'
            />
        </picture>
    )
}
