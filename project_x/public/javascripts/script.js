//Javascript with Jquery Plugin
//general javascript functions

$(document).ready(function(){

	//onClick show profile menu slide
	var toggleNav = false;
	$('#account').on("click",function(){
		if(toggleNav === false){
			$("#profile").show();
			$("#profile").addClass("nav-animation");
			$(".site-container").addClass("site-container-animation");
			toggleNav = true;
		}else{
			$("#profile").hide();
			$(".site-container").removeClass("site-container-animation");
			$("#profile").removeClass("nav-animation");
			toggleNav = false;
		}
	});

	$('#profile').on("click",function(){
		if(toggleNav === false){
			$(this).show();
			$(this).addClass("nav-animation");
			$(".site-container").addClass("site-container-animation");
			toggleNav = true;
		}else{
			$(this).hide();
			$(".site-container").removeClass("site-container-animation");
			$(this).removeClass("nav-animation");
			toggleNav = false;
		}
	});
	//nextJQfunction
});