// JavaScript Document
$(function(){
	
	$('.left>ul>li').eq(0).children('ul').show()
	$('.left>ul>li').eq(0).find('span').html('-')
	
	$('.left>ul>li>a').mousedown(function(){
		
		var i=$(this).parent().index()
		$('.left>ul>li').siblings().children('ul').hide()
		$('.left>ul>li').eq(i).children('ul').show()
		$('.left>ul>li').siblings().find('span').html('+')
		$('.left>ul>li').eq(i).find('span').html('-')
		
	})
	
	
	$('.left>ul>li>span').mousedown(function(){
		
		var i=$(this).parent().index()
		var fuhao=$('.left>ul>li').eq(i).find('span').html()
		if(fuhao=='-'){
			$(this).html('+')
		}else{
			$(this).html('-')
		}
		var i=$(this).parent().index()
		$('.left>ul>li').eq(i).children('ul').fadeToggle()
		
	})
	
})