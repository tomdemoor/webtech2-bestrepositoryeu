//Essential Functions for prototype

var gotCountry=false;

$(document).ready(function () {
	if(localStorageAvailable())
	{
		var country = localStorage.getItem('country');
		
		if (country === null)
	    {
	    	getCountry();
	    }else{
	    	var d = new Date();
	    	var oneDayAgo = d.getTime() - 86400000; //86400000 milisec = 1 day
	    	var countryTimestamp = localStorage.getItem("countryTimestamp");

	    	//if the storage variables are older than a day, renew em.
	    	if(countryTimestamp>oneDayAgo)
	        {
	            $("#location").text(country);
	        }
	        else
	        {
	        	//opnieuw gegevens ophalen
	        	getCountry();  
	        }
	    }
	}else{
		getCountry();
	}	
});

function getCountry()
{
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position) {
	        $.getJSON('http://api.geonames.org/countrySubdivisionJSON?', {
	            lat: position.coords.latitude,
	            lng: position.coords.longitude,
	            username: 'tommoore'
	        }, function(result) {
	        	$("#location").text(result.countryName);

	        	if(localStorageAvailable())
				{
					//timestamp zetten
			        var d = new Date();
			        localStorage.setItem("countryTimestamp",d.getTime());
			        localStorage.setItem("country",result.countryName);

			        console.log(localStorage.getItem("countryTimestamp"));
			        console.log(localStorage.getItem("country"));
				}

	        });
	    });
	}else{
		$("#location").text("Geolocation is not supported by this browser.");
	}
}

//modernizer (can i localstorage?)
function localStorageAvailable()
{
	if (Modernizr.localstorage) {
	  return true;
	} else {
	  return false;
	}
}
