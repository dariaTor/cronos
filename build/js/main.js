TopMenu = function(){
	var width = $('header').width();
	$('.menu_content').css({'width':width+'px', 'position':'absolute'});
}
var timerResize = false, ignoreResize = [];
$(function(){
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
	if($(window).width() < 767){
		$(document).find('.p_blocks').find('li.hit').text('Хиты');
	}
	$('.ui.dropdown')
	.dropdown()
	.transition('slide down');
	// $('.ui.dropdown').find('.menu').transition('slide up');
});

$(document).ready(function(){
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
	$('.header_search').on("click", function(){
		console.log('tut1');
		$('.search-menu-block').addClass('show');
	});
	$('.close-search-btn').on("click", function(){
		console.log('tut2');
		$('.search-menu-block').removeClass('show');
	});
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
	$('.filter_button').on('click',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('.filter_content').slideUp('slow');
		}else{
			$(this).addClass('active');
			$('.filter_content').slideDown('slow');
		}
	});
	$('.tabs-section').find('.tb').each(function(){
		$(this).on('click', function(){
			$('.tabs-section').find('.tb').removeClass('active');
			$(this).addClass('active');
		});
	});
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
});