
const bombs = difficulty._bombs;
const walls = difficulty._obstacles;
const notes = difficulty._notes;
const environment = customData._environment;
const customEvents = customData._customEvents;


/**
 * 
 * @param {*} disabled True/False if set to true then the environment wont exist
 * @param {*} scalex Scale x of the environment, set to 1 for default
 * @param {*} scaley Scale y of the environment, set to 1 for default
 * @param {*} scalez Scale z of the environment, set to 1 for default
 * @param {*} posx Position on the x axis, set to 0 for default
 * @param {*} posy Position on the y axis, set to 0 for default
 * @param {*} posz Position on the z axis, set to 0 for default
 */


 function envSettings(disabled, scalex, scaley, scalez, posx, posy, posz){
    
    if(disabled === true){
        environment.push(
            {
                    "_id" : "Environment",
                    "_lookupMethod": "Contains",
                    "_position" : [-9999, -9999, -9999]
            }
        )
    }
    else{
        environment.push(
            {
                "_id" : "Environment",
                    "_lookupMethod": "Contains",
                    "_scale" : [scalex, scaley, scalez],
                    "_position" : [posx, posy, posz]
            }
        )
    }
}

export default envSettings;
