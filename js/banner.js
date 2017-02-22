$(function(){
	for (var i = 0; i < $('.banner li').length; i++) {
		$('.round').append('<span></span>')
	};
	$('.round span').mouseover(function() {
		var i=$(this).index()
		$('.banner li').eq(i).fadeIn(600).siblings().fadeOut(100)
		$(this).addClass('cur').siblings().removeClass('cur')
		clearInterval(timer)
	}).mouseleave(function(event) {
		var i=$(this).index()
		autoPlay(i+1)
	});

	var i=0;
	var timer=null;
	$('.round span').eq(0).addClass('cur')
	function autoPlay(i)
	{		
		clearInterval(timer)
		timer=setInterval(function()
		{
			if(i>$('.banner li').length-2)
			{
				i=0;
				$('.banner li').eq(i).fadeIn(600).siblings().fadeOut(100)
				$('.round span').eq(i).addClass('cur').siblings().removeClass('cur')
			}
			else
			{
				i++;
				$('.banner li').eq(i).fadeIn(600).siblings().fadeOut(100)
				$('.round span').eq(i).addClass('cur').siblings().removeClass('cur')
			}
		}
	,1600)
	}

	autoPlay(i)
})