"use strict"
//==========================================

//! ============== 1 вариант SWIPER ==============
const gallary = new Swiper('.gallary', {

    //! Основные настройки 
    direction: 'horizontal', // 'vertical', 'horizontal'
    loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
    spaceBetween: 20, // расстояние между слайдами
    slidesPerView: 4, // кол-во активных слайдов
    slidesPerGroup: 4, // кол-во пролистываемых слайдов

    //! Кнопки вперед и назад 
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    

    //! Адаптив слайдера
    breakpoints: {
        1251: {
            spaceBetween: 20,
            slidesPerView: 4,
        },

        951: {
            spaceBetween: 20,
            slidesPerView: 2,
        },

        0: {
            spaceBetween: 0,
            slidesPerView: 1,
        },
    },
});


//! ============== 2 вариант SWIPER ==============
$(document).ready(function () {
    var pos = 0,
        slides = $('.slide'),
        numOfSlides = slides.length;

    function nextSlide() {
        // `[]` returns a vanilla DOM object from a jQuery object/collection
        slides[pos].video.stopVideo()
        slides.eq(pos).animate({ left: '-100%' }, 500);
        pos = (pos >= numOfSlides - 1 ? 0 : ++pos);
        slides.eq(pos).css({ left: '100%' }).animate({ left: 0 }, 500);
    }

    function previousSlide() {
        slides[pos].video.stopVideo()
        slides.eq(pos).animate({ left: '100%' }, 500);
        pos = (pos == 0 ? numOfSlides - 1 : --pos);
        slides.eq(pos).css({ left: '-100%' }).animate({ left: 0 }, 500);
    }

    $('.left').click(previousSlide);
    $('.right').click(nextSlide);
})

function onYouTubeIframeAPIReady() {
    $('.slide').each(function (index, slide) {
        // Get the `.video` element inside each `.slide`
        var iframe = $(slide).find('.video')[0]
        // Create a new YT.Player from the iFrame, and store it on the `.slide` DOM object
        slide.video = new YT.Player(iframe)
    })
}

// 
// Получаем ссылки на все элементы подкатегорий
const subcategoryLinks = document.querySelectorAll('.subcategories li a');

// Добавляем обработчик события при клике на элемент подкатегории
subcategoryLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedItem = event.target.innerText;
    document.getElementById('selected-item').innerText = `Выбран: ${selectedItem}`;
  });
});
