$(document).ready(function(){

  //getUSERID
  var userID = $('#userID').text();

  //bot pic
  var elaPIC = '<img src="../stylesheets/assets/logos/ela_thumb.png" alt="" class="chatPIC">';

  //DEFAULT: BOT PRESENCE IN CHAT
  $(".bulletin").append("<div>" + elaPIC + " <p class='chatpost'><span class='user'>Ela bot: </span>" + "A user has been found!" + "</br></p></div>")

	//client aanmaken zoals op http://faye.jcoglan.com/node/clients.html
	var client = new Faye.Client('http://localhost:3000/faye/',{
				timeout: 20
	});

	//subscribe en vraag printen http://faye.jcoglan.com/browser/subscribing.html
	var postSubscribtion = client.subscribe('/post', function(message) {
      //timestamp als ID
      var timestamp = new Date().getTime();

  		//handle messages en voeg ID aan messages toe om ze uniek te maken
  		var newsPost = $(".bulletin").append("<div>" + message.pic + " <p class='chatpost' id='p" + timestamp + "'><span class='user'>" + message.user + ": </span><span class='translateMSG' style='cursor: pointer;' onclick='translateME(m" + timestamp + ")' id='m" + timestamp + "'>" + message.post + "</span></br></p></div>");
  });

  	//onclick subscribe / publish
    $('#send').on('click', function(){
  			//haal values op voor publish
  			var userVal = $('#userName').text();
  			var postVal = $('#message').val();
        var userPIC = '<img src="https://graph.facebook.com/' + userID + '/picture" alt="" class="chatPIC">';

		//als velden leeg zijn, error kleur
		if(postVal === "" )
    	{
    		$('#message').css("border-color", "red");
    	}
    	else
    	{
    		$('#message').css("border-color", "#0dbebe");
        $('#message').val("");
			  var postPublication = client.publish('/post', {post : postVal, user : userVal, pic : userPIC}); 
	    }
    }); //einde van post button onclick

    //nen enter hetzeflde /publish
    $('#message').keypress(function(e) {
      if(e.which == 13) {
              //haal values op
          var userVal = $('#userName').text();
          var postVal = $('#message').val();
          var userPIC = '<img src="https://graph.facebook.com/' + userID + '/picture" alt="" class="chatPIC">';
          
      //als velden leeg zijn, error kleur
        if(postVal === "" )
        {
          $('#message').css("border-color", "red");
        }
        else
        {
          $('#message').css("border-color", "#0dbebe");
          $('#message').val("");
          var postPublication = client.publish('/post', {post : postVal, user : userVal, pic : userPIC}); 
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
      var userLoc = $('#location').text();

      //handle messages en voeg ID aan messages toe om ze uniek te maken
      $(".bulletin").append("<div>" + elaPIC + " <p class='chatpost'><span class='user'>Ela bot: </span>" + message.user + " has entered the chatroom from " + userLoc + "." + "</br></p></div>");
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
      $(".bulletin").append("<div>" + elaPIC + " <p class='chatpost'><span class='user'>Ela bot: </span>" + message.user + " has left the chatroom." + "</br></p></div>");
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

  //http://jsfiddle.net/n9YLp/1/
  //http://social.msdn.microsoft.com/Forums/en-US/0ed61e34-1199-4000-8575-7976d7b98067/jquery-ajax-bing-translator?forum=microsofttranslator
  //http://msdn.microsoft.com/en-us/library/ff512421.aspx
  //http://www.microsoft.com/web/post/using-the-free-bing-translation-apis
  //http://msdn.microsoft.com/en-us/library/hh454950.aspx
  //http://msdn.microsoft.com/en-us/library/ff512385.aspx
  //http://kitmenke.com/blog/2013/08/27/use-jquery-to-call-the-microsoft-translator-ajax-api/
  //http://stackoverflow.com/questions/11679217/microsoft-azure-translator-ajax-api-not-working

  //url wordt custom php script op server
  //server roept aan en geeft resultaat

function translateME(id){
      var result = "";
      var chatVal = $(id).text();

      $.ajax({
                //crossDomain: true,
                url: "/language",
                type: "POST",
                data: {chatVal: chatVal},
                dataType: 'json',
                success: function(response) //Wnr get succesvol is gaat hij deze functie uitvoeren
                {
                  if(response != ""){
                    console.log(response);
                    result = response.data.detections[0].language;
                    console.log(result);
                  }
                },
                error: function() {
                    alert("error");
                }
      });

      //TRANSLATE

      var langToo = $('#langBox').val();

      window.mycallback = function(response) {
        $(id).text(response);
      }

      //78280AF4DFA1CE1676AFE86340C690023A5AC139
      //68D088969D79A8B23AF8585CC83EBA2A05A97651

      var s = document.createElement("script");
      s.src = "http://api.microsofttranslator.com/V2/Ajax.svc/Translate?oncomplete=mycallback&appId=78280AF4DFA1CE1676AFE86340C690023A5AC139&from="+ result+ "&to=" + langToo + "&text=" + chatVal;

      document.getElementsByTagName("head")[0].appendChild(s);
  };

  /*TRANSLATE API*/

  //https://github.com/troygoode/node-cors

  /*function ajaxTranslate(textToTranslate, fromLanguage, toLanguage) {
      //object aanmaken voor translate
      var p = {};
      p.appid = 'ByNC7HeVB3mLDJEZ3ctDvE1PgS80hxapToSaqDIv0Z8=';
      p.to = toLanguage;
      p.from = fromLanguage;
      p.text = textToTranslate;
      console.log(p);
      //geef object aan API
      $.ajax({
        url: 'http://api.microsofttranslator.com/V2/Ajax.svc/Translate',
        data: p,
        dataType: 'jsonp',
        jsonp: 'oncomplete',
        jsonpCallback: 'ajaxTranslateCallback',
        complete: function(request, status) {
          alert('complete: '+status);
        },
        success: function(data, status) {
          alert('success: data-'+data+',status-'+status);
        },
        error: function(request, status, error) {
          alert('error: status-'+status+',desc-'+error);
        }
      });
  } 

  function ajaxTranslateCallback(response) { 
    alert('ajaxTranslateCallback('+response+')'); 
  }*/
    
    // Get an access token now.  Good for 10 minutes.
    /*getToken();
    // Get a new one every 9 minutes.
    setInterval(getToken, 9 * 60 * 1000);

    function getToken() {
      //token scriptje
      //var requestStr = "../php/token.php";

      var clientID = "th1s1smy4ppimtr4nsl4t1ngw1thf0r3l4";
      var clientSecret = "57DkrwiR97DJ6AUah9StWW391rVgRdg3X8kQIbRVRQc=";
      var requestStr = "https://datamarket.accesscontrol.windows.net/v2/OAuth2-13grant_type=client_credentials&client_id=" + clientID + "&client_secret=" + clientSecret + "&scope=http://api.microsofttranslator.com";

      console.log(requestStr);

      $.ajax({
        url: requestStr,
        type: "GET",
        cache: true,
        dataType: 'json',
        success: function (data) {
          JSON.stringify(data)
          g_token = data.access_token;
        }
      });

      console.log(g_token);
    }

    function translateME(id){
      console.log(g_token);
    };*/
