function water(timeStart, timeEnd, track, posy){
    walls.push({
        "_time": timeStart,
        "_lineindex": 0,
        "_type": 1,
        "_duration": timeEnd - timeStart,
        "_width": 0,
        "_customData": {
            _track: track,
            _color: [130, 255, 243, 10],
            _scale: [1000, 0.5, 2000],
            _fake: true,
            _interactable: true,
            _definitePosition: [0, posy, 0]
        }
    })
}