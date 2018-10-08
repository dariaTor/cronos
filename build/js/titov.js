// Кнопка изменения типа
$('body').on('click', '.change-type-button', function(){
	var parent = $(this).parent();
	if($(this).attr('data-val') == 'left'){
		parent.removeClass('right').addClass('left');
	}
	else if($(this).attr('data-val') == 'right'){
		parent.removeClass('left').addClass('right');
	}
});

// открытие/скрытие селекта
$('body').on('click', '.js-form-select', function(){
	if( $(this).find('ul').css('display') == 'none' ){ // если список закрыт
		$(this).find('ul').slideDown(300); // открываем выпадающий список
		$(this).find('.form-select-link').addClass('active'); // помечаем псевдо-select как активный
		$(this).find('.form-select-back').css('display','block'); // подключаем задний фон, чтобы при клике мимо, селект закрылся
	}
	else{ // если список открыт
		$(this).find('ul').slideUp(300); // скрываем выпадающий список
		$(this).find('.form-select-link').removeClass('active'); // убираем активность
		$(this).find('.form-select-back').css('display','none'); // убираем задний фон
	}
});

// выбор из селекта
$('body').on('click', '.js-select-choise', function(){
	$("#"+$(this).attr('data-id')).val($(this).attr('data-val')); // помещаем значение в скрытый input 
	$("#"+$(this).attr('data-id')+"_val").html($(this).html()); // меняем заголовок нашего selecta 
	$('.js-form-select').find('ul').slideUp(300); // закрываем список
});

// Страница "Адреса салонов" переключение между картой и списком
$('body').on('click', '.js-addres-open-map', function(){
	if($('.js-addresses-map-box').is(":hidden")){
		$('.js-addresses-text-box').slideUp(300);
		$('.js-addresses-map-box').slideDown(300);
		
	}
});
$('body').on('click', '.js-addres-open-list', function(){
	if($('.js-addresses-text-box').is(":hidden")){
		$('.js-addresses-text-box').slideDown(300);
		$('.js-addresses-map-box').slideUp(300);
		
	}
});