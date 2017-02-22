// JavaScript Document
$(function(){
	
	$('.title li').eq(0).addClass('active')
	$('.content').eq(0).show()
	$('.title li').click(function(){
		var i=$(this).index()
		$(this).addClass('active').siblings().removeClass('active')
		$('.content').hide()
		$('.content').eq(i).show()
	})
})