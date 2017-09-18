var express = require('express');
var app = express();
var routes = require('./routes/index');
var fetchdata = require('./microservices/fetch-data');


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use('/', routes);
const url = 'https://newsapi.org/v1/sources?language=en';
fetchdata.fetcher(url, app); // Send url and instance of app to microservice

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
