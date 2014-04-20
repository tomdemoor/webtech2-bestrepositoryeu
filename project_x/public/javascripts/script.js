//Javascript with Jquery Plugin
console.log(rddy);

$(document).ready(function(){

	//onClick show profile menu slide
	var toggleNav = false;
	$('#account').on("click",function(){
		if(toggleNav === false){
			/*$("#profile").show();
			$("#profile").addClass("nav-animation");
			$(".site-container").addClass("site-container-animation");*/
			toggleNav = true;
			console.log(toggleNav);
		}else{
			/*$("#profile").hide();
			$(".site-container").removeClass("site-container-animation");
			$("#profile").removeClass("nav-animation");*/
			toggleNav = false;
			console.log(toggleNav);
		}
	});

	/*$('#profile').on("click",function(){
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
	});	*/

});