* Version 1.0.5
**Last update by: Tsar**
# Before we get started!
This is a port/parody of [Maplock](https://github.com/Splashcard04/MapLock) by SplashCard. We **HIGHLY** recommend you to use [Remapper](https://github.com/Swifter1243/ReMapper) instead of JavaScript, it's much easier and will get support for longer. If you need any help then please contact one of us: (It's advised to contact TsarK, he knows JavaScript more than ScuffedItalian and Splashcard)

* TsarK#0480
* splashcard#2121

### Credits:

* Splashcard__ - Developer/maintainer of the original maplock
* TsarK - Assistance with the JavaScript port
* ScuffedItalian - Code writer of the JavaScript

# install

to install run 
```powershell
npm install mljs
```
to import, at the top of your script write
```js
import { /*imports here*/ } from 'mljs'
```
# functions
# EnvSetting
Env Settings is a function that can make editing objects easier.

if you set ```disabled``` to true then there is no need to write out the other values


```
envSettings(true)
```

if you set ```disabled``` to false then satisfying (inputing) all the params are necessary!

```
envSettings(true,69, 69, 69, 69, etc...)
```

# NoteFiler
!! THIS WILL BE WORKED ON SOON !!

# Rgb Calulctor
The rgb calculator can save you minutes, in Beatsaber, colors
can only be set in decimals which require to divide the rgb
value(s) by 255, this function does that for you!
**Example**:
```
note.color = [ezRGB(69), ezRGB(255), ezRGB(33)]
```

# Scene Object
This allows you to make basic changes easily without environment.push()

***Format:***
```
SceneObject(object, lookupM, active, sclx, scly, sclz, posx, posy, posz, rotx, roty, rotz)
```
* Object: the i'd of the environment object
* lookupM: The lookupMethod (Regex, Contains, etc)
* active: If set to false then the object that was set will be removed, filling in the other params is useless in this case.
* sclx: (Scale X) the scale of the object on the x axis
* scly: (Scale Y) the scale of the object on the y axis
* sclz: (Scale Z) the scale of the object on the z axis
* posx, posy, posz, rotx, roty, rotz are the same as scale other than what they do

***Example:***
```powershell
SceneObject(Clouds, Contains, true, 1, 1, 1, 3, 3, 3, 30, 30, 30)
```

# notesBetween V1
This function is just copied from Remapper but less efficient.
**Example:**
```
notesBetween(
    0,  //Time it starts
    20, //TIme it ends
    note._customData._animation = [ANIMATION HERE] //You can only have 1 custom data per function! (sorry about this!)
)
```

everything you can do can be found [here](https://github.com/Aeroluna/Heck/wiki/AnimationProperties)

# wallsBetween V1
This function is just copied from Remapper but less efficient.
**Example:**
```
wallsBetween(
    0,  //Time it starts
    20, //TIme it ends
    note._customData._animation = [ANIMATION HERE] //You can only have 1 custom data per function! (sorry about this!)
)
```

everything you can do can be found [here](https://github.com/Aeroluna/Heck/wiki/AnimationProperties)


# bombsBetween V1
This function is just copied from Remapper but less efficient.
**Example:**
```
bombsBetween(
    0,  //Time it starts
    20, //TIme it ends
    note._customData._animation = [ANIMATION HERE] //You can only have 1 custom data per function! (sorry about this!)
)
```
* This is a very uncommon function and will most likely not be updated for some time!
everything you can do can be found [here](https://github.com/Aeroluna/Heck/wiki/AnimationProperties)

# Stars
The stars function allows you to create stars out of walls!

**Function Formate:**
```
stars(amount, color, size, timeStart, timeEnd, track)
```

**Example:**
```powershell
stars(50, 255, 0.3, 20, 40, "waterTrack")
```

**Explenation:**
```
stars(
    50, //The amount of stars to be generated
    255, //The color in a RGB format (COLORS WITH ALL 3 VALUES THE SAME! )
    0.3, //The size of each indevidule star
    20, //Time the stars appear!
    40, //Time the stars stop
    "Water" //Track the water will be on!
)
```

# Water 
This function is used to make nice blue water using walls!

**Function Format:**
```
water(timeStart, timeEnd, track, positionY)
```

**Example:**
```powershell
water(0, 100, "Water1", -1);
```
**Explenation:**
```powershell
water(
    0, //Time the water wall will begin!
    100, //Time the water wall ends!
    "Water1", //The track the water will be assigned to
    -1 //The Y position the water will be at (up and down)
)
```



# Rain
**Format:**
```powershell
function rainEff(starting, rainDur, amount, scalePerDrop, rTrack, rColor)
```
**Example:**
```powershell
rainEff(0, 20, 150, 0.3);
```
**Breakdown:**

```powershell
rainEff(
    0, //Starting beat
    20, //Beat duration
    150, //The amount of raindrops
    0.3 //The size of each indevidule raindrop!
)
```

# Upcoming updates
This library will be maintained for some time
**Content planed for next update:**
* Improve the between functions
* Add more utlities
* QOL changes
* Beatmap v3 functionality (will happen when SP template gets updated.)
* Revamp and purify the ```Stars``` function
