function Weather(now, tomorrow)
{
    this.now = now;
    this.tomorrow = tomorrow;

    this.startApp();
}


Weather.prototype.startApp = function()
{
    var xcoords = localStorage.getItem("xcoords");
    var ycoords = localStorage.getItem("ycoords");
    var weatherData = localStorage.getItem("weatherData");

    //als gegevens leeg zijn, haal ze binnen
    if (weatherData === null){
        console.log("weatherData is leeg");
        this.getLocation();
        this.getCity(xcoords,ycoords);
        this.getWeather(); 
        this.setWeather();
    }else{
        console.log("weatherData is niet leeg");
        //If weatherData nieuwer dan 30 mins, gebruik data
        //timestamp meegegeven wnr data in localstorage wordt geplaatst
        var d = new Date();
        var weatherTimestamp = localStorage.getItem("weatherTimestamp");
        var thirtyMinsAgo = d.getTime() - 1800000; //1800000 milisec = 30 mins
        // als timestamp in mili groter is dan nu-30mins
        if(weatherTimestamp>thirtyMinsAgo)
        {
            console.log("weatherData cached data gebruikt jonger dan 30 mins");
            this.setWeather();
        }
        // timestamp gaat op een gegeven moment kleiner zijn waardoor 30 mins geleden of meer de cache hernieuwd is
        // dan gaan we terug gegevens binnenhalen
        else{
          console.log("weatherData was verouderd en wordt opnieuw opgehaald");
            this.getLocation();
            this.getCity(xcoords,ycoords);
            this.getWeather();
            this.setWeather();
        }
    }    
}

//Zoek de locatie van de gebruiker om weer te bepalen
Weather.prototype.getLocation = function()
{
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(this.setCoords);
    }
    else
    {
      $("#city").text("Geolocation is not supported by this browser.");
      console.log("Geolocation is not supported by this browser.");
    } 
}

Weather.prototype.setCoords = function(position)
{
    var xcoords = position.coords.latitude;
    var ycoords = position.coords.longitude;

    localStorage.setItem("xcoords",xcoords);
    localStorage.setItem("ycoords",ycoords);

    console.log(localStorage.getItem("xcoords"));
    console.log(localStorage.getItem("ycoords"));
}

Weather.prototype.getCity = function(xcoords,ycoords)
{
    //https://developers.google.com/maps/documentation/geocoding/#JSON
    //reverse geocodingdeel

    this.xcoords = xcoords;
    this.ycoords = ycoords;
    var apiLatlng = "?latlng="+xcoords+","+ycoords;
    var apiSensor = "&sensor=true";
    var apiKey = "&key=AIzaSyD9qHSs9dLe9A8yfxAce7lwWrpWHN2EioM";
    var apiUrl = "https://maps.googleapis.com/maps/api/geocode/json"+apiLatlng+apiSensor+apiKey;

    console.log(apiUrl);

    $.ajax({
        type: "GET",
        url: apiUrl,
        dataType: 'json',
        success: function(response) //Wnr get succesvol is gaat hij deze functie uitvoeren
        {
            //set city
            var city = response.results[0].address_components[2].long_name;
            localStorage.setItem("city", city);
        }
    });
}

Weather.prototype.getWeather = function()
{ 
    //Gegevens nodig voor api aan te spreken
    var xcoords = localStorage.getItem("xcoords");
    var ycoords = localStorage.getItem("ycoords");
    var apiKey = "521b6d1c316a5c94ec24999766d38196";
    var apiUrl = "https://api.forecast.io/forecast/"+apiKey+"/"+xcoords+","+ycoords;
    console.log(apiUrl);

    $.ajax({
        type: "GET",
        url: apiUrl,
        dataType: 'jsonp',
        success: function(response) //Wnr get succesvol is gaat hij deze functie uitvoeren
        {
            console.log("got weather data from server");
            localStorage.setItem("weatherData",JSON.stringify(response));

            //timestamp zetten
            var d = new Date();
            localStorage.setItem("weatherTimestamp",d.getTime());
            console.log(localStorage.getItem("weatherTimestamp"));
        }
    });
}

Weather.prototype.setWeather = function()
{
    console.log("ready to set data from api");
    //get data 
    var weatherData = localStorage.getItem("weatherData");
    var localWeatherData = JSON.parse(weatherData);

    //Welke dag vandaag en morgen
        var d=new Date();
        var weekday=new Array(7);
        weekday[0]="Sunday";
        weekday[1]="Monday";
        weekday[2]="Tuesday";
        weekday[3]="Wednesday";
        weekday[4]="Thursday";
        weekday[5]="Friday";
        weekday[6]="Saturday";
        //vandaag
        var dtoday = weekday[d.getDay()]; 
        console.log(dtoday);  
        $("#now-date").text(dtoday);
        //morgen
        if(dtoday===weekday[6])
        {
            var dtomorrow = weekday[0];
            console.log(dtomorrow);
            $("#tom-date").text(dtomorrow);
        }else{
            var dtomorrow = weekday[d.getDay()+1];
            console.log(dtomorrow);
            $("#tom-date").text(dtomorrow);
        }

    //welke temperatuur nu
        var tempF = localWeatherData.currently.temperature;
        console.log(tempF);
        var tempC = Math.round((tempF- 32) * (5 / 9));
        $("#now-degrees").text(tempC+"°");

    //description 
        var txtNow = localWeatherData.currently.summary;
        console.log(txtNow);   
        $("#now-txt").text(txtNow);
        //24 hours from now
        var txtTomorrow = localWeatherData.daily.data[0].summary;
        console.log(txtTomorrow); 
        $("#tom-txt").text(txtTomorrow);

    //city
        var city = localStorage.getItem("city");
        $("#loc-city").text(city);

    //icon 
        //http://adamwhitcroft.com/climacons/
        //http://darkskyapp.github.io/skycons/
        //https://github.com/darkskyapp/skycons
        /*var icon = localWeatherData.currently.icon;
        console.log(icon);
        $("#now-icon").*/

        var icon = localWeatherData.currently.icon;
        localStorage.setItem("icon",icon);
        console.log(icon);
}

/*initiate*/
var weather = new Weather($("#now"), $("#tomorrow"));

//icon plugin
var icon = localStorage.getItem("icon");

var skycons = new Skycons({"color": "#333333"});
skycons.set("now-icon", icon);
skycons.play();
