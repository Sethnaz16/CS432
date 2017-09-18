var express = require('express');
var app = express();
var fetch = require('node-fetch');


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.locals.data = require('./views/data.json');

/*
var data = fetch('https://newsapi.org/v1/sources?language=en')
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    });
*/

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/news-sources', function(request, response){
    response.render('pages/main', {
        counter: 0
    });
});

app.get('/news-sources/:category', function(request, response){
    response.render('pages/cat-view', {
        counter: 0,
        category: request.params.category
    });
});

app.get('/news-sources/:category/:id', function(request, response){
    response.render('pages/node-news', {
        id: request.params.id
    })
});


app.get('/cool', function(request, response){
    response.send();
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
