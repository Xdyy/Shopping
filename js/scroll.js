$(function(){

	//根据图片个数，循环出所有的span
	for (var i = 0; i < $('.banner li').length; i++) {
		$('.btn_1').append('<span></span>')
	};

	//鼠标移入/移出时，左右箭头效果
	$('.banner').mouseover(function(event){
		clearInterval(timer);
		$('.left_1').animate({left:'6px',opacity:0.6},360)
		$('.right_1').animate({right:'6px',opacity:0.6},360)
	}).mouseleave(function(event){
		$('.left_1').animate({left:'-45px',opacity:0},360)
		$('.right_1').animate({right:'-45px',opacity:0},360)
		autoPlay()
	})

	var i=0;//全局变量I，初始为0；
	var timer=null;//定义定时器为空；
	$('.btn_1 span').eq(0).addClass('cur_1');//页面加载后，给第一个span按钮添加样式
		clearInterval(timer);

		//向左按钮点击事件
	$('.left_1').click(function(event) {
				
				clearInterval(timer);

		if(i>=$('.banner li').length-1)
		{
			i=0
			$('.banner ul').animate({left:-$('.banner li').width()*i}, "slow")
			$('.btn_1 span').eq(i).addClass('cur_1').siblings().removeClass('cur_1')
		}
		else
		{
			i++;
			$('.banner ul').animate({left:-$('.banner li').width()*i}, "slow")
			$('.btn_1 span').eq(i).addClass('cur_1').siblings().removeClass('cur_1')
		}
	});

		//向右按钮点击事件
	$('.right_1').click(function(event) {

			clearInterval(timer);

			if(i>0)
			{
				i--;
				$('.banner ul').animate({left:-$('.banner li').width()*i}, "slow")
				$('.btn_1 span').eq(i).addClass('cur_1').siblings().removeClass('cur_1')
			}
			else
			{
				i=$('.banner li').length-1;
				$('.banner ul').animate({left:-$('.banner li').width()*i}, "slow")
				$('.btn_1 span').eq(i).addClass('cur_1').siblings().removeClass('cur_1')
			}	
	});

	

		//span鼠标移入/移出时事件
	$('.btn_1 span').mouseover(function() {
		var i=$('.btn_1 span').index(this);
		$('.banner ul').animate({left:-$('.banner li').width()*i}, "slow")
		$('.btn_1 span').eq(i).addClass('cur_1').siblings().removeClass('cur_1')
		clearInterval(timer);
	})
	
		//自动播放
	function autoPlay()
	{
		clearInterval(timer);
		timer=setInterval(
			function(){
				if(i<$('.banner li').length-1)
				{
					i++;
					$('.banner ul').animate({left:-$('.banner li').width()*i}, "slow")
					$('.btn_1 span').eq(i).addClass('cur_1').siblings().removeClass('cur_1')
				}
				else if(i>=$('.banner li').length-1)
				{
					i=0;
					$('.banner ul').animate({left:-$('.banner li').width()*i}, "slow")
					$('.btn_1 span').eq(i).addClass('cur_1').siblings().removeClass('cur_1')
				}
			}
		,2000)
		
	}
autoPlay()//执行自动播放
})