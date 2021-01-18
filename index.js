const path = require('path');
const express = require('express');
const app = new express();
var gp = require("./getProjects");

var PORT = 9999
var PROJECTS_TO_SHOW = 4

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    // This renders the home page.
    // We are also invoking the getProjects.js script here that does the heavy work of getting the latest projects from my Github Repo.
    var allProjects = gp.get_project(PROJECTS_TO_SHOW)
    res.render('home', {projects: allProjects, num_projects: PROJECTS_TO_SHOW});
});

app.listen(PORT, () => {
    console.log("App listening on Port:", PORT);
});