"use strict"
// const options = {
//         rootMargin: '0px',
//         threshold: 0.15,
//     };
//     const onEntry = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const image = entry.target; 
//                 image.src = image.dataset.src; 
//                 observer.unobserve(entry.target);
//             }
//         });
//     };
//     document.addEventListener('DOMContentLoaded', () => {
//         const images = document.querySelectorAll('.image');
//         const observer = new IntersectionObserver(onEntry, options);
//         images.forEach(image => {
//             observer.observe(image);
//         })
//     });
    
    // Додаткове завдання з кнопкою
    // const btn = document.querySelector('.btn');
    // btn.addEventListener('click', () => {
    //         const images = document.querySelectorAll('.image');
    //         const observer = new IntersectionObserver(onEntry, options);
    //         images.forEach(image => {
    //             observer.observe(image);
    //         })
    //     });
    const images = document.querySelectorAll('img[data-src]');
    const webp = document.querySelector('#webpBtn');
    const jpg = document.querySelector('#jpgBtn');
    const loadImg = (image, isWebp = false) => {
        const src = isWebp ? image.dataset.srcWebp : image.dataset.src;
        image.src = src;
        image.addEventListener('load', () => {
image.classList.add('loaded');
        })
    };
    const options = {
        root: null,
        rootMargin: '10px',
        threshold: 0.15,
     };
     const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                loadImg(entry.target);
                observer.unobserve(entry.target);
            }
        })
     }, options);
     images.forEach(image => {
        observer.observe(image);
     });
     webp.addEventListener('click', () => {
        images.forEach(image => {
            loadImg(image, true);
            observer.unobserve(image);
        })
     });
    jpg.addEventListener('click', () => {
        images.forEach(image => {
            loadImg(image, false);
            observer.unobserve(image);
        })
     });