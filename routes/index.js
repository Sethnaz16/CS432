var express = require('express');
var router = express.Router();

/* Homepage */
router.get('/', function(request, response) {
  response.render('pages/index');
});

/* All News Page */
router.get('/news-sources', function(request, response){
    response.render('pages/main', {
        counter: 0
    });
});

/* Category page */
router.get('/news-sources/:category', function(request, response){
    response.render('pages/cat-view', {
        counter: 0,
        category: request.params.category
    });
});

/* Individual news page */
router.get('/news-sources/:category/:id', function(request, response){
    response.render('pages/node-news', {
        id: request.params.id
    })
});

module.exports = router;
