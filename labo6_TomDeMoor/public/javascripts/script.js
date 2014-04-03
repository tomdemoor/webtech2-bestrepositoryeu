$(document).ready(function(){

	//client aanmaken zoals op http://faye.jcoglan.com/node/clients.html
	var client = new Faye.Client('http://localhost:3000/faye/',{
				timeout: 20
	});

	//subscribe en vraag printen http://faye.jcoglan.com/browser/subscribing.html
	var postSubscribtion = client.subscribe('/post', function(message) {
      //timestamp als ID
      var timestamp = new Date().getTime();

  		//handle messages en voeg ID aan messages toe om ze uniek te maken
  		var newsPost = $(".bulletin").append("<p class='newspost' id='p" + timestamp + "'><span class='user'>" + message.user + "</span><span class='posted'> posted:</span></br>" + message.post + "</br><div class='vote' id='v" + timestamp + "'>vote</div></p>")
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
      }
    //maxlength 100 characters al defined in index.jade  
	  }); //einde van post button onclick

  //get all posts
  var allPostsSubscription = client.subscribe('/allposts', function(vote) {
      //elke vote hoort bij een index
      var upVoteID = vote.index;

      //vote id nr post id converteren
      var thePostID = upVoteID.replace("v","p");
      console.log(thePostID);

      //voor elke .vote gaan we overlopen of de index van de vote waar 
      //op geklikt is overeenkomt met die van de post
      $.each($(".newspost"), function(key,value){
        var sexyID = $(this)[0].id;

        //als die hetzelfde is gaan we die size groter maken
        if(sexyID === thePostID)
        {
          //get font size http://stackoverflow.com/questions/15154601/detect-font-size-in-pixels-using-jquery
          var fontSize = parseInt($("#" + thePostID).css('font-size'));
          $("#" + thePostID).css('font-size', fontSize*1.1 + "px");
        }
      });
  });

    //click on .vote within .bullet
    $(".bulletin").on("click",".vote",function(event){
      //index verkrijgen van welke .vote we moeten publishen
      var voteID = $(this)[0].id;

      //publish met index
      client.publish("/allposts",{index: voteID});

    });//einde van vote button on click

});