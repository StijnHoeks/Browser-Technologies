var express = require('express')
var request = require('request')
var app = express()
var host = 'https://randomuser.me/api/?results=50&nat=nl';

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function (req, res) {
  request(host, function (error, response, body) {
    var data = JSON.parse(body);
    var results = data.results;

    results.sort(function(a, b) {
		var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
		var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		// names must be equal
		return 0;
	});
    
    var lastFirstLetter;
    var templateData = [];
   	var dataPerLetter = null;
    results.forEach(function (result) {
    	if (lastFirstLetter !== result.name.first.charAt(0)) {
    		if (dataPerLetter !== null) {
    			templateData.push(dataPerLetter);
    		}
    		dataPerLetter = {
    			letter: result.name.first.charAt(0),
    			data: []
    		}
    	}
    	dataPerLetter.data.push(result);
    	lastFirstLetter = result.name.first.charAt(0);
    });    
    res.render('index', {data: templateData})
  });
})

var server = app.listen(1337, function () {
   console.log('server is running on port 1337')
})
