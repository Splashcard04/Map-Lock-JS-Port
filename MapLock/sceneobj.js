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
                "_id" : object,
                "_lookupMethod" : lookupM,
                "_position" : [-999, -999, -999]
            }
        )
    }
    else{
        environment.push(
            {
                "_id" : object,
                "_lookupMethod" : lookupM,
                "_scale" : [sclx, scly, sclz],
                "_position" : [posx, posy, posz],
                "_rotation" : [rotx, roty, rotz]

            }
        )
    }
}

export default SceneObject;
