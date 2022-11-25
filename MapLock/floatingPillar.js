/**
 * 
 * @param {*} starting The beat the rain starts
 * @param {*} rainDur The duration of the rain in beats
 * @param {*} amount the amount of rain (don't go above 500)
 * @param {*} scalePerDrop The scale of each drop
 * @param {*} rTrack 
 * @param {*} rColor 
 */

function rainEff(starting, rainDur, amount, scalePerDrop, rTrack, rColor){
    for(let i = 0; i < amount; i++){
        let x = Random(-40, 40);
        let z = random(0, 50);


        walls.push({
            "_time": starting,
            "_lineIndex": 0,
            "_type": 1,
            "_duration": rainDur,
            "_width:": 0,
            "_customData": {
                _track: rTrack,
                _color: [rColor, rColor, rColor],
                _fake: true,
                _interactable: false,
                _scale: [scalePerDrop,scalePerDrop,scalePerDrop],
                _animation: {
                    _dissolve: [[0, 0.1], [1, 0.2], [1, 0.9], [0, 1]],
                    _definitePosition: [[x, Random(200, 300), z, 0], [x, Random(-60, -40), z, 1]]
                }
            }
        })
    }
}