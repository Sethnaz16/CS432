// Fetch method to retrieve json data
var fetch = require('node-fetch');


function fetcher(url, app){
    fetch(url)
        .then(function(res) {
            return res.json();
        }).then(function(data) {
            app.locals.jsdata = data;
        }).catch(function(error){
        console.log(JSON.stringify(error));
    });
}




module.exports = { fetcher };