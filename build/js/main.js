TopMenu = function(){
	var width = $('header').width();
	$('.menu_content').css({'width':width+'px', 'position':'absolute'});
}
var timerResize = false, ignoreResize = [];
$(function(){
	/*Динамическая ширина выпадающего меню в header*/
	if($(window).width() > 1140){
		TopMenu();
		$(window).resize(function() {
			if(!ignoreResize.length){
				if(timerResize){
					clearTimeout(timerResize);
					timerResize = false;
				}
				timerResize = setTimeout(function(){
					try{
						ignoreResize.push(true);
						TopMenu();
					}
					catch(e){}
					finally{
						ignoreResize.pop();
					}
				}, 200);
			}
		});
	}
	/*Меняем на главной странице Хиты продаж на Хиты*/
	if($(window).width() < 767){
		$(document).find('.p_blocks').find('li.hit').text('Хиты');
	}
});

$(document).ready(function(){
	/*Выпадающее меню в header decktop*/
	$('.header_menu_desktop').find('.list_inner').each(function(){
		$(this).hover(
			function(){
				$('.header__element').css('position', 'unset');
				$(this).addClass('active');
				$(this).find('.menu_content').show();
				$('.modal').show();
				$('.modal').css('opacity', '0.52');
			},
			function(){
				$('.header__element').css('position', 'relative');
				$(this).removeClass('active');
				$(this).find('.menu_content').hide();
				$('.modal').hide();
				$('.modal').css('opacity', '0');
			}
		);
	});
	/*Выпадающее меню в header tablet mobile*/
	$('.header__burger').on('click',function(){
		var th_menu = $(this);
		if(th_menu.hasClass('close')){
			$('.header_bottom_logo').css('opacity', '1');
			$('.header_bottom.ver__mob').removeClass('mb_open');
			th_menu.removeClass('close');
			$('.header_menu_mobile').removeClass('open');
			$('.modal').hide();
			$('.modal').css('opacity', '0');
		}else{
			$('.header_bottom_logo').css('opacity', '0');
			$('.header_bottom.ver__mob').addClass('mb_open');
			th_menu.addClass('close');
			$('.header_menu_mobile').addClass('open');
			$('.modal').show();
			$('.modal').css('opacity', '0.52');
		}
		$('.modal').on('click',function(){
			$('.header_bottom_logo').css('opacity', '1');
			$('.header_bottom.ver__mob').removeClass('mb_open');
			th_menu.removeClass('close');
			$('.header_menu_mobile').removeClass('open');
			$('.modal').hide();
			$('.modal').css('opacity', '0');
		});
	});
	/*Выпадающее меню в header mobile*/
	$('.header_menu_mobile').find('.list_inner').each(function(){
		$(this).on('click', function(){
				if($(this).hasClass('active')){
					$(this).removeClass('active');
					$(this).find('.menu_content').slideUp('fast');
				}else{
					$(this).addClass('active');
					$(this).find('.menu_content').slideDown('fast');
				}
		});
	});
	/*Поиск в header*/
	$('.header_search').on("click", function(){
		$('.search-menu-block').addClass('show');
	});
	$('.close-search-btn').on("click", function(){
		$('.search-menu-block').removeClass('show');
	});
	/*Блоки распродажа, хит продаж, новинки на главной*/
	$('.offer_blocks').find('.sale').on('click', function(){
		if(!$(this).hasClass('active')){
			$('.offer_blocks').find('li').removeClass('active');
			$(this).addClass('active');
			$('.catalog_blocks').find('.block_bb').removeClass('active');
			$('.catalog_blocks').find('.sale').addClass('active');
		}
	});
	$('.offer_blocks').find('.hit').on('click', function(){
		if(!$(this).hasClass('active')){
			$('.offer_blocks').find('li').removeClass('active');
			$(this).addClass('active');
			$('.catalog_blocks').find('.block_bb').removeClass('active');
			$('.catalog_blocks').find('.hit').addClass('active');
		}
	});
	$('.offer_blocks').find('.new').on('click', function(){
		if(!$(this).hasClass('active')){
			$('.offer_blocks').find('li').removeClass('active');
			$(this).addClass('active');
			$('.catalog_blocks').find('.block_bb').removeClass('active');
			$('.catalog_blocks').find('.new').addClass('active');
		}
	});
	/*Блок фильтр на главной*/
	$('.filter_button').on('click',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('.filter_content').slideUp('slow');
		}else{
			$(this).addClass('active');
			$('.filter_content').slideDown('slow');
		}
	});
	/*Блок фильтр в разделе каталога mobile*/
	$('.filter_button_ct').on('click',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('.filter_noselect').slideUp('slow');
		}else{
			$(this).addClass('active');
			$('.filter_noselect').slideDown('slow');
		}
	});
	/*Блок фильтр на главной*/
	$('.tabs-section').find('.tb').each(function(){
		$(this).on('click', function(){
			$('.tabs-section').find('.tb').removeClass('active');
			$(this).addClass('active');
		});
	});
	/*Слайдер "Преимущества" на главной и в разделе СЗ очков*/
	$('.owl-carousel.owl-advantages').owlCarousel({
	    loop:false,
	    dots:false,
	    margin:10,
	    nav:true,
	    navText : ["<i class='fa fa-arr-left'></i>","<i class='fa fa-arr-right'></i>"],
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:3
	        },
	        1140:{
	            items:4
	        }
	    }
	});
	/*Слайдер "Бренды" на главной*/
	$('.owl-carousel.owl-brands').owlCarousel({
	    loop:false,
	    dots:false,
	    margin:64,
	    autoWidth:true,
	    nav:true,
	    navText : ["<i class='fa fa-arr-left'></i>","<i class='fa fa-arr-right'></i>"],
	    responsive:{
	        0:{
	            items:2
	        },
	        768:{
	            items:5
	        },
	        1140:{
	            items:7
	        }
	    }
	});
	/*Слайдер "Баннеры" в разделе СЗ очков*/
	$('.owl-carousel.owl-banner-section').owlCarousel({
	    loop:false,
	    dots:true,
	    margin:64,
	    nav:false,
		responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:3
	        },
	        1140:{
	            items:3
	        }
	    }
	});
	/*Слайдер "Вам так же могут понравиться" в карточке товара*/
	$('.owl-carousel.owl-offers').owlCarousel({
	    loop:false,
	    dots:false,
	    margin:10,
	    nav:true,
	    navText : ["<i class='fa fa-arr-left'></i>","<i class='fa fa-arr-right'></i>"],
	    responsive:{
	        0:{
	            items:2,
	            margin:8,
	        },
	        768:{
	            items:3
	        },
	        1140:{
	            items:4
	        }
	    }
	});
	/*Фильтр в разделах каталога*/
	$('.multifilter__elem').click(function () {
        var _this=$(this);
        var _this_parent=_this.parent();
        if(_this_parent.hasClass('open')){
            _this_parent.removeClass('open');
        }else{
            $('.multifilter__elem').parent().removeClass('open');
            _this_parent.addClass('open');
        }
    });
    $('.multifilter__list>div').click(function () {
        var _this=$(this);
        if(_this.hasClass('disabled'))return;
        _this.toggleClass('active');
        recount();
    });
    function recount() {
	    $('.filter_noselect .multifilter').each(function (i, ii) {
	        var _li = $(ii);
	        if (_li.find('.multifilter__list>div.active').length) {
	            _li.addClass('hasChange');
	        } else {
	            _li.removeClass('hasChange');
	        }
	    });
	}
	$('.item_accordion').on('click', '.plashka', function(){
		var id=$(this).attr('data-title');
		if(!$(this).hasClass('active')){
			$('.item_accordion').find('.item').removeClass('active');
			$('.item_accordion').find('.plashka').removeClass('active');
			$('#'+id).addClass('active');
			var height = $('#'+id).height() + 50 + 36;
			$('.item_accordion').css('height', height);
			$(this).addClass('active');
		}
	});
	$('.radio_one').on('click', function(){
		if(!$(this).hasClass('active')){
			$('.radio_one').removeClass('active');
			$('.item_modification').css('display', 'none');
			$(this).addClass('active');
			$('.'+$(this).attr('for')).css('display', 'block');
		}
	});
});
//Слайдер в карточке товара
$(function() {
	// карусель маленьких изображений на стрнице товара
	var $owlMaxCorusel = $('#bigProductCarousel'),
		$owlMinCorusel	= $('#miniProductCarousel');

	$owlMinCorusel.bxSlider({
    	mode:'vertical',
    	controls: true,
    	minSlides:4,
    	maxSlides:4,
    	moveSlides:1,
    	slideWidth: 100,
    	infiniteLoop:false,
    	pager: false,
    	slideMargin: 8,
    	nextText: "<i class='fa fa-arr-right'></i>",
    	prevText: "<i class='fa fa-arr-left'></i>"
    });
    $owlMaxCorusel.bxSlider({
    	mode:'horizontal',
    	controls: false,
    	minSlides:1,
    	maxSlides:1,
    	moveSlides:1,
    	infiniteLoop:false,
    	slideMargin: 0,
    	preventDefaultSwipeX: false,
    	oneToOneTouch: false,
    	touchEnabled: false,
    	pager: true,
    	responsive:{
    		0:{
    			slideWidth: 0
    		},
    		1140:{
    			slideWidth: 517
    		}
    	}
    });
	$('body').on(
		'click',
		'#miniProductCarousel .item',
		function(e) {
			e.preventDefault();
			var index = $(this).attr('data-index');
			$owlMaxCorusel.goToSlide(index);
		}
	);
})