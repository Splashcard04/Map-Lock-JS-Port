const bombs = difficulty._bombs;
const walls = difficulty._obstacles;
const notes = difficulty._notes;
const environment = customData._environment;
const customEvents = customData._customEvents;

/**
 * 
 * @param {*} t1 Time customData starts
 * @param {*} t2 Time customData ends
 * @param {*} customBombData The custom data, for now only 1 customdata for between v1
 */


function bombsBetween(t1, t2, customBombData){
    filteredbombs = bombs.filter(n => n._time >= t1 && n._time < t1);
    filteredbombs.forEach(bomb => {
        //bomb._customData._animation = {}
        customBombData
    })
}

export default bombsBetween;