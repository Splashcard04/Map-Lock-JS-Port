const bombs = difficulty._bombs;
const walls = difficulty._obstacles;
const notes = difficulty._notes;
const environment = customData._environment;
const customEvents = customData._customEvents;

/**
 * 
 * @param {*} t1 Time it starts
 * @param {*} t2 Time it ends
 * @param {*} customWallData The custom data, for now only 1 customdata for between v1
 */



function wallsBetween(t1, t2, customWallData){
    filteredwalls = walls.filter(n => n._time >= t1 && n._time < t1);
    filteredwalls.forEach(wall => {
        //wall._customData._animation = {}
        customWallData
    })
}

export default wallsBetween;


