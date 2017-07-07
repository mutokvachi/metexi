$('.main .drop_down').mouseover(function(){
	$('.main .hover').stop().fadeIn();
	$('.main .drop_down').css('color', '#f6f7f7');
});
$('.main .drop_down').mouseout(function(){
	$('.main .hover').stop().fadeOut();
});

$('.main .search .searcher').click(function(){
	$('.main .search img').hide();
	$('.main .main_nav li').hide();
	$('.main .search_form').show();
	$('.main .main_nav .globe li').show();
	$('.main .main_nav .globe').show();
	$('.main .main_nav .search').show();
	$('.main .search').append('<img src="images/fa-close.png" class="exit_search" style="width:15px;z-index:15;">');


	$('.main .exit_search').click(function(){
		$('.main .search_form').hide();
		$('.main .exit_search').remove();
		$('.main .search img').show();
		$('.main .main_nav li').show();
	});
});

$('#fixed_book_open').click(function(){
	$('.main .booking').show();
	$('.fixed_book').hide();
	$('#fixed_book_close').show();
	
});
$('#fixed_book_close').click(function(){
	$('.main .booking').hide();
	$('.fixed_book').show();
});

$('.main .menu').click(function(){
	$('.main .main_nav li:nth-child(-n+7)').fadeIn();
	$('.main .social_black').fadeIn('slow');
	$('.main .close_menu').show();
	$('.main .main_nav .globe,.search,.menu,.search_2').hide();
});
$('.main .close_menu').click(function(){
	$('.main .close_menu').hide();
	$('.main .main_nav li:nth-child(-n+7)').fadeOut();
	$('.main .social_black').hide();
	$('.main .main_nav .globe,.search,.menu,.search_2').fadeIn('slow');
});

$('.main .search_2').click(function(){
	$('.cover_search').fadeIn();
	$('.search_closer').fadeIn();

	$('.search_closer').click(function(){
		$('.cover_search').fadeOut();
		$('.search_closer').fadeOut();
	});
});

$(document).ready(function(){
	$('.our_clients .owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	            nav:false
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:false,
	            loop:false
	        },
	        1400:{
	            items:7,
	            nav:false,
	            loop:false
	        },
	        1800:{
	            items:9,
	            nav:false,
	            loop:false
	        }
	    }
	});
});
$(document).ready(function(){
	$('.services .owl-carousel').owlCarousel({
	    loop:true,
	    margin:50,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        530:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:false,
	            loop:false
	        },
	        1400:{
	            items:3,
	            nav:false,
	            loop:false
	        },
	        1800:{
	            items:3,
	            nav:false,
	            loop:false
	        }
	    }
	});
});

