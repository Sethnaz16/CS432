var express = require('express');
var app = express();
var routes = require('./routes/index');
app.locals.global;
var fetch = require('node-fetch');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

fetch('https://newsapi.org/v1/sources?language=en')
.then(function(res) {
    return res.json();
}).then(function(json){
    global = json;
});
console.log(global);



app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/', routes);
//const url = 'https://newsapi.org/v1/sources?language=en';
//fetchdata.fetcher(url, app); // Send url and instance of app to microservice

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/* Homepage */
app.get('/', function(req, res) {
  res.render('pages/index');
});

/* All News Page */
app.get('/news-sources', function(req, res){
    res.render('pages/main', {
        counter: 0
    });
});

/* Category page */
app.get('/news-sources/:category', function(req, res){
    res.render('pages/cat-view', {
        counter: 0,
        category: req.params.category
    });
});

/* Individual news page */
app.get('/news-sources/:category/:id', function(req, res){
    res.render('pages/node-news', {
        id: req.params.id
    })
});

app.get('/add', function(req, res){
    res.render('pages/add');
});

app.put('/update/cat/0',  urlencodedParser, function(req, res){
    res.redirect('pages/node-news');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
