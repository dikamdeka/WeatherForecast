var weather;
var api =  'https://api.openweathermap.org/data/2.5/weather?q=';
// var city = 'London';
var api_key = '&appid=b7f29c4cd9922a3245b6de1abcef865c';
var units = '&units=metric';

var input;
var tempbox;
var humidbox;
var min1;
var max1;

function setup(){
	noCanvas();
	// createCanvas(600,400);
	var button = select('#button');
	button.mousePressed(getWeather);

	input = select('#city');
	tempbox = select('#temp');
	humidbox = select('#humid');
	min1 = select('#min');
	max1 = select('#max');

}

function getWeather(){
	var url1 = api + input.value() + api_key + units;
	loadJSON(url1, gotData);
}

function gotData(data){
	weather = data;
	// console.log(weather);
	var temp = weather.main.temp;
	var humidity = weather.main.humidity;
	var minTemp = weather.main.temp_min;
	var maxTemp = weather.main.temp_max;
	tempbox.html(temp);
	humidbox.html(humidity);
	min1.html(minTemp);
	max1.html(maxTemp);


}

