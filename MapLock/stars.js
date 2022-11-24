function stars(amount, color, size, timeStart, timeEnd, track){
    for(let i = 0; i < amount; i++){
        walls.push({
            "_time": timeStart,
            "_lineindex": 0,
            "_type": 1,
            "_duration": timeEnd - timeStart,
            "_width": 0,
            "_customData": {
                _track: track,
                _color: [color, color, color],
                _fake: true,
                _interactable: false,
                _scale: [size, size, size],
                _localRotation: [random(-360, 360),random(-360, 360),random(-360, 360)],
                _definitePosition: [random(-30, 30),random(-30, 30),random(-30, 30)]
                
            }
        })
    }

}
export default stars;