import Swiper from 'swiper';

if (document.getElementsByClassName('main-slider')[0]) {
    let mainSwiper = new Swiper('.main-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        keyboardControl: true,
        mousewheelControl: true,

        slideClass: 'main-slider__item',
        slideActiveClass: 'active',
        wrapperClass: 'main-slider__wrapper',

        slideDuplicateActiveClass: 'main-slider-duplicate__active',
        slideDuplicateClass: 'main-slider-duplicate',
        slideVisibleClass: 'main-slider-item__visible',
        slideNextClass: 'main-slider-next',
        slideDuplicateNextClass: 'main-slider-duplicate-next',
        slidePrevClass: 'main-slider-prev',
        slideDuplicatePrevClass: 'main-slider-duplicate-prev',
        containerModifierClass: 'main-slider-',
        notificationClass: 'main-slider-notification',

        // If we need pagination
        pagination: {
            el: '.main-slider-pagination',
            //   dynamicBullets: true,
            clickable: true,
            bulletElement: 'li',
            bulletClass: 'main-slider-pagination__item',
            bulletActiveClass: 'active'
        }
    });
}

if (document.getElementsByClassName('products-slider')[0]) {
    let brandSwiper = new Swiper('.products-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        slidesPerView: 6,
        keyboardControl: true,
        mousewheelControl: true,
        spaceBetween: 20,
        breakpoints: {
            1200: {
                slidesPerView: 7,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            575: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            475: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        },
        autoplay: {
            delay: 5000,
          },

        slideClass: 'products-slider__item',
        slideActiveClass: 'active',
        wrapperClass: 'products-slider__wrapper',

        slideDuplicateActiveClass: 'products-slider-duplicate__active',
        slideDuplicateClass: 'products-slider-duplicate',
        slideVisibleClass: 'products-slider-item__visible',
        slideNextClass: 'products-slider-next',
        slideDuplicateNextClass: 'products-slider-duplicate-next',
        slidePrevClass: 'products-slider-prev',
        slideDuplicatePrevClass: 'products-slider-duplicate-prev',
        containerModifierClass: 'products-slider-',
        notificationClass: 'products-slider-notification',

        // Navigation arrows
        navigation: {
            nextEl: '.products-slider-button-next',
            prevEl: '.products-slider-button-prev'
        },

        a11y: {
            prevSlideMessage: 'Предыдущий слайд',
            nextSlideMessage: 'Следующий слайд'
        }
    });
}

if (document.getElementsByClassName('category-nav__slider')[0]) {
    let mainSwiper = new Swiper('.category-nav__slider', {
        direction: 'horizontal',
        loop: false,
        grabCursor: true,
        keyboardControl: true,
        mousewheelControl: true,

        slideClass: 'category-nav__item',
        slideActiveClass: 'active',
        wrapperClass: 'category-nav__wrapper',
        slideDuplicateActiveClass: 'category-nav-duplicate__active',
        slideDuplicateClass: 'category-nav-duplicate',
        slideVisibleClass: 'category-nav-item__visible',
        slideNextClass: 'category-nav-next',
        slideDuplicateNextClass: 'category-nav-duplicate-next',
        slidePrevClass: 'category-nav-prev',
        slideDuplicatePrevClass: 'category-nav-duplicate-prev',
        containerModifierClass: 'category-nav-',
        notificationClass: 'category-nav-notification',

        breakpoints: {
            768: {
                slidesPerView: 6
            },

            993: {
                slidesPerView: 6
            },

            1100: {
                slidesPerView: 8
            },

            1300: {
                slidesPerView: 12
            }
        }
    })
}

if (document.getElementsByClassName('product-gallery')[0] && document.getElementsByClassName('product-gallery-thumbs')[0]) {

    let productGalleryThumbs = new Swiper('.product-gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        grabCursor: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

        slideClass: 'product-gallery-thumbs__item',
        slideActiveClass: 'active',
        wrapperClass: 'product-gallery-thumbs__wrapper',

        slideDuplicateActiveClass: 'product-gallery-thumbs-duplicate__active',
        slideDuplicateClass: 'product-gallery-thumbs-duplicate',
        slideVisibleClass: 'product-gallery-thumbs-item__visible',
        slideNextClass: 'product-gallery-thumbs-next',
        slideDuplicateNextClass: 'product-gallery-thumbs-duplicate-next',
        slidePrevClass: 'product-gallery-thumbs-prev',
        slideDuplicatePrevClass: 'product-gallery-thumbs-duplicate-prev',
        containerModifierClass: 'product-gallery-thumbs-',
        notificationClass: 'product-gallery-thumbs-notification',

      });
      let productGalleryTop = new Swiper('.product-gallery', {
//        spaceBetween: 0,
        loop:true,
        grabCursor: true,

        slideClass: 'product-gallery__item',
        slideActiveClass: 'active',
        wrapperClass: 'product-gallery__wrapper',

        slideDuplicateActiveClass: 'product-gallery-duplicate__active',
        slideDuplicateClass: 'product-gallery-duplicate',
        slideVisibleClass: 'product-gallery-item__visible',
        slideNextClass: 'product-gallery-next',
        slideDuplicateNextClass: 'product-gallery-duplicate-next',
        slidePrevClass: 'product-gallery-prev',
        slideDuplicatePrevClass: 'product-gallery-duplicate-prev',
        containerModifierClass: 'product-gallery-',
        notificationClass: 'product-gallery-notification',
  
 
        on: {
            slideChange: function () {

                let zoomlens = document.getElementsByClassName('img-zoom-lens')[0];
                let zoomres = document.getElementById('zoom-result');
               if(zoomres, zoomlens){
                zoomlens.remove();
                zoomres.remove();
               }
              }
        },
        navigation: {
          nextEl: '.product-gallery-button-next',
          prevEl: '.product-gallery-button-prev',
        },
        thumbs: {
          swiper: productGalleryThumbs,
          thumbsContainerClass:'product-gallery-thumbs-wrapper',
          slideThumbActiveClass:'product-gallery-thumbs-active',
        },
        a11y: {
            prevSlideMessage: 'Предыдущий слайд',
            nextSlideMessage: 'Следующий слайд'
        }

        
      });

}
