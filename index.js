const path = require('path');
const express = require('express');
const app = new express();
var gp = require("./generate_project");

PORT = 9999

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

// Render the HTML (that was in form of string) as new article
// Currently only one though.
/* 
TODO: 1. Add functionality to add any number of articles. 
*/

app.get('/', (req, res) => {
    res.render('home', {project: gp.get_project("aa")});
});

app.listen(PORT, () => {
    console.log("App listening on Port:", PORT);
});