$(document).ready(function(){
	// inputs
	$('.input-field').each(function(){
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}
	});

	$('body').on('focusin', '.input-field', function(e) {
		return $(this).addClass('is-focused');
	})
	.on('focusout', '.input-field', function(e) {
		$(this).removeClass('is-focused');
		return $(this).removeClass('is-focused');
	})
	.on('change', '.input-field', function() {
		$(this).removeClass('is-charged');
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}
	});

	
	$('#home-carousel').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		arrows : false,
		fade: true,
		speed: 1000,
        infinite : true
	});	



	$('#history-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Previous" type="button"><svg width="12" height="22"><line x1="12" y1="0" x2="0" y2="12"/><line x1="-2" y1="9" x2="12" y2="22"/></svg></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Next" type="button"><svg width="12" height="22"><line x1="0" y1="0" x2="12" y2="12"/><line x1="14" y1="10" x2="-2" y2="22"/></svg></button>',
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows : true,
        infinite : false,
        vertical : true
	});	


	$('#history-carousel .slick-next, #history-carousel .slick-prev').on('click', function(){
		const currentnum = $('#history-carousel').slick('slickCurrentSlide') ;
		discrotate(currentnum);
	});

	$('.nav-rotate').click(function(){
		const currentnum = $(this).data('slick-index');
		$('#history-carousel').slick('slickGoTo', currentnum, false);
		discrotate(currentnum);
	});


	$('#dyk-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Previous" type="button"><svg width="12" height="22"><line x1="12" y1="0" x2="0" y2="12"/><line x1="-2" y1="9" x2="12" y2="22"/></svg></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Next" type="button"><svg width="12" height="22"><line x1="0" y1="0" x2="12" y2="12"/><line x1="14" y1="10" x2="-2" y2="22"/></svg></button>',
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500000,
		arrows : true,
        infinite : true,
        appendArrows: '.content .interesting .carousel-nav'
	});	

	$('#news-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Previous" type="button"><svg width="12" height="22"><line x1="12" y1="0" x2="0" y2="12"/><line x1="-2" y1="9" x2="12" y2="22"/></svg></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Next" type="button"><svg width="12" height="22"><line x1="0" y1="0" x2="12" y2="12"/><line x1="14" y1="10" x2="-2" y2="22"/></svg></button>',
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500000,
		arrows : true,
        infinite : true,
        appendArrows: '.content .lastnews .carousel-nav'
	});	


	$('#dyk-md-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Previous" type="button"><svg width="12" height="22"><line x1="12" y1="0" x2="0" y2="12"/><line x1="-2" y1="9" x2="12" y2="22"/></svg></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Next" type="button"><svg width="12" height="22"><line x1="0" y1="0" x2="12" y2="12"/><line x1="14" y1="10" x2="-2" y2="22"/></svg></button>',
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500000,
		arrows : true,
        infinite : true,
        appendArrows: '.info-md .interesting .carousel-nav'
	});	

	$('#news-md-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Previous" type="button"><svg width="12" height="22"><line x1="12" y1="0" x2="0" y2="12"/><line x1="-2" y1="9" x2="12" y2="22"/></svg></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Next" type="button"><svg width="12" height="22"><line x1="0" y1="0" x2="12" y2="12"/><line x1="14" y1="10" x2="-2" y2="22"/></svg></button>',
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500000,
		arrows : true,
        infinite : true,
        appendArrows: '.info-md .lastnews .carousel-nav'
	});		

	$('#sertificats-carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: '',
		nextArrow: '',
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '70px'
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '60px'
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '40px'
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '15px'
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '60px'
				}
			}
		]
	});


	// mobile-menu
	$('#navbar').each(function(){
		var $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $('.close-menu'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				$('body').addClass('o-menu');

			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
			};
		init();
	});	

	$('select.country').selectize();

	$('#modal-feedback').on('show.bs.modal', function (e) {
		const $title = $(e.relatedTarget).data('title');
		$('#modal-feedback .title-model').text($title);
	});
});

function discrotate(currentnum){
	$('.disc-rotate').removeClass("rotate-0 rotate-1 rotate-2 rotate-3 rotate-4 rotate-5 rotate-6 rotate-7 rotate-8");
	document.querySelector('.disc-rotate').classList.add('rotate-' + currentnum);	
};


// MODAL MENU
[].forEach.call(document.querySelectorAll('.genmodal .close-modal'),function(el,i){
	el.addEventListener('click', function(e){
		document.querySelector('.genmodal.open').setAttribute('aria-hidden', 'true');
		document.querySelector('.genmodal.open').classList.remove('open');
	})
});

// $(document).on('click', '.extra-toggle', function(e){
[].forEach.call(document.querySelectorAll('[data-popup="modal"]'),function(el,i){
	el.addEventListener('click', function(e){
		let modal = this.dataset.target;
		if (window.innerWidth < 650 && modal=='#modal-menu') {
			modal = '#apanel';
		} else{
			// for mobile menu
			// document.querySelector('.apanel').classList.add('open');
		}

		document.querySelector(modal).classList.add('open');
		document.querySelector(modal).setAttribute('aria-hidden', 'false');
	})
});


// GENERAL EVENT - ONKEYDOWN
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape && document.querySelector('.genmodal.open')) {
    	document.querySelector('.genmodal.open').setAttribute('aria-hidden', 'true');
    	document.querySelector('.genmodal.open').classList.remove('open');
    }
};


// closemenu and back button of modal menu
document.querySelector('.apanel .close-menu').addEventListener("click", function(){
	document.querySelector('.apanel.open').classList.remove('open');
}, false);

// =/mobile menu



$(document).on('click', '.table-grid .model-title', function(e){
	e.preventDefault();
	const $this = $(this),
		$modelbody = $this.next('.model-body');

	$this.toggleClass('arrow-down');
	$modelbody.slideToggle();
});


// `closest` polyfill for IE11
(function (ElementProto) {
	if (typeof ElementProto.matches !== 'function') {
		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementProto.closest !== 'function') {
		ElementProto.closest = function closest(selector) {
			var element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}
})(window.Element.prototype);