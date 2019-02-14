$(document).ready(function(){

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
        appendArrows: '.interesting .carousel-nav'
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
        appendArrows: '.lastnews .carousel-nav'
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
});



document.querySelector('#modal-menu .close-modal').addEventListener('click', function(e){
	this.closest('.open').classList.remove('open');
	document.querySelector('.body').classList.remove('m-modal-open');
}, false);

$(document).on('click', '.extra-toggle', function(e){
	if (window.innerWidth > 650) {
		var modal = $(this).data('popup');
		$('#' + modal).addClass('open');
	} else{
		// for mobile menu
		document.querySelector('.apanel').classList.add('open');
	}
});
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape && document.querySelector('.modal-menu').classList.contains('open')) {
    	document.querySelector('.modal-menu.open').classList.remove('open');
    }
};