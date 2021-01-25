const fs = require('fs');

function readProjects(projectsJSONAddress, numProjects=4){
    // This function reads a projects.json file, gets the projects details and then
    // returns a string which is basically a big html chunk
    var data = fs.readFileSync(projectsJSONAddress);
    data = JSON.parse(data);

    for (let i=1; i!=numProjects; i++){
        // Iterate through the list inside the json objects
        // currentProject = 
        // TODO
    }
}

module.exports = readProjects;