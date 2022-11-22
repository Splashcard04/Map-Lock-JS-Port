

"use strict";
const fs = require('fs');

const INPUT = "EasyLightshow.dat"
const OUTPUT = "NormalStandard.dat"

let difficulty = JSON.parse(fs.readFileSync(INPUT));

difficulty._customData = { _environment: [], _customEvents: [] };

const customData = difficulty._customData;
const walls = difficulty._obstacles;
const notes = difficulty._notes;
const environment = customData._environment;
const customEvents = customData._customEvents;

let filterednotes
let filteredwalls

walls.forEach(wall => {
	if (!wall._customData) {
		wall._customData = {}
	}
})

notes.forEach(note => {
	if (!note._customData) {
		note._customData = {}
	}
})

function Random(min, max) {
	max++;
	return Math.random() * (max - min) + min;
}

function GiveNotesTrack(track, t1, t2) {
	filterednotes = notes.filter(n => n._time >= t1 && n._time <= t2)
	filterednotes.forEach(note => {
		if (!note._customData._track) note._customData._track = track;
		else if (Array.isArray(note._customData._track)) note._customData._track.push(track)
		else if (note._customData._track != track) note._customData._track = [note._customData._track, track]
	})
}

function GiveWallsTrack(track, t1, t2) {
	filteredwalls = walls.filter(n => n._time >= t1 && n._time <= t2)
	filteredwalls.forEach(wall => {
		if (!wall._customData._track) wall._customData._track = track;
		else if (Array.isArray(wall._customData._track)) wall._customData._track.push(track)
		else if (wall._customData._track != track) wall._customData._track = [wall._customData._track, track]
	})
}

function GiveNoteTypesTrack(Type0Track, Type1Track, t1, t2) {
	filterednotes = notes.filter(n => n._time >= t1 && n._time <= t2)
	filterednotes.forEach(note => {
		if (note._type == 0) {
			if (!note._customData._track) note._customData._track = Type0Track
			if (Array.isArray(note._customData._track)) note._customData._track.push(Type0Track)
			else if (note._customData._track != Type0Track) note._customData._track = [note._customData._track, Type0Track]
		}
		if (note._type == 1) {
			if (!note._customData._track) note._customData._track = Type1Track
			if (Array.isArray(note._customData._track)) note._customData._track.push(Type1Track)
			else if (note._customData._track != Type0Track) note._customData._track = [note._customData._track, Type1Track]
		}
	})
}

function GiveNoteLanesTrack(Lane1Track, Lane2Track, Lane3Track, Lane4Track, t1, t2) {
	filterednotes = notes.filter(n => n._time >= t1 && n._time <= t2)
	filterednotes.forEach(note => {
		if (note._lineLayer == 0) {
			if (!note._customData._track) note._customData._track = Lane1Track
			if (Array.isArray(note._customData._track)) note._customData._track.push(Lane1Track)
			else if (note._customData._track != Lane1Track) note._customData._track = [note._customData._track, Lane1Track]
		}
		if (note._lineLayer == 1) {
			if (!note._customData._track) note._customData._track = Lane2Track
			if (Array.isArray(note._customData._track)) note._customData._track.push(Lane2Track)
			else if (note._customData._track != Lane2Track) note._customData._track = [note._customData._track, Lane2Track]
		}
		if (note._lineLayer == 2) {
			if (!note._customData._track) note._customData._track = Lane3Track
			if (Array.isArray(note._customData._track)) note._customData._track.push(Lane3Track)
			else if (note._customData._track != Lane3Track) note._customData._track = [note._customData._track, Lane3Track]
		}
		if (note._lineLayer == 3) {
			if (!note._customData._track) note.customData._track = Lane4Track
			if (Array.isArray(note._customData._track)) note._customData._track.push(Lane4Track)
			else if (note._customData._track != Lane4Track) note._customData._track = [note._customData._track, Lane4Track]
		}
	})
}

const precision = 4

// WRITE YOUR SCRIPT IN HERE ˇ

/**
 * 
 * @param {*} object The Id of the object
 * @param {*} lookupM This is the lookup method, Regex, Contains, etc.
 * @param {*} active True/False statment. If set to true then the environment will be gone.
 * @param {*} sclx Scale on the x axis, set to 1 for default
 * @param {*} scly Scale on the y axis, set to 1 for default
 * @param {*} sclz Scale on the z axis, set to 1 for default
 * @param {*} posx Position on the x axis, set 0 for default
 * @param {*} posy Position on the y axis, set 0 for default
 * @param {*} posz Position on the z axis, set 0 for default
 * @param {*} rotx Rotation of the object on the x axis, set to 0 for default
 * @param {*} roty Rotation of the object on the y axis, set to 0 for default
 * @param {*} rotz Rotation of the object on the z axis, set to 0 for default
 */

function SceneObject(object, lookupM, active, sclx, scly, sclz, posx, posy, posz, rotx, roty, rotz){
    

    if(active === true){
        environment.push(
            {
                "_id" : "object",
                "_lookupMethod" : "lookupM",
                "_position" : [-999, -999, -999]
            }
        )
    }
    else{
        environment.push(
            {
                "_id" : "object",
                "_lookupMethod" : "lookupM",
                "_scale" : [sclx, scly, sclz],
                "_position" : [posx, posy, posz],
                "_rotation" : [rotx, roty, rotz]

            }
        )
    }
}

export default SceneObject;


// WRITE YOUR SCRIPT IN HERE ^

const jsonP = Math.pow(10, precision)
const sortP = Math.pow(10, 2)
function hahaBall(obj) {
	if (obj)
		for (const key in obj) {
			if (obj[key] == null) {
				delete obj[key]
			} else if (typeof obj[key] === 'object' || Array.isArray(obj[key])) {
				hahaBall(obj[key])
			} else if (typeof obj[key] == 'number') {
				obj[key] = parseFloat(Math.round((obj[key] + Number.EPSILON) * jsonP) / jsonP)
			}
		}
}
hahaBall(difficulty)

difficulty._notes.sort(
	(a, b) =>
		parseFloat(Math.round((a._time + Number.EPSILON) * sortP) / sortP) - parseFloat(Math.round((b._time + Number.EPSILON) * sortP) / sortP) ||
		parseFloat(Math.round((a._lineIndex + Number.EPSILON) * sortP) / sortP) - parseFloat(Math.round((b._lineIndex + Number.EPSILON) * sortP) / sortP) ||
		parseFloat(Math.round((a._lineLayer + Number.EPSILON) * sortP) / sortP) - parseFloat(Math.round((b._lineLayer + Number.EPSILON) * sortP) / sortP)
)
difficulty._obstacles.sort((a, b) => a._time - b._time)
difficulty._events.sort((a, b) => a._time - b._time)

fs.writeFileSync(OUTPUT, JSON.stringify(difficulty, null, 0));

const data = JSON.parse(fs.readFileSync(OUTPUT))

console.log("\n--------------- NOODLE/CHROMA EVENTS STATS ---------------\n\n", data._customData._environment.length, "Environment pieces pushed\n", data._customData._customEvents.length, "Custom events pushed\n\n--------------- NORMAL MAP STATS ---------------\n\n", data._notes.length, "Notes\n", data._obstacles.length, "Walls\n", data._events.length, "Events")
console.log("\x1b[1m\x1b[32m", "\nAll pushes ran successfully!\n")