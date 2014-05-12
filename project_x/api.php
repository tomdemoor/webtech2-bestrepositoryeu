<?php 
	//https://api.instagram.com/v1/tags/weareimd/media/recent?client_id=fff4f4b9b6f64f7cbbfc48403f982c02
	//view formated json http://jsonmate.com/
	//curl doc http://codular.com/curl-with-php

	$clientId = "fff4f4b9b6f64f7cbbfc48403f982c02";
	$url = "https://api.instagram.com/v1/tags/weareimd/media/recent?client_id=" . $clientId;

	//make new curl request
	$curl = curl_init();

	//set curl options
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

	//execute curl request
	$result = json_decode(curl_exec($curl));
	//echo "<pre>"; //lijnt de json uit
	//print_r($result);
	//echo "</pre>";

	
	foreach($result->data as $results) 
    {
        //print_r($results);
        echo "<img src='" . $results->images->standard_resolution->url . "'/>";
        echo "<img src='" . $results->caption->from->profile_picture . "'/>";
        echo "<h1>" . $results->caption->from->username . "</h1>";
        echo "<p>" . $results->caption->text . "</p>";
    };


 ?><!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>


	<body>
		
	</body>
</html>