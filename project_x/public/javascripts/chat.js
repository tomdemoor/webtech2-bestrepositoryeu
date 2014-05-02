$(document).ready(function(){

  //getUSERID
  var userID = $('#userID').text();

  //DEFAULT
  $(".bulletin").append("<p class='newspost' id='p'><span class='user'>Ela bot: </span>" + "A user has been found!" + "</br></p>")

	//client aanmaken zoals op http://faye.jcoglan.com/node/clients.html
	var client = new Faye.Client('http://localhost:3000/faye/',{
				timeout: 20
	});

	//subscribe en vraag printen http://faye.jcoglan.com/browser/subscribing.html
	var postSubscribtion = client.subscribe('/post', function(message) {
      //timestamp als ID
      var timestamp = new Date().getTime();

  		//handle messages en voeg ID aan messages toe om ze uniek te maken
  		var newsPost = $(".bulletin").append("<p class='newspost' id='p" + timestamp + "'><span class='user'>" + message.user + ": </span>" + message.post + "</br></p>")
  });

  	//onclick subscribe / publish
    $('#send').on('click', function(){
  			//haal values op
  			var userVal = $('#userName').text();
  			var postVal = $('#message').val();

		//als velden leeg zijn, error kleur
		if(postVal === "" )
    	{

    		$('#message').css("border-color", "red");
    	}
    	else
    	{
    		$('#message').css("border-color", "#0dbebe");
        $('#message').val("");
			  var postPublication = client.publish('/post', {post : postVal, user : userVal}); 
	    }
    }); //einde van post button onclick

    //onclick translate
});