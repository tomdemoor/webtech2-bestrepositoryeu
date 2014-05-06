$(document).ready(function(){

  //getUSERID
  var userID = $('#userID').text();

    //userpic
    var userPIC = '<img src="https://graph.facebook.com/' + userID + '/picture" alt="" class="chatPIC">';
    var elaPIC = '<img src="../stylesheets/assets/logos/ela_thumb.png" alt="" class="chatPIC">';

  //DEFAULT
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

    Logger = {

    }
     
    client.addExtension(Logger);

    /*Logger = {
      incoming: function(message, callback) {
        console.log('incoming', message);
        callback(message);
      },
      outgoing: function(message, callback) {
        console.log('outgoing', message);
        callback(message);
      }
    };

    client.addExtension(Logger);*/

    /*var userDC = client.subscribe('/userdc', function(message) {
      //timestamp als ID
      var timestamp = new Date().getTime();

      //handle messages en voeg ID aan messages toe om ze uniek te maken
      $(".bulletin").append("<div>" + elaPIC + " <p class='chatpost' id='p'><span class='user'>Ela bot: </span>" + message.user + " has disconnected." + "</br></p></div>")
    });   */

    /*$(window).on('beforeunload', function (e) {
      
      var postVal = "";

      var userDCpub = client.publish('/userdc', {user : userVal});

      $.ajax({
        url: "/",
        type: "GET",
        async: false
      });
    });*/
    
    /*WRM GGAAT DEES NI*/

    /*var userDC = client.subscribe('/userdc', function(message) {
      //timestamp als ID
      var timestamp = new Date().getTime();

      //handle messages en voeg ID aan messages toe om ze uniek te maken
      $(".bulletin").append("<div>" + elaPIC + " <p class='chatpost' id='p'><span class='user'>Ela bot: </span>" + message.user + " left the conversation." + "</br></p></div>");
    });
  

    $(window).on('beforeunload', function () {
      var userVal = $('#userName').text();

      var userDCpub = client.publish('/userdc', {user : userVal});

      return "ehe";
    });*/

//$(".bulletin").append("<div>" + elaPIC + " <p class='chatpost' id='p'><span class='user'>Ela bot: </span>" + userVal + " has disconnected." + "</br></p></div>");

    /*client.bind('transport:down', function() {
    // Fires when the connection is lost
      var userVal = $('#userName').text();

      $(".bulletin").append("<div>" + elaPIC + " <p class='chatpost' id='p'><span class='user'>Ela bot: </span>" + userVal + " has disconnected." + "</br></p></div>");

    });*/

    /*var ServerDC = {
      incoming: function(message, callback) {
      if(message.channel === '/meta/disconnect') {
        var userVal = $('#userName').text();
         $(".bulletin").append("<div>" + elaPIC + " <p class='chatpost' id='p'><span class='user'>Ela bot: </span>" + userVal + " has disconnected." + "</br></p></div>");
      }
    }

    client.addExtension(ServerDC);*/

    //onclick translate
});