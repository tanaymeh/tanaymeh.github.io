// global.fetch = require("node-fetch");
const axios = require('axios');
const { response } = require('express');

function axiosfetchProjects(){
    var final;
    axios.get("https://api.github.com/users/heytanay/repos?sort=updated").then(res => {
            // console.log(res.data);
            final = res.data;
            return final;
        }
    ).catch(
        error => {
            console.log(error);
        }
    );
}

function fetchProjects(){
    // This fetches the latest updated projects on my Github Repo, does some error handling and then
    // returns the resulting dirty JSON

    var response = fetch("https://api.github.com/users/heytanay/repos?sort=updated");
    console.log(response);
    // Callback for successfull response
    response.then(result => {
        // Jsonify the response
        var json_response = result.json();
        // Success Callback
        json_response.then(json => {
            if (json.message){
                alert("User Github data couldn't be extracted.");
                return;
            }
            return json_response;
        })
        // Error callback
        json_response.catch(error => {
            alert("Encountered the following error: " + error.toString())
        })
    })
    // Callback to catch networking errors
    response.catch(error => {
        alert("An error occured while connecting to the server: "+error.toString());
    })
}

function parseProjectJSON(projectsJSON){
    /*  
    Reads a dirty JSON object passed from the fetcher and returns a much cleaner and processed JSON object with easy to use indices.
    Call this 'n' number of times, where 'n' is the number of projects you want to display (preferably 4).
    */

    // Try splitting names by "-"
    var title = projectsJSON.name.split("-");
    // If that failed, try splitting by capital letters
    if (title.length <= 1){
        title = projectsJSON.name.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g);

    }
    // Capitalize each word in the title
    for (let j=0; j<title.length; j++){
        title[j] = title[j][0].toUpperCase() + title[j].slice(1, title[j].length)
    }

    cleanedJSON = {
        'title': title,
        'desc': projectsJSON.description,
        'lang': projectsJSON.language
    }

    return cleanedJSON;
}

function returnProject(numProjects=4){
    // Main function that will call the other 2 functions and do some other heavy-work in itself.
    // This returns a huge html object that will comprise of "numProjects" number of projects (each in an <article> tag)
    var articleOpenTag = "<article class='col-6 col-12-xsmall work-item'>";
    var articleCloseTag = "</article>";
    var dirtyAnchorCache = "<a href='https://raw.githubusercontent.com/heytanay/melanoma-cancer-detection/master/images/effnet_siim.png' class='image fit thumb'>";
    var dirtyImageCache = "<img src='https://raw.githubusercontent.com/heytanay/melanoma-cancer-detection/master/images/effnet_siim.png'/>";
    var anchorCloseTag = "</a>";
    var headingOpenTag = "<h3>";
    var headingCloseTag = "</h3>";
    var paraOpenTag = "<p>";
    var paraCloseTag = "</p>";

    // First, fetch the projects
    dirtyProjectJSON = axiosfetchProjects();
    console.log(dirtyProjectJSON);

    // Loop through how many projects I want, format them, add them in the right form.
    var allArticles = "";
    for (let i=0; i<numProjects; i++){
        // Get the cleaner and formatted version of the current number of project we are parsing through.
        currentProjectJSON = parseProjectJSON(dirtyProjectJSON[i]);

        allArticles += articleOpenTag + dirtyAnchorCache + dirtyImageCache + anchorCloseTag + headingOpenTag + currentProjectJSON.title + anchorCloseTag + headingCloseTag + paraOpenTag + currentProjectJSON.desc + "<br>Main Languages: " + currentProjectJSON.lang + paraCloseTag + articleCloseTag;
    }
    return allArticles;
}

module.exports.get_project = returnProject;