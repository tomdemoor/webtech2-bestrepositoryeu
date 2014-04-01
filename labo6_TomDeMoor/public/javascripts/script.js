$(document).ready(function(){

	//client aanmaken
	//zoals op http://faye.jcoglan.com/node/clients.html
	var client = new Faye.Client('http://localhost:3000/faye/',{
				timeout: 20
	});

	//subscribe, vraag printen
	//http://faye.jcoglan.com/browser/subscribing.html
	var subscription = client.subscribe('/post', function(message) {
  		// handle messages
  		$(".bulletin").append("<p class='newspost'><span class='user'>" + message.user + "</span><span class='posted'> posted:</span></br>" + message.post + "</p>")
	});
  		//onclick subscribe / publish
  		$('#send').on('click', function(){
  			//haal values op
  			var userVal = $('#user').val();
  			var postVal = $('#question').val();

		//als velden leeg zijn, error msg
		if(userVal === "" || postVal === "" )
    	{
    		$(".error").text("Please enter name and message.");
    		$(".error").show();
    	}
    	else
    	{
    		$(".error").text("");
    		$(".error").hide();
    		$('#question').val("");
			var publication = client.publish('/post', {post : postVal, user : userVal});
    	}

	}); //einde van post button onclick

	//on click van vraag, maak groter

});