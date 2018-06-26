$(function(){
		$('.inner04 .pofol .over').click(function() {
			var pop = $(this).attr('data-tab');
				$('.popup').removeClass('on');
				$('.popup_wrap div').removeClass('on');
				$(this).addClass('on');
				$('.' + pop).addClass('on');

				$('.popup').click(function(){
				$(this).removeClass('on');
			})
		
		});
	});

$(function(){
	$("#nav a").click(function(e){
	var index=$(this).index();
	var top=$("section").eq(index).offset().top;
	   e.preventDefault();
		$("#nav a").removeClass("menuon");
		$(this).addClass("menuon");

	   $("html,body").stop().animate({scrollTop:top}, 500);
   return false;
	})
});

$(function(){
	$("#nav a:first-child").click(function(){
		$('html, body').stop().animate( { scrollTop : 0 } );
	})
});

$(function(){
	$("#section01 .button").click(function(){
		$("html,body").stop().animate({scrollTop:$("#section02").offset().top} );
	})
});

$(function(){
	$("#header li a").click(function(){
	var index=$(this).parents("li").index()
	var top=$("section").eq(index+1).offset().top;

	$("html,body").stop().animate({scrollTop:top}, 500);
	return false;
	});
});

$(window).scroll(function(){
		var scT = $(window).scrollTop();
		var scBtm = scT+$(window).height();
		var s01 = $('.section01').offset().top;
		var s02 = $('.section02').offset().top;
		var s03 = $('.section03').offset().top;
		var s04 = $('.section04').offset().top;
		var s05 = $('.section05').offset().top;

		if(scT > s01){
			$("#nav a").removeClass("menuon")
			$("#nav a:first-child").addClass("menuon");
		}
		if(scT > s02-100){
			$("#nav a").removeClass("menuon")
			$("#nav a:nth-child(2)").addClass("menuon");
		}
		if(scT > s03-100){
			$("#nav a").removeClass("menuon")
			$("#nav a:nth-child(3)").addClass("menuon");
		}
		if(scT > s04-100){
			$("#nav a").removeClass("menuon")
			$("#nav a:nth-child(4)").addClass("menuon");
		}
		if(scT > s05-100){
			$("#nav a").removeClass("menuon")
			$("#nav a:last-child").addClass("menuon");
		}
});

/*$(function(){
	$('.menuicon a').on('click',function(){
		$(this).addClass('active');
		$('.menu02').slideDown();
	
	});


});*/
$(function(){
		$('.menuicon').click(function(){
		$(this).children().toggleClass('active');
		$('.menu02').slideToggle();
	  });

	});