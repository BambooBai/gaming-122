$(function () {


	// 视屏切换
	// $('.ct_video_l').click(function () {
	// 	$('.ct_video_l img').attr('src','images/video_l_.png');
	// 	$('.ct_video_r img').attr('src','images/video_r.png');

	// 	$('.ct_video_m div ul li').replaceWith('<li><div style="max-width: 100%;"><div><embed id="1465971539695" name="1465971539695" src="http://assets.dwstatic.com/video/vpp.swf" wmode="transparent" allowFullScreen="true" quality="high" height="280" width="500" align="middle" allowScriptAccess="always" flashvars="uu=a04808d307&vu=&continous_play=0&auto_play=1&videoId=0&vid=2307932&width=640&height=360&channelId=lol&no_recommend=1" type="application/x-shockwave-flash"> </embed></div></div></li>');
	// })
	// $('.ct_video_r').click(function () {
	// 	$('.ct_video_r img').attr('src','images/video_r_.png');
	// 	$('.ct_video_l img').attr('src','images/video_l.png');
	// 	$('.ct_video_m div ul li').replaceWith('<li><div style="max-width: 100%;"><div><embed id="1465971539695" name="1465971539695" src="http://assets.dwstatic.com/video/vpp.swf" wmode="transparent" allowFullScreen="true" quality="high" height="280" width="500" align="middle" allowScriptAccess="always" flashvars="uu=a04808d307&vu=&continous_play=0&auto_play=1&videoId=0&vid=2307932&width=640&height=360&channelId=lol&no_recommend=1" type="application/x-shockwave-flash"> </embed></div></div></li>');
	// })
		// 视屏切换
	$('.ct_video_l').click(function () {

		b_xmzy_top_img_turn(726, 1);

	})
	$('.ct_video_r').click(function () {
		b_xmzy_top_img_turn(-726, -1);

	})

	function b_xmzy_top_img_turn (turn_,turn_symbol) {
		var nowL=b_xmzy_top_img_judge();
		var liLength=($('.ct_video_m div li').length-1)*726;
		if ((nowL<=-liLength&&turn_symbol==-1)||(nowL>=0&&turn_symbol==1))turn_=0; 
		var liLength_=($('.ct_video_m div li').length)*726;
		var t=parseInt(-liLength)+726;
		if (nowL==t&&turn_symbol==-1) {
			$('.ct_video_r img').attr('src','images/video_r_.png');
			$('.ct_video_l img').attr('src','images/video_l.png');
			$('.ct_video_m li:first-child iframe').attr('src','');
			$('.ct_video_m li:last-child iframe').attr('src','http://www.plu.cn/static/player.html?url=http%3A%2F%2Fr.plures.net%2Fplu%2Fplayer%2Fvideo-share-id18sm8a1.swf%3FcloudMediaId%3D1497372%26autoPlay%3D0%26videoTitle%3Dintel%25e9%25ab%2598%25e6%25b8%2585%25e5%25b9%25bf%25e5%2591%258a%26roomId%3D233441');

		}
		else if(nowL==-726&&turn_symbol==1){
			$('.ct_video_l img').attr('src','images/video_l_.png');
			$('.ct_video_r img').attr('src','images/video_r.png');
			$('.ct_video_m li:last-child iframe').attr('src','');
			$('.ct_video_m li:first-child iframe').attr('src','http://www.plu.cn/static/player.html?url=http%3A%2F%2Fr.plures.net%2Fplu%2Fplayer%2Fvideo-share-id18sm8a1.swf%3FcloudMediaId%3D1497526%26autoPlay%3D0%26videoTitle%3Dintel%25e5%25b9%25bf%25e5%2591%258a%25e7%25b4%25a0%25e6%259d%25902%26roomId%3D233441');

		}
		if(!$('.ct_video_m  ul').is(":animated")){
			$('.ct_video_m   ul').animate({'marginLeft':'+='+turn_},function(){

			});
		}
	}
	function b_xmzy_top_img_judge(){
		var nowL=$('.ct_video_m   ul').css('marginLeft').split('px')[0];
		return nowL;
	}
	// 风暴英雄
	$('.ct_tab_tit  li').click(function () {
		$(this).addClass('ct_tab_tit_checked').siblings().removeClass('ct_tab_tit_checked');
		var index_=parseInt($(this).index())+1;
		$('.ct_tab').css('background','url(images/tab_'+index_+'_bg.jpg) no-repeat 7px top');
		$('.ct_tab_info li').eq($(this).index()).addClass('ct_tab_info_checked').siblings().removeClass('ct_tab_info_checked');

	})
	$('.ct_tab_tit  li').hover(function () {
		$(this).addClass('ct_tab_tit_checked').siblings().removeClass('ct_tab_tit_checked');
		var index_=parseInt($(this).index())+1;
		$('.ct_tab').css('background','url(images/tab_'+index_+'_bg.jpg) no-repeat 7px top');
		$('.ct_tab_info li').eq($(this).index()).addClass('ct_tab_info_checked').siblings().removeClass('ct_tab_info_checked');
	})
	// 
	$('.ct_blade_turn li').click(function () {
		$(this).addClass('ct_blade_checked').siblings().removeClass('ct_blade_checked');
		var w_=$('.ct_blade_ ul li').width();
		var left_=$(this).index()*w_;
		$('.ct_blade_ ul').animate({'margin-left':-left_+'px'},800);
	})
// tab
$('.ct_tab_info_l a').hover(function () {
	$(this).find('img').attr('src','images/pro_jt.png');
},function(){
	$(this).find('img').attr('src','images/pro_jt_.png');
})

$('.ct_blade_  ul li:nth-child(3) .ct_blade_l .ct_blade_l_r a').css('margin-top','40px');
$('.ct_blade_  ul li:nth-child(3) .ct_blade_l .ct_blade_l_r a').css('margin-top','18px');

// 指定位置
$('#header a').click(function(){
	var t = $('.ct_1 p').offset().top;
	$(window).scrollTop(t);
})

});