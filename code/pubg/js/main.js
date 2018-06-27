$(document).ready(function(){
		$('.side_banner02 .owl-carousel').owlCarousel({
			loop:true,
			items:1,
			autoplay:Boolean,
			autoplayTimeout:3000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',

		})
		$('.slide_banner01 .owl-carousel').owlCarousel({
		loop:true,
		items:2,
		nav:true
	})
		$('.slide_banner02 .owl-carousel').owlCarousel({
		loop:true,
		items:3,
		nav:true,
		margin:10
	})
	
});

	$(window).scroll(function(){
		var scT = $(window).scrollTop();
		var scBtm = scT+$(window).height();
		var nav = scT+$('.main_navi').offset().top;
		var slide01 = $('.banner02_01').offset().top;
		var slide02 = $('.banner02_02').offset().top;
		var slide03 = $('.banner02_03').offset().top;


		if(nav > 50){
			$('.main_navi').addClass('fixed');
		}else{
			$('.main_navi').removeClass('fixed');
		}
		if(scBtm > slide01){
			$('.banner02_01').addClass('onon');
		}
		if(scBtm > slide02){
			$('.banner02_02').addClass('onon');
		}
		if(scBtm > slide03){
			$('.banner02_03').addClass('onon');
		}
	});


	$(document).on('mousemove',function(e){
		var bgImg = $('.eventbg01')
		var bgImg3 = $('.eventbg03'),
  		mX = e.pageX,  //마우스 X축 좌표값
  	  mY = e.pageY;  //마우스 Y축 좌표값
      
	bgImg.css({
  	'transform' : 'translate('+mX/500+'%'+','+mY/500+'%)',
    '-webkit-transform' : 'translate('+mX/500+'%'+','+mY/500+'%)',
  })
	bgImg3.css({
  	'transform' : 'translate('+mX/500+'%'+','+mY/500+'%)',
    '-webkit-transform' : 'translate('+mX/500+'%'+','+mY/500+'%)',
  })
  
  
})


	$(function(){
		$('.slide02 a').click(function() {
			var address = $(this);
			$('.banner_thumb a iframe').attr('src',address.attr('href')).attr('src',address.attr('href'));
			$(this).parent().parent().addClass('on').siblings().removeClass('on');
			return false;
		});
	});