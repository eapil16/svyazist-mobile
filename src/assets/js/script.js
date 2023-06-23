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
            const collLinks = document.querySelectorAll('.link-prompt');
            collLinks.forEach(e => e.classList.remove('active'));
            const target = e.target.closest('.swiper-slide');
            target.classList.add('active');
            e.target.closest('.rates-card__values_item').querySelector('.link-prompt').classList.add('active');
            e.target.closest('.rates-card__values_item').querySelector('.rates-card-prompt').classList.add('show');  
        }
        if(!e.target.closest('.link-prompt') && !e.target.closest('.rates-card-prompt')) {
            const collection = document.querySelectorAll('.swiper-slide');
            collection.forEach(e => e.classList.remove('active'));
            const collectionPromt = document.querySelectorAll('.rates-card-prompt');
            collectionPromt.forEach(e => e.classList.remove('show'));
            const collLinks = document.querySelectorAll('.link-prompt');
            collLinks.forEach(e => e.classList.remove('active'));
        }
        if(e.target.closest('.catalog-menu__home')) {
            e.preventDefault();
            const coll = document.querySelectorAll('.catalog-menu__link');
            coll.forEach(element => element.classList.remove('selected'));
            e.target.closest('.catalog-menu__home').classList.add('selected');
            document.querySelector('.catalog-menu__dropdown_home').classList.remove('dropdown_hidd');
            document.querySelector('.catalog-menu__dropdown_business').classList.add('dropdown_hidd');
            document.querySelector('.catalog-menu__dropdown_tv').classList.add('dropdown_hidd');
        }
        if(e.target.closest('.catalog-menu__bisiness')) {
            e.preventDefault();
            const coll = document.querySelectorAll('.catalog-menu__link');
            coll.forEach(element => element.classList.remove('selected'));
            e.target.closest('.catalog-menu__bisiness').classList.add('selected');
            document.querySelector('.catalog-menu__dropdown_home').classList.add('dropdown_hidd');
            document.querySelector('.catalog-menu__dropdown_business').classList.remove('dropdown_hidd');
            document.querySelector('.catalog-menu__dropdown_tv').classList.add('dropdown_hidd');
        }
        if(e.target.closest('.catalog-menu__tv')) {
            e.preventDefault();
            const coll = document.querySelectorAll('.catalog-menu__link');
            coll.forEach(element => element.classList.remove('selected'));
            e.target.closest('.catalog-menu__tv').classList.add('selected');
            document.querySelector('.catalog-menu__dropdown_home').classList.add('dropdown_hidd');
            document.querySelector('.catalog-menu__dropdown_business').classList.add('dropdown_hidd');
            document.querySelector('.catalog-menu__dropdown_tv').classList.remove('dropdown_hidd');
        }
        if(e.target.closest('.channel-list a')) {
            e.preventDefault();
            const collBlock = document.querySelectorAll('.channel-list__block');
            collBlock.forEach(e => e.classList.remove('show'));
            const collLinks = document.querySelectorAll('.channel-list a');
            collLinks.forEach(e => e.classList.remove('active'));
            
            e.target.classList.add('active');
            e.target.closest('.channel-list li').querySelector('.channel-list__block').classList.add('show');
        }
        if(e.target.closest('.channel-list__block__close')) {
            e.preventDefault();
            const collBlock = document.querySelectorAll('.channel-list__block');
            collBlock.forEach(e => e.classList.remove('show'));
            const collLinks = document.querySelectorAll('.channel-list a');
            collLinks.forEach(e => e.classList.remove('active'));
        }
        if(!e.target.closest('.channel-list__block') && !e.target.closest('.channel-list a'))  {
            const collBlock = document.querySelectorAll('.channel-list__block');
            collBlock.forEach(e => e.classList.remove('show'));
            const collLinks = document.querySelectorAll('.channel-list a');
            collLinks.forEach(e => e.classList.remove('active'));
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

    const partnersSlider = new Swiper(".partners-slider", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        loop: false,
        spaceBetween: 20,
        speed: 800,
        pagination: {
            el: ".partners-pagination",
            type: "progressbar",
        },
    });

    const cctvotherSlider = new Swiper(".cctv-other", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        pagination: {
            el: ".cctv-other-pagination",
            type: "progressbar",
        },
    }); 
    
    const businessinternetotherSlider = new Swiper(".business-int-other", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        pagination: {
            el: ".business-int-other-pagination",
            type: "progressbar",
        },
    });

    const intotherSlider = new Swiper(".int-other", {
        allowTouchMove: true,
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,
        speed: 800,
        pagination: {
            el: ".int-other-pagination",
            type: "progressbar",
        },
    }); 

});

