// init Swiper:

import Swiper from 'swiper'

new Swiper('.brands__swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetAfter: 64,
    breakpoints: {
        768: {
            spaceBetween: 24,
        },
        1120: {
            spaceBetween: 32,
        }
    }
});
new Swiper('.gadgets__swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetAfter: 64,
    breakpoints: {
        768: {
            spaceBetween: 24,
        },
        1120: {
            spaceBetween: 32,
        }
    }
});
new Swiper('.price-swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    slidesOffsetAfter: 64,
    breakpoints: {
        768: {
            spaceBetween: 24,
        },
        1120: {
            spaceBetween: 32,
        }
    }
});

const swiperBrand = document.querySelector('.brands__swiper').swiper;
const swiperGadget = document.querySelector('.gadgets__swiper').swiper;
const swiperPrice = document.querySelector('.price-swiper').swiper;

const mql = window.matchMedia('(min-width: 768px)');

let handleWindowResize = (e => {
    if (e.matches) {
        swiperBrand.disable()
        swiperGadget.disable()
        swiperPrice.disable()
    } else {
        swiperBrand.enable()
        swiperGadget.enable()
        swiperPrice.enable()
    }
})
mql.addListener(handleWindowResize)
handleWindowResize(mql)