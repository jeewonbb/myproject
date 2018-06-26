	$(document).ready(function(){
		$('.box02_inner>.owl-carousel').owlCarousel({
			autoplayHoverPause:Boolean,
			autoplay:Boolean,
			loop:true,
			items:2
		});
	});


	$(function(){
		$('.box02_inner .box02_in01').addClass('onom');
		$('.box02_inner .box02_1st').addClass('onom');
		$('.box02_inner h3').on('click',function(e){
			e.preventDefault();
			$('.box02_inner .box02_in').removeClass('onom');
			$('.box02_inner>p').removeClass('onom');
			$('.box02_inner h3').removeClass('onom');
			$(this).parent().children().addClass('onom');
		})


});
$(function(){
	$('.hamburger').click(function(e){
		e.preventDefault();
		$('.all_menu, .shadow').addClass('active');
	
	});
	$('.shadow').click(function(e){
		e.preventDefault();
		$('.all_menu, .shadow').removeClass('active');
	
	$('.all_menu').one('transitionend', function(){
		$(".shadow").removeClass('active');
	});

	});

});