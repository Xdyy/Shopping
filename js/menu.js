$(function(){
	
	for (var i = 0; i < $('.right>ul>li').length; i++) {
		if((i+1)%6==0){
			
			$('.right>ul>li').eq(i).css({'border-left-color':'#CCC','border-left-style':'solid','border-left-width':'1px'})
				
		}
		
	}
	
	$('.right>ul>li').children('div').show()
	
	$('.right>ul>li').mouseover(function(){
		$(this).addClass('cur').siblings().removeClass('cur')
		$(this).siblings().children('div').hide()
		$(this).children('div').show()
	})
	
})