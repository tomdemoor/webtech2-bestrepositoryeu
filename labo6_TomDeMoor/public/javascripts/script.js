//msgid maken buiten doc.ready zodat deze voro elke gebruiker hetzelfde zijn
//var postID = 0;

$(document).ready(function(){

	//client aanmaken
	//zoals op http://faye.jcoglan.com/node/clients.html
	var client = new Faye.Client('http://localhost:3000/faye/',{
				timeout: 20
	});

	//subscribe, vraag printen
	//http://faye.jcoglan.com/browser/subscribing.html
	var postSubscribtion = client.subscribe('/post', function(message) {
  		// handle messages
      //voeg ID aan messages toe om ze uniek te maken
      //id='p" + postID + "'
  		$(".bulletin").append("<p class='newspost'><span class='user'>" + message.user + "</span><span class='posted'> posted:</span></br>" + message.post + "</br><div class='vote'>vote</div></p>")
	});

  var voteSubscribtion = client.subscribe('/vote', function(btn) {
      //apply effect on parent
      $(btn.vote).css("color","red");
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
			  var postPublication = client.publish('/post', {post : postVal, user : userVal});
    	  //postID++;
      }
    //maxlength 100 characters al defined in index.jade  

	}); //einde van post button onclick

	//on click van vraag, maak groter
  $('.vote').on('click', function()
  {
      var voteParent = this.parent();
      console.log("clicked");

      //GAAT NI, WANT DN VOTE DIE GWN ALLE MSGES, TOCH NOG MET ID WERKEN

      //var votePublication = client.publish('/vote', {vote : voteParent});
  });

});