const express = require('express');
const app = new express();
const fs = require('fs');
const readProjects = require('./readProjects');

var PORT = 9999

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    // This renders the home page.
    res.render('home', {projects: readProjects("./projects/projects.json")});
});

app.listen(PORT, () => {
    console.log("App listening on Port:", PORT);
});