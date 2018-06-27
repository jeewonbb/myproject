$(document).ready(function(){
    $(".loading_bg").show(3000);
	$(".loading_img").fadeIn(1000);
	$(".loading_img").fadeOut();
	$(".loading_bg").delay(1500).fadeOut();
});
/*$(document).ready(function(){
	$("#section01 a").fadeIn(4000);
	$("#section02 a").fadeIn(5000);
	$("#section03 a").fadeIn(6000);
	$("#section04 a").fadeIn(7000);
	
});*/

$(function(){
		$('.section00 a').hover(function(){
  		$(this).parent().siblings().toggleClass('on');
  
		})
  });
		$(function() {
			$('.section00').mouseenter(function(){
				var playTab = $(this).attr('data-tab');
				$('section00').removeClass('play');
				$('.section_bg ul li').removeClass('play');
				$(this).addClass('play');
				$('.' + playTab).addClass('play');
				
			})
			$('.section00').mouseleave(function(){
				$(this).removeClass('play');
				$('.section_bg ul li').removeClass('play');
			})
		});
		$(window).scroll(function(){
		var scT = $(window).scrollTop();
		var scBtm = scT+$(window).height();
		var slide01 = $('.section01>.imgslide').offset().top;
		var slide02 = $('.section02>.imgslide').offset().top;
		var slide03 = $('.section03>.imgslide').offset().top;
		var slide04 = $('.section04>.imgslide').offset().top;
		var slide05 = $('.section05>.imgslide').offset().top;
		var nav = $('.nav_title').offset().top;
		var scF = $('#footer').offset().top;

		if(scBtm >= slide01){
			$('.section01>.imgslide').css('transform','translate(0)');
		}else{
			$('.section01>.imgslide').css('transform','translate(-250%)');
		}
		if(scBtm >= slide02){
			$('.section02>.imgslide').css('transform','translateX(0)');
		}else{
			$('.section02>.imgslide').css('transform','translateX(250%)');
		}
		if(scBtm >= slide03){
			$('.section03>.imgslide').css('transform','translateX(0)');
		}else{
			$('.section03>.imgslide').css('transform','translateX(-250%)');
		}
		if(scBtm >= slide04){
			$('.section04>.imgslide').css('transform','translateX(0)');
		}else{
			$('.section04>.imgslide').css('transform','translateX(250%)');
		}
		if(scBtm >= slide05){
			$('.section05>.imgslide').css('transform','translateX(0)');
		}else{
			$('.section05>.imgslide').css('transform','translateX(-250%)');
		}
		if(scF < nav){
			$('.nav_title').css('transform','translateX(250%)');
		}else{
			$('.nav_title').css('transform','translateX(0)');
		}
});

		$(document).ready(function(){
			var vdo = $('.imgslide02 #myvideo').get(0);
			$('.imgslide02 .click_btn').on('click',function(){
			vdo.play();

			$('.imgslide02 #myvideo').on('click',function(){
			vdo.pause();
			})
			
			})
})

	$(document).ready(function(){
			var vdo = $('.imgslide05 #myvideo02').get(0);
			$('.imgslide05 .click_btn02').on('click',function(){
			vdo.play();

			$('.imgslide05 #myvideo02').on('click',function(){
			vdo.pause();
			})
			
			})
})