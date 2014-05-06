//Javascript with Jquery Plugin
//general javascript functions

$(document).ready(function(){

	//onClick show profile menu slide
	var toggleNav = false;
	$('#account').on("click",function(){
		if(toggleNav === false){
			$("#profile").removeClass("nav-animation-back");
			$(".site-container").removeClass("site-container-animation-back");

			$("#profile").addClass("nav-animation");
			$(".site-container").addClass("site-container-animation");
			toggleNav = true;
		}else{
			$("#profile").addClass("nav-animation-back");
			$(".site-container").addClass("site-container-animation-back");

			$(".site-container").removeClass("site-container-animation");
			$("#profile").removeClass("nav-animation");
			toggleNav = false;
		}
	});

	$('#profile').on("click",function(){
		if(toggleNav === false){
			$(this).addClass("nav-animation");
			$(".site-container").addClass("site-container-animation");
			
			$(this).removeClass("nav-animation-back");
			$(".site-container").removeClass("site-container-animation-back");
			toggleNav = true;
		}else{
			$(".site-container").removeClass("site-container-animation");
			$(this).removeClass("nav-animation");
			
			$(".site-container").addClass("site-container-animation-back");
			$(this).addClass("nav-animation-back");
			
			toggleNav = false;
		}
	});
	//nextJQfunction
});