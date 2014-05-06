$(document).ready(function(){

  //getUSERID
  var userID = $('#userID').text();

  //userpic & bot pic
  var userPIC = '<img src="https://graph.facebook.com/' + userID + '/picture" alt="" class="chatPIC">';
  var elaPIC = '<img src="../stylesheets/assets/logos/ela_thumb.png" alt="" class="chatPIC">';

  //DEFAULT: BOT PRESENCE IN CHAT
  $(".bulletin").append("<div>" + elaPIC + " <p class='chatpost' id='p'><span class='user'>Ela bot: </span>" + "A user has been found!" + "</br></p></div>")

	//client aanmaken zoals op http://faye.jcoglan.com/node/clients.html
	var client = new Faye.Client('http://localhost:3000/faye/',{
				timeout: 20
	});

	//subscribe en vraag printen http://faye.jcoglan.com/browser/subscribing.html
	var postSubscribtion = client.subscribe('/post', function(message) {
      //timestamp als ID
      var timestamp = new Date().getTime();

  		//handle messages en voeg ID aan messages toe om ze uniek te maken
  		var newsPost = $(".bulletin").append("<div>" + userPIC + " <p class='chatpost' id='m" + timestamp + "'><span class='user'>" + message.user + ": </span>" + message.post + "</br></p></div>");
  });

  	//onclick subscribe / publish
    $('#send').on('click', function(){
  			//haal values op voor publish
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

    //nen enter hetzeflde /publish
    $('#message').keypress(function(e) {
      if(e.which == 13) {
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
      }
    });

    /*http://faye.jcoglan.com/browser/extensions.html*/
    /*http://faye.jcoglan.com/node.html*/
    /*http://faye.jcoglan.com/node/extensions.html*/
    /*https://groups.google.com/forum/#!topic/faye-users/EQwzcs2swY8*/

    /*USER CONNECTS: FAYE PUBLISHES MESSAGE*/

    var userConnect = client.subscribe('/userconnect', function(message) {
      //timestamp als ID
      var timestamp = new Date().getTime();

      //handle messages en voeg ID aan messages toe om ze uniek te maken
      $(".bulletin").append("<div>" + elaPIC + " <p class='chatpost' id='p'><span class='user'>Ela bot: </span>" + message.user + " has entered the chatroom." + "</br></p></div>");
    }); 

    client.addExtension({
    incoming: function(message, callback) {
      if (message.channel === '/meta/handshake') {
        var userVal = $('#userName').text();
        var userConnectPublish = client.publish('/userconnect', {user : userVal});
      }
      callback(message);
      }
    });

    /*USER DISCONNECTS: FAYE PUBLISH MESSAGE*/

    var userConnect = client.subscribe('/userdisconnect', function(message) {
      //timestamp als ID
      var timestamp = new Date().getTime();

      //handle messages en voeg ID aan messages toe om ze uniek te maken
      $(".bulletin").append("<div>" + elaPIC + " <p class='chatpost' id='p'><span class='user'>Ela bot: </span>" + message.user + " has left the chatroom." + "</br></p></div>");
    }); 

    client.addExtension({
    incoming: function(message, callback) {
      if (message.channel === '/meta/disconnect') {
        var userVal = $('#userName').text();
        var userConnectPublish = client.publish('/userdisconnect', {user : userVal});
        //publish duurt te lang wanneer we wegnavigeren voor het script op uit te voeren?
        //omdat die al dc'd is kan die geen messages meer studern?

        //hij kan wel console doen en alerten want das ni me faye
        console.log("unsub");
      }
      callback(message);
      }
    });
});