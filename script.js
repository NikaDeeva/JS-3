"use strict"
const options = {
        rootMargin: '0px',
        threshold: 0.15,
    };
    const onEntry = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                const image = entry.target.querySelector('.image');
                image.src = image.dataset.src;
                observer.unobserve(entry.target);
            }
        })
    };
    document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('.image');
        const observer = new IntersectionObserver(onEntry, options);
        images.forEach(image => {
            observer.observe(image);
        })
    });
    
    // Додаткове завдання з кнопкою
    // const btn = document.querySelector('.btn');
    // btn.addEventListener('click', () => {
    //         const images = document.querySelectorAll('.image');
    //         const observer = new IntersectionObserver(onEntry, options);
    //         images.forEach(image => {
    //             observer.observe(image);
    //         })
    //     });