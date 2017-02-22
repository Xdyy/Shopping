// JavaScript Document

$(function(){
		
	for (var i = 0; i < $('.right dl').length; i++) {
		if(i%5==0){
			
			$('.right dl').eq(i).children('dt').show()
			$('.right dl').eq(i).find('span').css({'background-color':'#f22e00','border':'1px solid #d02602'})
			$('.right dl').eq(i).find('a').css({'white-space':'normal','height':'36px'})
			$('.right dl').eq(i).find('em').css('display','block')
				
		}
		
	};
	$('.right dl').mouseover(function(){
		
		var i=$('.right dl').index(this)
		$(this).siblings().children('dt').hide()
		$(this).children('dt').show()
		$(this).siblings().find('span').css({'background-color':'#b0b0b0','border':'1px solid #9f9f9f'})
		$(this).find('span').css({'background-color':'#f22e00','border':'1px solid #d02602'})
		$(this).siblings().find('a').css({'white-space':'nowrap','height':'auto'})
		$(this).find('a').css({'white-space':'normal','height':'36px'})
		$(this).siblings().find('em').hide()
		$(this).find('em').css('display','block')
		
		
	})
	
})