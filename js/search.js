// JavaScript Document
$(function(){
	$('.text').mousedown(function(){
		$('.list').show()
	}).blur(function(){
		$('.list').hide()
	})
	$('.search').mouseleave(function(){
		$('.list').hide()
	})
	$('.list li').mousedown(function(){
		$('.text').val($(this).html())
	})
	
	$(window).scroll(function(){
		var win=$(window).scrollTop()
		var myheight=$('.top').height()
		if(win>=myheight+290)
		{
			$('.search_1').css({
				visibility:'visible',
				opacity:'0.6',
				top:'0'
			});

		}
		else
		{
			$('.search_1').css({
				visibility:'hidden',
				opacity:'0',
				top:'-10%'
			});
		}
	})
	
})