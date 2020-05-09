/*jshint esversion: 6 */
// @ts-check

/**
 * Graphics Town Framework - "Main" File
 *
 * This is the main file - it creates the world, populates it with
 * objects and behaviors, and starts things running
 *
 * The initial distributed version has a pretty empty world.
 * There are a few simple objects thrown in as examples.
 *
 * It is the students job to extend this by defining new object types
 * (in other files), then loading those files as modules, and using this
 * file to instantiate those objects in the world.
 */
import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { ObjGrObject, FbxGrObject } from "../libs/CS559-Framework/loaders.js";
import * as Helpers from "../libs/CS559-Libs/helpers.js";
import { WorldUI } from "../libs/CS559-Framework/WorldUI.js";
import { OBJLoader } from "../libs/CS559-THREE/examples/jsm/loaders/OBJLoader.js";
import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";

import {main} from "../examples/main.js";
import {
	PlainHouse,
	PlainHouse2,
	PlainHouse3,
	Tree
} from "./6-buildings.js";
import {
	Island, 
	CyIsland, 
	LCyIsland,
	Road,
	CubeIsland,
	Spotlight,
	Driveway,
	GrCarousel
} from "./objects.js";
import {
	Car,
	Car2,
	Car3,
	Pad
} from "./7-car.js";
import {Water} from "../libs/Other/Water.js";

