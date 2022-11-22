const customData = difficulty._customData;
const walls = difficulty._obstacles;
const notes = difficulty._notes;
const bombs = difficulty.bombs;
const environment = customData._environment;
const customEvents = customData._customEvents;

/**
 * 
 * @param {*} t1 Time it starts
 * @param {*} t2 Time it ends
 * @param {*} customNoteData The custom data, for now only 1 customdata for between v1
 */



function notesBetween(t1, t2, customNoteData){
    filterednotes = notes.filter(n => n._time >= t1 && n._time < t1);
   filterednotes.forEach(note => {
     note._customData._animation = {}
     customNoteData
     
   })
}





export default notesBetween;
