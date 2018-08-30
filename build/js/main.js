TopMenu = function(){
	var width = $('header').width();
	$('.menu_content').css({'width':width+'px', 'position':'absolute'});
}
var timerResize = false, ignoreResize = [];
$(function(){
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
});

$(document).ready(function(){
	$('.header_bottom_menu').find('.list_inner').each(function(){
		$(this).hover(
			function(){
				$(this).addClass('active');
				$(this).find('.menu_content').show();
				$('.modal').show();
				$('.modal').css('opacity', '0.52');
			},
			function(){
				$(this).removeClass('active');
				$(this).find('.menu_content').hide();
				$('.modal').hide();
				$('.modal').css('opacity', '0');
			}
		);
	});
});