import {MTLLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/loaders/MTLLoader.js';
import {MtlObjBridge} from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/loaders/obj2/bridge/MtlObjBridge.js';


var doubledecker = new T.Object3D();

function forthX(obj, val1, val2, speed = 1) {
  obj.tick = function(delta, timeOfDay) {
    obj.objects.forEach(function(obj){ 
    	if (obj.position.x < val1 || obj.position.x > val2) {
    		obj.rotation.y += Math.PI;
    	}
    	obj.position.x += 0.5*Math.cos(obj.rotation.y);
    	//}
    });
  };
  return obj;
}


var wTime = 0;
function forthW(obj, val1, val2, speed = 1) {
  obj.tick = function(delta, timeOfDay) {
    obj.objects.forEach(function(obj){
    	if (obj.position.x < val1 || obj.position.x > val2) {
    		obj.rotation.y += Math.PI;
    	}
    	obj.position.x += 0.5*Math.cos(obj.rotation.y-Math.PI/2);
    	obj.scale.set(Math.abs(wTime), Math.abs(wTime), Math.abs(wTime));
    	wTime += Math.cos(obj.rotation.y-Math.PI/2)/100;
    	//}
    });
  };
  return obj;
}

var wTime2 = 0;
function forthW2(obj, val1, val2, speed = 1) {
  obj.tick = function(delta, timeOfDay) {
    obj.objects.forEach(function(obj){
    	if (obj.position.x < val1 || obj.position.x > val2) {
    		obj.rotation.y += Math.PI;
    	}
    	obj.position.x += 0.5*Math.cos(obj.rotation.y-Math.PI/2);
    	obj.scale.set(Math.abs(wTime2), Math.abs(wTime2), Math.abs(wTime2));
    	wTime2 += Math.cos(obj.rotation.y-Math.PI/2)/100;
    	//}
    });
  };
  return obj;
}

var wTime3 = 0;
function forthW3(obj, val1, val2, speed = 1) {
  obj.tick = function(delta, timeOfDay) {
    obj.objects.forEach(function(obj){
    	if (obj.position.x < val1 || obj.position.x > val2) {
    		obj.rotation.y += Math.PI;
    	}
    	obj.position.x += 0.5*Math.cos(obj.rotation.y-Math.PI/2);
    	obj.scale.set(Math.abs(wTime3), Math.abs(wTime3), Math.abs(wTime3));
    	wTime3 += Math.cos(obj.rotation.y-Math.PI/2)/100;
    	//}
    });
  };
  return obj;
}

var wTime4 = 0;
function forthW4(obj, val1, val2, speed = 1) {
  obj.tick = function(delta, timeOfDay) {
    obj.objects.forEach(function(obj){
    	if (obj.position.x < val1 || obj.position.x > val2) {
    		obj.rotation.y += Math.PI;
    	}
    	obj.position.x += 0.5*Math.cos(obj.rotation.y-Math.PI/2);
    	obj.scale.set(Math.abs(wTime4), Math.abs(wTime4), Math.abs(wTime4));
    	wTime4 += Math.cos(obj.rotation.y-Math.PI/2)/100;
    	//}
    });
  };
  return obj;
}

var wTime5 = 0;
function forthW5(obj, val1, val2, speed = 1) {
  obj.tick = function(delta, timeOfDay) {
    obj.objects.forEach(function(obj){
    	if (obj.position.x < val1 || obj.position.x > val2) {
    		obj.rotation.y += Math.PI;
    	}
    	obj.position.x += 0.5*Math.cos(obj.rotation.y-Math.PI/2);
    	obj.scale.set(Math.abs(wTime5), Math.abs(wTime5), Math.abs(wTime5));
    	wTime5 += Math.cos(obj.rotation.y-Math.PI/2)/100;
    	//}
    });
  };
  return obj;
}

function spinX(obj, speed = 1) {
  obj.tick = function(delta, timeOfDay) {
    obj.objects.forEach(obj => obj.rotateX(((speed * delta) / 1000) * Math.PI));
  };
  return obj;
}

function getCubeTexture(){
   let path = "../images/skyBox/";
        let format = '.png';
        let urls = [
            path + 'px' + format, path + 'nx' + format,
            path + 'py' + format, path + 'ny' + format,
            path + 'pz' + format, path + 'nz' + format
        ];
        return new T.CubeTextureLoader().load(urls);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/////////
//train//
/////////
var time = 0;

let thePoints = [
  [-50, 200],
  [-150, -50],
  [-150, -350],
  [150, -350],
  [150, -50]
];

function lerpPt(a, b, u) {
  let pn1 = [0, 0]
  let p1 = [0, 0]
  let p2 = [0, 0]

  //check a - 1
  if (a-1 >= 0){
    pn1 = [thePoints[a-1][0], thePoints[a-1][1]];
  }
  else {
    pn1 = [thePoints[thePoints.length-1][0], thePoints[thePoints.length-1][1]];
  }

  //a
  let p0 = [thePoints[a][0], thePoints[a][1]];

  //check a + 1 and a + 2
  if (a + 2 < thePoints.length) {
    p1 = [thePoints[a+1][0], thePoints[a+1][1]];
    p2 = [thePoints[a+2][0], thePoints[a+2][1]];
  }
  else if (a + 1 < thePoints.length) {
    p1 = [thePoints[a+1][0], thePoints[a+1][1]];
    p2 = [thePoints[0][0], thePoints[0][1]];
  }
  else {
    p1 = [thePoints[0][0], thePoints[0][1]];
    p2 = [thePoints[1][0], thePoints[1][1]];
  }

  let m0 = [0.5 * (p1[0] - pn1[0]), 0.5 * (p1[1] - pn1[1])];
  let m1 = [0.5 * (p2[0] - p0[0]), 0.5 * (p2[1] - p0[1])];

  //return x and y of square and derivative
  return [p0[0]*(1 - 3*u**2 + 2*u**3) + m0[0]*(u - 2*u**2 + u**3) + p1[0]*(3*u**2 - 2*u**3) + m1[0]*(-1*u**2 + u**3), p0[1]*(1 - 3*u**2 + 2*u**3) + m0[1]*(u - 2*u**2 + u**3) + p1[1]*(3*u**2 - 2*u**3) + m1[1]*(-1*u**2 + u**3), p0[0]*(-6*u + 6*u**2) + m0[0]*(1 - 4*u + 3*u**2) + p1[0]*(6*u - 6*u**2) + m1[0]*(-2*u + 3*u**2), p0[1]*(-6*u + 6*u**2) + m0[1]*(1 - 4*u + 3*u**2) + p1[1]*(6*u - 6*u**2) + m1[1]*(-2*u + 3*u**2)];
}

 function train(t) {
  return lerpPt(Math.floor(t), Math.floor(t+1), t - Math.floor(t))
}

function updateTrain(obj) {
	obj.tick = function(delta, timeOfDay) {
		if (time > thePoints.length-0.005) {
			time = 0;
		}
		else {
			time += 0.005;
		}
		let [x, y, m0, m1] = train(time);
    obj.objects.forEach(obj => {
    	obj.rotation.y = Math.PI - Math.atan2(m1, m0); 
    	obj.position.x = x;
    	obj.position.z = y;
    });
  };
  return obj;
}

var btime = 0;
let bPoints = [
  [-300, 300],
  [-350, -100],
  [-350, -500],
  [350, -500],
  [300, -100],
  [500, 200]
];

function berpPt(a, b, u) {
  let pn1 = [0, 0]
  let p1 = [0, 0]
  let p2 = [0, 0]

  //check a - 1
  if (a-1 >= 0){
    pn1 = [bPoints[a-1][0], bPoints[a-1][1]];
  }
  else {
    pn1 = [bPoints[bPoints.length-1][0], bPoints[bPoints.length-1][1]];
  }

  //a
  let p0 = [bPoints[a][0], bPoints[a][1]];

  //check a + 1 and a + 2
  if (a + 2 < bPoints.length) {
    p1 = [bPoints[a+1][0], bPoints[a+1][1]];
    p2 = [bPoints[a+2][0], bPoints[a+2][1]];
  }
  else if (a + 1 < bPoints.length) {
    p1 = [bPoints[a+1][0], bPoints[a+1][1]];
    p2 = [bPoints[0][0], bPoints[0][1]];
  }
  else {
    p1 = [bPoints[0][0], bPoints[0][1]];
    p2 = [bPoints[1][0], bPoints[1][1]];
  }

  let m0 = [0.5 * (p1[0] - pn1[0]), 0.5 * (p1[1] - pn1[1])];
  let m1 = [0.5 * (p2[0] - p0[0]), 0.5 * (p2[1] - p0[1])];

  //return x and y of square and derivative
  return [p0[0]*(1 - 3*u**2 + 2*u**3) + m0[0]*(u - 2*u**2 + u**3) + p1[0]*(3*u**2 - 2*u**3) + m1[0]*(-1*u**2 + u**3), p0[1]*(1 - 3*u**2 + 2*u**3) + m0[1]*(u - 2*u**2 + u**3) + p1[1]*(3*u**2 - 2*u**3) + m1[1]*(-1*u**2 + u**3), p0[0]*(-6*u + 6*u**2) + m0[0]*(1 - 4*u + 3*u**2) + p1[0]*(6*u - 6*u**2) + m1[0]*(-2*u + 3*u**2), p0[1]*(-6*u + 6*u**2) + m0[1]*(1 - 4*u + 3*u**2) + p1[1]*(6*u - 6*u**2) + m1[1]*(-2*u + 3*u**2)];
}

 function boat(t) {
  return berpPt(Math.floor(t), Math.floor(t+1), t - Math.floor(t))
}

function updateBoat(obj) {
	obj.tick = function(delta, timeOfDay) {
		if (btime > bPoints.length-0.001) {
			btime = 0;
		}
		else {
			btime += 0.001;
		}
		let [x, y, m0, m1] = boat(btime);
    obj.objects.forEach(obj => {
    	obj.rotation.y = Math.PI - Math.atan2(m1, m0); 
    	obj.position.x = x;
    	obj.position.z = y;
    });
  };
  return obj;
}

/**
 * The Graphics Town Main -
 * This builds up the world and makes it go...
 */
function grtown() {
	//////////////////
	//make the world//
	//////////////////

	let world = new GrWorld({
		width: 800,
		height: 600,
		groundplane: false, // make the ground plane big enough for a world of stuff
	//	camera: camera
	});

	//////////
	//camera//
	//////////
	world.camera.position.set(500, 200, 500);
	world.camera.lookAt(new T.Vector3(0, 0, 0));
	/////////////////
	//create skybox//
	/////////////////
	world.scene.background = getCubeTexture();

	/////////////////
	//create island//
	/////////////////
	//loner
	world.add(new Island({ x: -50, z: 200, y: -50}));
	//left front corner
	world.add(new Island({ x: -150, z: -50, y: -50}));
	//left back corner
	world.add(new Island({ x: -150, z: -350, y: -50}));
	//right front corner
	world.add(new Island({ x: 150, z: -50, y: -50}));
	//right back corner
	world.add(new Island({ x: 150, z: -350, y: -50}));
	//right side
	world.add(new LCyIsland({ x: 150, z: -200, y: -50, rot: -Math.PI/2}));
	//left side
	world.add(new LCyIsland({ x: -150, z: -200, y: -50, rot: -Math.PI/2}));
	//front side
	world.add(new LCyIsland({ x: 0, z: -50, y: -50}));
	//back side
	world.add(new LCyIsland({ x: 0, z: -350, y: -50}));
	//middle
	world.add(new CubeIsland({ x: 0, z: -200, y: 25}));
	
	/////////
	//water//
	/////////
	var waterGeometry = new T.PlaneBufferGeometry( 10000, 10000 );
	let water = new Water(
			waterGeometry,
				{
					textureWidth: 512,
					textureHeight: 512,
					waterNormals: new T.TextureLoader().load( '../images/waternormals.jpg', function ( texture ) {
					texture.wrapS = texture.wrapT = T.RepeatWrapping;
					} ),
					alpha: 1.0,
					sunColor: 0xffffff,
					waterColor: 0x001e0f,
					distortionScale: 3.7,
					fog: world.fog !== undefined
					}
				);

	water.rotation.x = -Math.PI / 2;
	world.scene.add( water );
	
	// place your buildings and trees into the world here
	world.add(new PlainHouse3({ x: -50, z: 200, y: 49, size: 3, rot: Math.PI}));

	var i;

	for (let i = -30; i < 130; i += 20) {
		//1
		world.add(new PlainHouse({ x: i, z: -100, y: 49, size: 2, rot: -Math.PI/2}));
		world.add(new Driveway({ x: i-2, z: -95, y: 49, size: 2, rot: -Math.PI}));
		world.add(new Tree({ x: i+3, z: -93, y: 49 }));
		world.add(new PlainHouse2({ x: i, z: -60, y: 49, size: 2, rot: Math.PI/2}));
		world.add(new Driveway({ x: i+2, z: -65, y: 49, size: 2, rot: -Math.PI}));
		//2
		world.add(new PlainHouse({ x: i, z: -240, y: 49, size: 2, rot: -Math.PI/2}));
		world.add(new Driveway({ x: i-2, z: -235, y: 49, size: 2, rot: -Math.PI}));
		world.add(new Tree({ x: i+3, z: -233, y: 49 }));
		world.add(new PlainHouse2({ x: i, z: -200, y: 49, size: 2, rot: Math.PI/2}));
		world.add(new Driveway({ x: i+2, z: -205, y: 49, size: 2, rot: -Math.PI}));
		//3
		world.add(new PlainHouse({ x: i, z: -370, y: 49, size: 2, rot: -Math.PI/2}));
		world.add(new Driveway({ x: i-2, z: -365, y: 49, size: 2, rot: -Math.PI}));
		world.add(new Tree({ x: i+3, z: -363, y: 49 }));
		world.add(new PlainHouse2({ x: i, z: -330, y: 49, size: 2, rot: Math.PI/2}));
		world.add(new Driveway({ x: i+2, z: -335, y: 49, size: 2, rot: -Math.PI}));
	}
/**/
i = -30;
	var j;

	for (let j = -120; j > -180; j -= 20) {
		//1
		world.add(new PlainHouse({ x: i, z: j, y: 49, size: 2, rot: Math.PI}));
		world.add(new Driveway({ x: i-5, z: j-3, y: 49, size: 2, rot: Math.PI/2}));
		world.add(new Tree({ x: i+3, z: j+7, y: 49 }));
		//2
		world.add(new PlainHouse({ x: i+160, z: j-10, y: 49, size: 2, rot: 0}));
		world.add(new Driveway({ x: i+15+150, z: j-8, y: 49, size: 2, rot: -Math.PI/2}));
		world.add(new Tree({ x: i+3+160, z: j+3, y: 49 }));
	}

	for (let j = -260; j > -320; j -= 20) {
		//1
		world.add(new PlainHouse({ x: i, z: j, y: 49, size: 2, rot: Math.PI}));
		world.add(new Driveway({ x: i-5, z: j-3, y: 49, size: 2, rot: Math.PI/2}));
		world.add(new Tree({ x: i+3, z: j+7, y: 49 }));
		//2
		world.add(new PlainHouse({ x: i+160, z: j-10, y: 49, size: 2, rot: 0}));
		world.add(new Driveway({ x: i+15+150, z: j-8, y: 49, size: 2, rot: -Math.PI/2}));
		world.add(new Tree({ x: i+3+160, z: j+3, y: 49 }));
	}

	/////////
	//roads//
	/////////
	//through town
	world.add(new Road({ x: 20, z: -80, y: 47, rot: -Math.PI/2, length: 270}));
	//to island
	world.add(new Road({ x: -50, z: -75, y: 48, rot: 0, length: 550}));
	//diag to island
	world.add(new Road({ x: 50, z: 62, y: 48, rot: 0.55*Math.PI+Math.PI/4, length: 340}));
	// diag to straight
	world.add(new Road({ x: 150, z: -210, y: 48, rot: 0, length: 290}));
	// intersections
	world.add(new Road({ x: 25, z: -220, y: 48, rot: -Math.PI/2, length: 270}));
	world.add(new Road({ x: 25, z: -350, y: 48, rot: -Math.PI/2, length: 270}));

	////////
	//park//
	////////
	/*let carousel = new GrCarousel({ x: -5, z: -180, y: 50});
  world.add(carousel);*/

	/////////////
	//smart car//
	/////////////
  world.add(new Pad(-50, 50, 200));
  world.add(new Pad(-50, 50, -76));
  world.add(new Pad(150, 50, -76));
  let car = new Car3();
  world.add(car);
  car.getPads(world.objects);
  
  ////////
  //cars//
  ////////
  world.add(forthX(new Car({ x: 20, z: -76, y: 50, size: 2}), -100, 150));
  world.add(forthX(new Car2({ x: -20, z: -86, y: 50, size: 2}), -100, 150));
  //2
  world.add(forthX(new Car({ x: -90, z: -216, y: 50, size: 2}), -100, 150));
  world.add(forthX(new Car2({ x: 120, z: -226, y: 50, size: 2}), -100, 150));
  //3
  world.add(forthX(new Car({ x: 100, z: -346, y: 50, size: 2}), -100, 150));
  world.add(forthX(new Car2({ x: -50, z: -356, y: 50, size: 2}), -100, 150));

  /////////
	//train//
	/////////
	for (i = 0; i < thePoints.length; i++) {
          let pn1 = [0, 0]
          let p1 = [0, 0]
          let p2 = [0, 0]
          
          //check i - 1
          if (i-1 >= 0){
            pn1 = [thePoints[i-1][0], thePoints[i-1][1]];
          }
          else {
            pn1 = [thePoints[thePoints.length-1][0], thePoints[thePoints.length-1][1]];
          }
          
          //current i
          let p0 = [thePoints[i][0], thePoints[i][1]];
          
          //check i + 1 and i + 2
          if (i + 2 < thePoints.length) {
            p1 = [thePoints[i+1][0], thePoints[i+1][1]];
            p2 = [thePoints[i+2][0], thePoints[i+2][1]];
          }
          else if (i + 1 < thePoints.length) {
            p1 = [thePoints[i+1][0], thePoints[i+1][1]];
            p2 = [thePoints[0][0], thePoints[0][1]];
          }
          else {
            p1 = [thePoints[0][0], thePoints[0][1]];
            p2 = [thePoints[1][0], thePoints[1][1]];
          }

          let m0 = [0.5 * (p1[0] - pn1[0]), 0.5 * (p1[1] - pn1[1])];
          let m1 = [0.5 * (p2[0] - p0[0]), 0.5 * (p2[1] - p0[1])];

          let h0 = [p0[0] + 1/3 * m0[0], p0[1] + 1/3 * m0[1]];
          let h1 = [p1[0] - 1/3 * m1[0], p1[1] - 1/3 * m1[1]];

          let start = new T.Vector3(p0[0], 100, p0[1]);
          let mid1 = new T.Vector3(h0[0], 100, h0[1]);
          let mid2 = new T.Vector3(h1[0], 100, h1[1]);
          let end = new T.Vector3(p1[0], 100, p1[1]);

          let curve = new T.CubicBezierCurve3(start, mid1, mid2, end);

          let points = curve.getPoints( 50 );
					let geometry = new T.BufferGeometry().setFromPoints( points );

					let material = new T.LineBasicMaterial( { color : "gray"} );

					// Create the final object to add to the scene
					world.scene.add(new T.Line( geometry, material ));
    }
   //train
  let train = updateTrain(new ObjGrObject({obj: "../models/doubledecker.obj", mtl: "../models/doubledecker.mtl", y: 85}));
  train.objects[0].scale.set(3,3,3);
  train.objects[0].rotation.y = -Math.PI/4;
  let ridePoint = new T.Object3D();
  ridePoint.translateY(0.5);
  ridePoint.rotateY(-Math.PI/2);
  train.objects[0].add(ridePoint);
  train.rideable = ridePoint;
	world.add(train);

	//train poles
	let pole = new ObjGrObject({obj: "../models/pole.obj", mtl: "../models/pole.mtl", x:-130, z:-50, y: 65});
	pole.objects[0].rotation.y = Math.PI/2;
  pole.objects[0].scale.set(3,3,3);
	world.add(pole);

	let pole2 = new ObjGrObject({obj: "../models/pole.obj", mtl: "../models/pole.mtl", x:-130, z:-340, y: 65});
	pole2.objects[0].rotation.y = Math.PI/6;
  pole2.objects[0].scale.set(3,3,3);
	world.add(pole2);

	let pole3 = new ObjGrObject({obj: "../models/pole.obj", mtl: "../models/pole.mtl", x:130, z:-50, y: 65});
	pole3.objects[0].rotation.y = -Math.PI/2;
  pole3.objects[0].scale.set(3,3,3);
	world.add(pole3);

	let pole4 = new ObjGrObject({obj: "../models/pole.obj", mtl: "../models/pole.mtl", x:130, z:-340, y: 65});
	pole4.objects[0].rotation.y = -Math.PI/6;
  pole4.objects[0].scale.set(3,3,3);
	world.add(pole4);

	let pole5 = new ObjGrObject({obj: "../models/pole.obj", mtl: "../models/pole.mtl", x:-65, z:175, y: 65});
	pole5.objects[0].rotation.y = Math.PI;
  pole5.objects[0].scale.set(3,3,3);
	world.add(pole5);

	let light = new Spotlight({x: -130, z:-50, y: 500});
	world.add(light);
	
	/////////
	//stair//
	/////////
	let material = new T.MeshPhongMaterial({
    color: "gray",
    shininess: 15,
    specular: "white"
  });

	let stair = new ObjGrObject({obj: "../models/stair.obj", x:-140, z:-90, y: 40, callback: function(obj) {
		obj.objects[0].traverse( function ( child ) {

        if ( child instanceof T.Mesh ) {

            child.material = material;

        }

  });
	}
	});
	stair.objects[0].rotation.y = 0;
  stair.objects[0].scale.set(18,15,28);
	world.add(stair);

	//boat
  let boat = updateBoat(new ObjGrObject({obj: "../models/Boat.obj", mtl: "../models/Boat.mtl", y: -5}));
  boat.objects[0].scale.set(0.05,0.05,0.05);
  //boat.objects[0].rotation.y = -Math.PI/4;
  let ridePoint2 = new T.Object3D();
  ridePoint2.translateY(200);
  ridePoint2.rotateY(-Math.PI/2);
  boat.objects[0].add(ridePoint2);
  boat.rideable = ridePoint2;
	world.add(boat);

	/////////////////////
	//surfers and waves//
	/////////////////////
  let material2 = new T.MeshPhongMaterial({
    color: "yellow",
    shininess: 15,
    specular: "white"
  });

	let surfer = new FbxGrObject({fbx: "../models/surfer.fbx", x:240 +getRandomInt(100), z:-1 * getRandomInt(300), y: 0, callback: function(obj) {
		obj.objects[0].traverse( function ( child ) {

        if ( child instanceof T.Mesh ) {

            child.material = material2;

        }

  });
	}
	});
  surfer.objects[0].scale.set(0.005,0.005,0.005);
  surfer.objects[0].rotation.y -= 3*Math.PI/4 ;
  world.add(forthX(surfer, 240, 340));

  let material4 = new T.MeshPhongMaterial({
    color: "red",
    shininess: 15,
    specular: "white"
  });

	let surfer2 = new FbxGrObject({fbx: "../models/surfer.fbx", x: 240 +getRandomInt(100), z:-1 * getRandomInt(300), y: 0, callback: function(obj) {
		obj.objects[0].traverse( function ( child ) {

        if ( child instanceof T.Mesh ) {

            child.material = material4;

        }

  });
	}
	});
  surfer2.objects[0].scale.set(0.005,0.005,0.005);
  surfer2.objects[0].rotation.y -= 3*Math.PI/4 ;
  world.add(forthX(surfer2, 240, 340));

  let material5 = new T.MeshPhongMaterial({
    color: "blue",
    shininess: 15,
    specular: "white"
  });

	let surfer3 = new FbxGrObject({fbx: "../models/surfer.fbx", x: 240 +getRandomInt(100), z:-1 * getRandomInt(300), y: 0, callback: function(obj) {
		obj.objects[0].traverse( function ( child ) {

        if ( child instanceof T.Mesh ) {

            child.material = material5;

        }

  });
	}
	});
  surfer3.objects[0].scale.set(0.005,0.005,0.005);
  surfer3.objects[0].rotation.y -= 3*Math.PI/4 ;
  world.add(forthX(surfer3, 240, 340));

let material3 = shaderMaterial("./wave.vs", "./wave.fs", {
    uniforms: { color: { value: new T.Vector3(0.4, 0.5, 0.5) } },
  });
  //wave
  let wave = new ObjGrObject({obj: "../models/Wave.obj", x:200 + getRandomInt(150), y: -7, z: -1 * getRandomInt(300), callback: function(obj) {
		obj.objects[0].traverse( function ( child ) {

        if ( child instanceof T.Mesh ) {

            child.material = material3;

        }
    })
	}});

  let waveCont = forthW(wave, 200, 350);

  wave.objects[0].rotation.y += Math.PI/2;
  world.add(waveCont);

  //wave
  let wave2 = new ObjGrObject({obj: "../models/Wave.obj", x:200 + getRandomInt(150), y: -7, z: -1 * getRandomInt(300), callback: function(obj) {
		obj.objects[0].traverse( function ( child ) {

        if ( child instanceof T.Mesh ) {

            child.material = material3;

        }
    })
	}});
  let waveCont2 = forthW2(wave2, 200, 370);
  //wave.objects[0].scale.set(5,5,5);
  wave2.objects[0].rotation.y += Math.PI/2;
  world.add(waveCont2);

  //wave
  let wave3 = new ObjGrObject({obj: "../models/Wave.obj", x:200 + getRandomInt(150), y: -7, z: -1 * getRandomInt(300), callback: function(obj) {
		obj.objects[0].traverse( function ( child ) {

        if ( child instanceof T.Mesh ) {

            child.material = material3;

        }
    })
	}});
  let waveCont3 = forthW3(wave3, 200, 350);
  //wave.objects[0].scale.set(5,5,5);
  wave3.objects[0].rotation.y += Math.PI/2;
  world.add(waveCont3);

  //wave
  let wave4 = new ObjGrObject({obj: "../models/Wave.obj", x:200 + getRandomInt(150), y: -7, z: -1 * getRandomInt(300), callback: function(obj) {
		obj.objects[0].traverse( function ( child ) {

        if ( child instanceof T.Mesh ) {

            child.material = material3;

        }
    })
	}});
  let waveCont4 = forthW4(wave4, 200, 350);
  //wave.objects[0].scale.set(5,5,5);
  wave4.objects[0].rotation.y += Math.PI/2;
  world.add(waveCont4);

  //wave
  let wave5 = new ObjGrObject({obj: "../models/Wave.obj", x:200 + getRandomInt(150), y: -7, z: -1 * getRandomInt(300), callback: function(obj) {
		obj.objects[0].traverse( function ( child ) {

        if ( child instanceof T.Mesh ) {

            child.material = material3;

        }
    })
	}});
  let waveCont5 = forthW5(wave5, 200, 350);
  //wave.objects[0].scale.set(5,5,5);
  wave5.objects[0].rotation.y += Math.PI/2;
  world.add(waveCont5);

	// only after all the objects exist can we build the UI
	// @ts-ignore       // we're sticking a new thing into the world
	world.ui = new WorldUI(world);
	// now make it go!
	world.go();
}
Helpers.onWindowOnload(grtown);
