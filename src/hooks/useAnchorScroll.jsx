// import React from 'react'

const aboutUs = document.querySelectorAll('a[href*="#about_us"]');
function useAnchorScroll() {

    // const hero = document.querySelectorAll('a[href*="#hero"]');
    // const aboutProduct = document.querySelectorAll('a[href*="#about_product"]');
    // const advantage = document.querySelectorAll('a[href*="#advantage"]');

    // const scrollEfect = (data) => {
    //     for (let anchor of data) {
    //         anchor.addEventListener("click", function (e) {
    //             e.preventDefault();
    //             const blockID = anchor.getAttribute("href").substr(1);
    //             document.getElementById(blockID).scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "start",
    //             });
    //         });
    //     }
    // };

    // scrollEfect(hero);
    // scrollEfect(aboutProduct);
    // scrollEfect(advantage);

    const scrollEfect = (e) => {
        e.preventDefault();
        const blockID = e.getAttribute("href").substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    scrollEfect(aboutUs);

    return { scrollEfect }

}

export default useAnchorScroll