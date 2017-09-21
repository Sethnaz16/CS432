var express = require('express');
var router = express.Router();
//var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* Homepage */
router.get('/', function(req, res) {
  res.render('pages/index');
});

/* All News Page */
router.get('/news-sources', function(req, res){
    res.render('pages/main', {
        counter: 0
    });
});

/* Category page */
router.get('/news-sources/:category', function(req, res){
    res.render('pages/cat-view', {
        counter: 0,
        category: req.params.category
    });
});

/* Individual news page */
router.get('/news-sources/:category/:id', function(req, res){
    res.render('pages/node-news', {
        id: req.params.id
    })
});

router.get('/add', function(req, res){
    res.render('pages/add');
});

router.put('news-sources/:cat/:id', function(req, res){
    res.send('pages/update');
});

/*
// POST /login gets urlencoded bodies
router.post('/add', urlencodedParser, function (req, res) {
  res.render('pages/add');
})

*/


module.exports = router;
