// Get Location from ipinfo.io
var ipLoc;
var latitude = "";
var longitude = "";
var xmlhttpip = new XMLHttpRequest();
xmlhttpip.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        latitude =  myObj.loc.split(",")[0];
        longitude =  myObj.loc.split(",")[1];
        //document.getElementById("title").innerHTML = "The Weather in " +  myObj.city + " is";
        document.getElementById("lat").innerHTML = "Latitude: " +  myObj.loc.split(",")[0] ;
        document.getElementById("long").innerHTML = "Longitude: " +  myObj.loc.split(",")[1] ;

    }
};
xmlhttpip.open("GET", "http://ipinfo.io/json", true)
xmlhttpip.send();
//document.getElementById("title").innerHTML = "The Weather in " +  latitude + " is";



// Get the weather from openweathermap.org by using an AJAX request
var iconUrl = "http://openweathermap.org/img/w/"
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myWeatherObj = JSON.parse(this.responseText);

      document.getElementById("wind").innerHTML = "Wind Speed: " + myWeatherObj.wind.speed + " meters/sec";
        document.getElementById("location").innerHTML = myWeatherObj.name;
      document.getElementById("weather").innerHTML = myWeatherObj.weather[0].description;
        document.getElementById("humidity").innerHTML = "Humidity is " + myWeatherObj.main.humidity + "%";
        document.getElementById("temp").innerHTML = myWeatherObj.main.temp + "<sup> &#8451;</sup>";
        document.getElementById("icon").innerHTML = "<img class='img-responsive' src='" + iconUrl + myWeatherObj.weather[0].icon +".png" +  "' " + "alt='weather icon'>";
        document.getElementById("city").innerHTML = "http://api.openweathermap.org/data/2.5/weather?lat="+ latitude+"&lon="+longitude+"&units=metric&APPID=a97ac8512b855c7a557f17fa8b10d4da";

    }
};
 xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat="+ latitude+"&lon="+longitude+"&units=metric&APPID=a97ac8512b855c7a557f17fa8b10d4da", true);
// xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=51.62&lon=-8.9&units=metric&APPID=a97ac8512b855c7a557f17fa8b10d4da", true);
xmlhttp.send();
