// init Swiper:

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
const swiperBrand = new Swiper('.brands__swiper', {
    modules: [Pagination],
    pagination: {
        el: '.brands__swiper-pagination',
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
const swiperGadget = new Swiper('.gadgets__swiper', {
    modules: [Pagination],
    pagination: {
        el: '.gadgets__swiper-pagination',
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
const swiperPrice = new Swiper('.price__swiper', {
    modules: [Pagination],
    pagination: {
        el: '.price__swiper-pagination',
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