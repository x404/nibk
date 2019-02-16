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
		autoplaySpeed: 500000,
		arrows : false,
		fade: true,
        infinite : true
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
});



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
    // if (isEscape && document.querySelector('.genmodal.open').classList.contains('open')) {
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