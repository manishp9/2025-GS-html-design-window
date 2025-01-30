$(document).ready(function(){
new WOW().init();
});


$(window).scroll(function(){
    if ($(this).scrollTop() > 0) {
		$('.header-main').addClass('fixed');
		$("body").removeClass("slip");
		$(".toogle-menu").slideUp();
    } else {
       $('.header-main').removeClass('fixed');
    }
});


$(".trigger").click(function(e){
		e.preventDefault();
		$("body").toggleClass("slip");
		$(".toogle-menu").slideToggle();
});


$(".opacity-div").click(function(e){
		e.preventDefault();
		$("body").removeClass("slip");
		$(".toogle-menu").slideUp();
});
