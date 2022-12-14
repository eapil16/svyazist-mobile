'use strict';
document.addEventListener('DOMContentLoaded', () => {

    $('.menu-toggle-cont').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('menu-toggle-cont_active')) { 
            const coll = document.querySelectorAll('.catalog-menu__dropdown');
            coll.forEach(e => e.classList.remove('show'));
            $(this).addClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideDown(300); 
            $('body').addClass('hidd'); 
        } else { 
            $(this).removeClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideUp(300);
            $('body').removeClass('hidd');
        } 
    });
 
    const mainSlider = new Swiper(".main-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 800,
        pagination: {
            el: ".main-pagination",
            clickable: true,
        },
    });

    const ratesSlider = new Swiper(".rates-slider", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        pagination: {
            el: ".rates-pagination",
            type: "progressbar",
        },
    });

    const rateshomeSlider = new Swiper(".rates-slider-home", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        pagination: {
            el: ".rates-home-pagination",
            type: "progressbar",
        },
    });

    const equipment1Slider = new Swiper(".equipment-1-slider", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        pagination: {
            el: ".equipment-1-pagination",
            type: "progressbar",
        },
    });

    const equipment2Slider = new Swiper(".equipment-2-slider", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        pagination: {
            el: ".equipment-2-pagination",
            type: "progressbar",
        },
    });

    const equipment3Slider = new Swiper(".equipment-3-slider", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        pagination: {
            el: ".equipment-3-pagination",
            type: "progressbar",
        },
    });

    const equipment4Slider = new Swiper(".equipment-4-slider", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        pagination: {
            el: ".equipment-4-pagination",
            type: "progressbar",
        },
    });

    $('.message-close').click(function (e) {
        e.preventDefault(); 
        $('.message').slideUp();
    });

    $('[data-role=toggle-block]').each(function() {
		var $block = $(this);
		$block.on('click.toggle', '[data-role=toggle-btn]', function() {
            console.log(1)
			var $btn = $(this);
			var $data = $block.find('[data-role=toggle-data]');

			// toggle $btn
			$btn.toggleClass('shown');
			// show/hide $data
			$data.slideToggle(200);
		});
	});

    const internetotherSlider = new Swiper(".internet-other", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        pagination: {
            el: ".internet-other-pagination",
            type: "progressbar",
        },
    });

    document.querySelector('body').addEventListener('click', e => {
        if(e.target.closest('.link-prompt')) {
            e.preventDefault(); 
            const collection = document.querySelectorAll('.swiper-slide');
            collection.forEach(e => e.classList.remove('active'));
            const collectionPromt = document.querySelectorAll('.rates-card-prompt');
            collectionPromt.forEach(e => e.classList.remove('show'));
            const target = e.target.closest('.swiper-slide');
            target.classList.add('active');
            target.querySelector('.rates-card-prompt').classList.add('show');  
        }
        if(!e.target.closest('.link-prompt') && !e.target.closest('.rates-card-prompt')) {
            const collection = document.querySelectorAll('.swiper-slide');
            collection.forEach(e => e.classList.remove('active'));
            const collectionPromt = document.querySelectorAll('.rates-card-prompt');
            collectionPromt.forEach(e => e.classList.remove('show'));
        }
    });

    const accordionSlider = new Swiper(".accordion-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: ".accordion-next",
            prevEl: ".accordion-prev",
        },
        pagination: {
            el: ".accordion-pagination",
            clickable: true,
        },
    });

    const reviewsSlider = new Swiper(".company-reviews-slider", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        loop: false,
        spaceBetween: 20,
        speed: 800,
        pagination: {
            el: ".company-reviews-pagination",
            type: "progressbar",
        },
    });

    const cctvSlider = new Swiper(".cctv-small-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: ".cctv-next",
            prevEl: ".cctv-prev",
        },
        pagination: {
            el: ".cctv-pagination",
            clickable: true,
        },
    });

});

