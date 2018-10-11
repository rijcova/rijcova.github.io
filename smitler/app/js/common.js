$(function() {
$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt = "Салон красоты Смитлер">'
		},
	});

	var API = $('#my-menu').data('mmenu');
	var $icon = $('.hamburger'); 

	 API.bind( "open:finish", function() { 
	 	setTimeout(function() { 
	 		$icon.addClass( "is-active" ); 
	 	}, 10); 
	 }); 
	 API.bind( "close:finish", function() { 
	 	setTimeout(function() { 
	 		$icon.removeClass( "is-active" ); 
	 	}, 10); 
	 });
	 
	 $('.carousel-services').on('initialized.owl.carousel', function(){
	 	setTimeout(function(){
			carouselServices(); 		
	 	}, 100);
	 });
	 $('.carousel-services').owlCarousel({
	 	loop: true,
	 	nav: true,
	 	smartSpeed: 700,
	 	navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
	 	responsiveClass: true,
	 	dots:false,
	 	responsive: {
	 		0: {
	 			items: 1
	 		},
	 		800: {
	 			items: 2
	 		},
	 		1100: {
	 			items: 3
	 		}
	 	}
	 });



	 //ф-ия для одинаковой высоты изображений в owlCarousel
	 function carouselServices(){
	 	$('.carousel-services-item').each(function(){
	 		var ths  = $(this),
	 				thsh = ths.find('.carousel-services-content').outerHeight();
	 				ths.find('.carousel-services-image').css('min-height', thsh);
	 	});
	 }carouselServices();

	 //ф-ия для выделения первого слова акцентным цветом
	 $('.carousel-services-composition .h3').each(function(){
	 	var ths = $(this);
	 	ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	 });
	 $('section .h2').each(function(){
	 	var ths = $(this);
	 	ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	 });
	 $('select').selectize();

	 $('.reviews').owlCarousel({
	 	loop: true,
	 	items: 1,
	 	smartSpeed: 700,
	 	nav: false,
	 	autoHeight:true,
	 });

	 $('.partners').owlCarousel({
	 	loop: true,
	 	smartSpeed: 700,
	 	dots: false,
	 	nav: true,
	 	navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
	 	responsiveClass: true,
	 	responsive:{
	 		0: {
	 			items: 1
	 		},
	 		768: {
	 			items: 2
	 		},
	 		992: {
	 			items: 3
	 		},
	 		1200: {
	 			items: 4
	 		}
	 	}
	 });

//скрипт для появления кнопки "наверх"
	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()){
			$('.top').addClass('active');
		}else{
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html,body').stop().animate({scrollTop: 0}, 'slow','swing');
	})

	 //E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.succes').addClass('active').css('display','flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.succes').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	 //resize window
	 function onResize(){
	 	 //для одинаковой высоты у внутренних элементов контента, по максимальному из элементов
	 $('.carousel-services-content').equalHeights();
	}onResize();
	window.onresize = function(){onResize()};
});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
})
