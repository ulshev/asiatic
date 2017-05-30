$(document).ready(function() {


	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});

	
	
	// показываем меню
	$('.menu_button').on('click', function(){
		$('.main_menu_wrap').addClass('show');
		$('.menu_close').addClass('show');
		$('.main_menu').css('left', '50%');
	});

	// класс меню с подменю
	$('.main_menu > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});

	// скрываем меню, удаляем классы активности, возвращаем меню на исходную
	$('.menu_close').on('click', function(){
		$('.submenu.active').removeClass('show');
		$('.submenu').removeClass('show');
		$('.main_menu').css('left', '100%');
		$(this).removeClass('show');
		setTimeout(function(){
			$('.main_menu_wrap').removeClass('show');
		}, 300);
	});
	
	// открытие подменю
	$('.main_menu .submenu a').on('click', function(e){
		if( !$(this).parent().hasClass('show') ) {
			$('.main_menu').css('left', '20%');

			$(this).parent().addClass('show');
			$(this).parent().siblings().removeClass('show');
			e.preventDefault();
		}
	});
	
	
	$('.service_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		//fade: true,
		adaptiveHeight: true,
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>',
	});
	
	
	$('.certificates_wrap').gallery();
    
});

