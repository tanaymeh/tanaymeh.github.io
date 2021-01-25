const fs = require('fs');
var articleOpenTag = "<article class='col-6 col-12-xsmall work-item'>";
var articleCloseTag = "</article>";
var headingOpenTag = "<h3>";
var headingCloseTag = "</h3>";
var paraOpenTag = "<p>";
var paraCloseTag = "</p>";


function readProjects(projectsJSONAddress, numProjects=3){
    // This function reads a projects.json file, gets the projects details and then
    // returns a string which is basically a big html chunk
    var data = fs.readFileSync(projectsJSONAddress);
    data = JSON.parse(data);

    var projectHTMLCache = "";
    for (let i=0; i<numProjects; i++){
        // Get all the attributes of the project from the current JSON entry
        var currentProjectTitle = data.projects[i].title;
        var currentProjectImgSrc = data.projects[i].img_src;
        var currentProjectDesc = data.projects[i].description;
        var currentProjectSrc = data.projects[i].source;
        var currentImg = data.projects[i].img;

        // Write the current stuff to the HTML cache
        projectHTMLCache += articleOpenTag + "<a href='" + currentImg + "' class='image fit thumb'" + "'>" + currentProjectImgSrc + "</a>" + headingOpenTag + "<a href='" + currentProjectSrc + "'>" + currentProjectTitle + "</a>" + headingCloseTag + "<p>" + currentProjectDesc + "</p>" + articleCloseTag;
    }
    console.log(projectHTMLCache);
    return projectHTMLCache;
}

module.exports = readProjects;