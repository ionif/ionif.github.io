/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define your vehicles here - remember, they need to be imported
// into the "main" program
let carObCtr = 0;
export class Car extends GrObject {
  /**
   * @param {SimpleRoundaboutProperties} params
   */
  constructor(params = {}) {
    let car = new T.Group();
    let exSettings = {
      steps: 2,
      depth: 1,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelSegments: 2
    };

    let exSettings2 = {
      steps: 2,
      depth: 1,
      bevelEnabled: true,
      bevelThickness: 0.2,
      bevelSize: 0.1,
      bevelSegments: 2
    };

    let car_mat = new T.MeshStandardMaterial({
      color: "red",
      metalness: 0.5,
      roughness: 0.7
    });

    let small_geo = new T.CylinderGeometry( 0.5, 0.5, 0.5, 32 );
    let wheel_mat = new T.MeshStandardMaterial({
      color: "black",
      metalness: 0.5,
      roughness: 0.7
    });
    let cylinder = new T.Mesh( small_geo, wheel_mat );
    let cylinder2 = new T.Mesh( small_geo, wheel_mat );
    let cylinder3 = new T.Mesh( small_geo, wheel_mat );
    let cylinder4 = new T.Mesh( small_geo, wheel_mat );
    cylinder.rotateX(Math.PI/2);
    cylinder2.rotateX(-Math.PI/2);
    cylinder3.rotateX(Math.PI/2);
    cylinder4.rotateX(-Math.PI/2);
    cylinder.position.set(-0.7,0.4,-0.4);
    cylinder2.position.set(-0.7,0.4,1.0);
    cylinder3.position.set(0.8,0.4,-0.4);
    cylinder4.position.set(0.8,0.4,1.0);
    car.add(cylinder);
    car.add(cylinder2);
    car.add(cylinder3);
    car.add(cylinder4);

    let cab_group = new T.Group();
    car.add(cab_group);
    cab_group.translateY(0.7);
    let cab_curve = new T.Shape();
    cab_curve.moveTo(-1, 0);
    cab_curve.lineTo(1, 0);
    cab_curve.lineTo(1.2, 0.35);
    cab_curve.lineTo(1, 0.75);
    cab_curve.lineTo(0.25, 0.75);
    cab_curve.lineTo(0, 1.5);
    cab_curve.lineTo(-0.8, 1.5);
    cab_curve.lineTo(-1, 1.2);
    cab_curve.lineTo(-1, 0);
    let cab_geom = new T.ExtrudeGeometry(cab_curve, exSettings);
    let cab = new T.Mesh(cab_geom, car_mat);
    cab_group.add(cab);
    cab.translateZ(-0.2);
    //cab.scale.set(0.8,0.8,0.5);

    var geometry = new T.BoxBufferGeometry( 1, 0.2, 1 );
	var material = new T.MeshPhongMaterial( {color: "gray", opacity: 0.7, transparent: true} );
    var cube = new T.Mesh( geometry, material );
	cube.rotation.z = -Math.PI/4 - Math.PI/6;
	cube.position.y = 1.7;
	cube.position.x = 0.2;
	cube.position.z = 0.3;
	car.add(cube);

    // note that we have to make the Object3D before we can call
    // super and we have to call super before we can use this
    super(`car-${carObCtr++}`, car);
    this.whole_ob = car;

    // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    let scale = params.size ? Number(params.size) : 1;
    car.scale.set(scale, scale, scale);

    this.ridePoint = new T.Object3D();
    this.ridePoint.translateY(0.5);
    this.ridePoint.rotateY(Math.PI/2);
    this.objects[0].add(this.ridePoint);
    this.rideable = this.ridePoint;
  }
}

let car2ObCtr = 0;
export class Car2 extends GrObject {
  /**
   * @param {SimpleRoundaboutProperties} params
   */
  constructor(params = {}) {
    let car = new T.Group();

    let exSettings = {
      steps: 2,
      depth: 1,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelSegments: 2
    };

    let car_mat = new T.MeshStandardMaterial({
      color: "lightblue",
      metalness: 0.5,
      roughness: 0.7
    });

    let small_geo = new T.CylinderGeometry( 0.4, 0.4, 0.3, 32 );
    let wheel_mat = new T.MeshStandardMaterial({
      color: "black",
      metalness: 0.5,
      roughness: 0.7
    });

    let base_curve = new T.Shape();
    base_curve.moveTo(-1, 0);
    base_curve.lineTo(-1.2, 0.2);
    base_curve.lineTo(-1.2, 0.4);
    base_curve.lineTo(-1, 0.6);
    base_curve.lineTo(1, 0.6);
    base_curve.lineTo(1.2, 0.4);
    base_curve.lineTo(1.2, 0.2);
    base_curve.lineTo(1, 0);
    base_curve.lineTo(-1, 0);
    let base_geom = new T.ExtrudeGeometry(base_curve, exSettings);
    let base = new T.Mesh(base_geom, car_mat);
    car.add(base);
    base.translateZ(-0.2);
    base.translateY(0.5);

    let cylinder = new T.Mesh( small_geo, wheel_mat );
    let cylinder2 = new T.Mesh( small_geo, wheel_mat );
    let cylinder3 = new T.Mesh( small_geo, wheel_mat );
    let cylinder4 = new T.Mesh( small_geo, wheel_mat );
    cylinder.rotateX(Math.PI/2);
    cylinder2.rotateX(-Math.PI/2);
    cylinder3.rotateX(Math.PI/2);
    cylinder4.rotateX(-Math.PI/2);
    cylinder.position.set(-0.7,0.4,-0.4);
    cylinder2.position.set(-0.7,0.4,1.0);
    cylinder3.position.set(0.8,0.4,-0.4);
    cylinder4.position.set(0.8,0.4,1.0);
    car.add(cylinder);
    car.add(cylinder2);
    car.add(cylinder3);
    car.add(cylinder4);
    //cab.scale.set(0.8,0.8,0.5);

    var geometry = new T.BoxBufferGeometry( 1, 0.2, 1 );
	var material = new T.MeshPhongMaterial( {color: "gray", opacity: 0.7,
    transparent: true} );
	var cube = new T.Mesh( geometry, material );
	cube.rotation.z = -Math.PI/4 - Math.PI/6;
	cube.position.y = 1.4;
	cube.position.x = 0.5;
	cube.position.z = 0.3;
	car.add(cube);

    // note that we have to make the Object3D before we can call
    // super and we have to call super before we can use this
    super(`car2-${car2ObCtr++}`, car);
    this.whole_ob = car;

    // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    let scale = params.size ? Number(params.size) : 1;
    car.scale.set(scale, scale, scale);
    
    this.ridePoint = new T.Object3D();
    this.ridePoint.translateY(0.5);
    this.ridePoint.rotateY(Math.PI/2);
    this.objects[0].add(this.ridePoint);
    this.rideable = this.ridePoint;
  }
}

let padCount = 0;
let padMaterial;
let padGeometry;

export class Pad extends GrObject {
  /**
   * Make a place for a helicopter to land
   *
   * @param {Number} x
   * @param {Number} y
   * @param {Number} z
   */
  constructor(x, y, z) {
    if (!padGeometry) {
      // make the helipad geometry as a global - if it's not there
      const q = 0.25;
      const h = 0.5;
      // make the normals point upwards - no matter what orientation the triangle has
      const up = new T.Vector3(0, -1, 0);
      const padcoords = [
        -1,
        0,
        -1,
        -1,
        0,
        1,
        -h,
        0,
        1,
        -h,
        0,
        -1,
        1,
        0,
        -1,
        1,
        0,
        1,
        h,
        0,
        1,
        h,
        0,
        -1,
        -h,
        0,
        -q,
        -h,
        0,
        q,
        h,
        0,
        q,
        h,
        0,
        -q,
      ];
      const padidx = [2, 1, 0, 3, 2, 0, 4, 5, 6, 4, 6, 7, 10, 9, 8, 10, 8, 11];
      padGeometry = new T.Geometry();
      for (let i = 0; i < padcoords.length; i += 3) {
        padGeometry.vertices.push(
          new T.Vector3(padcoords[i], padcoords[i + 1], padcoords[i + 2])
        );
      }
      for (let i = 0; i < padidx.length; i += 3) {
        padGeometry.faces.push(
          new T.Face3(padidx[i], padidx[i + 1], padidx[i + 2], up)
        );
      }
    }
    if (!padMaterial) {
      padMaterial = new T.MeshLambertMaterial({
        color: "#FFFF00",
        side: T.DoubleSide,
      });
    }
    let mesh = new T.Mesh(padGeometry, padMaterial);

    super(`Pad-${++padCount}`, mesh);
    mesh.position.x = x ? x : 0;
    mesh.position.y = (y ? y : 0) + 0.01;
    mesh.position.z = z ? z : 0;
    mesh.receiveShadow = true;
    mesh.castShadow = false;
    this.mesh = mesh;
    this.objects.push(mesh);
  }
}

let car3Count = 0;
export class Car3 extends GrObject {
  /**
   * Simple looking helicopter - with a complex behavior
   *
   * @param {Object} params
   */
  constructor(params = {}) {
    let car = new T.Group();

    let exSettings = {
      steps: 2,
      depth: 1,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelSegments: 2
    };

    let exSettings2 = {
      steps: 2,
      depth: 1,
      bevelEnabled: true,
      bevelThickness: 0.2,
      bevelSize: 0.1,
      bevelSegments: 2
    };

    let car_mat = new T.MeshStandardMaterial({
      color: "yellow",
      metalness: 0.5,
      roughness: 0.7
    });

    let small_geo = new T.CylinderGeometry( 0.5, 0.5, 0.5, 32 );
    let wheel_mat = new T.MeshStandardMaterial({
      color: "black",
      metalness: 0.5,
      roughness: 0.7
    });
    let cylinder = new T.Mesh( small_geo, wheel_mat );
    let cylinder2 = new T.Mesh( small_geo, wheel_mat );
    let cylinder3 = new T.Mesh( small_geo, wheel_mat );
    let cylinder4 = new T.Mesh( small_geo, wheel_mat );
    cylinder.rotateX(Math.PI/2);
    cylinder2.rotateX(-Math.PI/2);
    cylinder3.rotateX(Math.PI/2);
    cylinder4.rotateX(-Math.PI/2);
    cylinder.position.set(-0.7,0.4,-0.4);
    cylinder2.position.set(-0.7,0.4,1.0);
    cylinder3.position.set(0.8,0.4,-0.4);
    cylinder4.position.set(0.8,0.4,1.0);
    car.add(cylinder);
    car.add(cylinder2);
    car.add(cylinder3);
    car.add(cylinder4);

    let cab_group = new T.Group();
    car.add(cab_group);
    cab_group.translateY(0.7);
    let cab_curve = new T.Shape();
    cab_curve.moveTo(-1, 0);
    cab_curve.lineTo(1, 0);
    cab_curve.lineTo(1.2, 0.35);
    cab_curve.lineTo(1, 0.75);
    cab_curve.lineTo(0.25, 0.75);
    cab_curve.lineTo(0, 1.5);
    cab_curve.lineTo(-0.8, 1.5);
    cab_curve.lineTo(-1, 1.2);
    cab_curve.lineTo(-1, 0);
    let cab_geom = new T.ExtrudeGeometry(cab_curve, exSettings);
    let cab = new T.Mesh(cab_geom, car_mat);
    cab_group.add(cab);
    cab.translateZ(-0.2);
    //cab.scale.set(0.8,0.8,0.5);

    var geometry = new T.BoxBufferGeometry( 1, 0.2, 1 );
  var material = new T.MeshPhongMaterial( {color: "gray", opacity: 0.7, transparent: true} );
    var cube = new T.Mesh( geometry, material );
  cube.rotation.z = -Math.PI/4 - Math.PI/6;
  cube.position.y = 1.7;
  cube.position.x = 0.2;
  cube.position.z = 0.3;
  car.add(cube);
super(`car3-${car3Count++}`, car);
    this.whole_ob = car;
    car.scale.set(2, 2, 2);
    // finite state machine
    this.state = 0;
    this.delay = 0;
    /** @type {Helipad[]} */
    this.pads = [];
    // pad we're currently at (or going to)
    /** @type {?Helipad} */
    this.current = undefined;

    //
    this.altitude = params.altitude || 5;

    // the helicopter is ridable - don't ride the rotor!
    this.ridePoint = new T.Object3D();
    this.ridePoint.translateY(0.5);
    this.ridePoint.rotateY(Math.PI/2);
    this.objects[0].add(this.ridePoint);
    this.rideable = this.ridePoint;
  }
  /**
   * This finds all of the landing places in the world, except that since
   * it doesn't know about the world, you need to pass it a list of objects
   * (usually world.objects)
   * @param {Array<GrObject>} grObjectList
   */
  getPads(grObjectList) {
    let that = this;
    grObjectList.forEach(function (obj) {
      if (obj instanceof Pad) that.pads.push(obj);
    });
    this.current = this.pads[0];
    this.whole_ob.position.x = this.current.mesh.position.x;
    this.whole_ob.position.y = this.current.mesh.position.y;
    this.whole_ob.position.z = this.current.mesh.position.z;
  }
  /** - I don't know why the type declarations aren't inherited
   * @param {number} delta
   * @param {number} timeOfDay
   *
   * The helicopter has a state machine which tells what it's motion is.
   * In each state, it moves to a goal, and when it gets there, picks the next state
   */
  tick(delta, timeOfDay) {
    // all the speeds are arbitrary, so we tune things here
    let deltaSlowed = delta / 200;

    // spin the rotor around - even when the helicopter is landed
    //this.rotor.rotateY(deltaSlowed * 4);

    // state machine - depending on state, do the right thing
    var dx;
    var dz;
    var ds;
    if (this.pads.length) {
      switch (this.state) {
        case 0: // initialization
          this.state = 1;
          this.delay = 0;
          break;
        case 1: // ascend to altitude
          
            this.state = 4;
            // pick a random helipad - must be different than where we are
            let targets = this.pads.filter((obj) => obj != this.current);
            let pick = Math.floor(Math.random() * targets.length);
            this.current = targets[pick];
            // compute the spin, before we start
            dx = this.current.mesh.position.x - this.whole_ob.position.x;
            dz = this.current.mesh.position.z - this.whole_ob.position.z;
            ds = Math.sqrt(dx * dx + dz * dz);
            if (ds > 0) {
              // compute the goal angle
              this.goalangle = Math.atan2(dx, dz) - Math.PI/2;
              // get the current angle
              let quat = new T.Quaternion();
              this.whole_ob.getWorldQuaternion(quat);
              let eu = new T.Euler();
              eu.setFromQuaternion(quat);
              this.currentangle = eu.y;
              this.state = 4;
            } else {
              this.state = 5; // don't bother spinning
            }
          break;
        case 2: // descend
            this.state = 3;
          break;
        case 3: // wait before takeoff
            this.state = 1; // take off again
          break;
        case 4: // rotate to point towards destination
          let ad = this.goalangle - this.currentangle;
          if (ad > 0.1) {
            this.currentangle += 0.05;
          } else if (ad < -0.1) {
            this.currentangle -= 0.05;
          } else {
            this.state = 5;
            this.currentangle = this.goalangle;
          }
          this.whole_ob.setRotationFromEuler(
            new T.Euler(0, this.currentangle, 0)
          );
          break;
        case 5: // fly to destination
          dx = this.current.mesh.position.x - this.whole_ob.position.x;
          dz = this.current.mesh.position.z - this.whole_ob.position.z;
          let dst = Math.sqrt(dx * dx + dz * dz);
          ds = deltaSlowed * 5;
          if (dst > ds) {
            this.whole_ob.position.x += (dx * ds) / dst;
            this.whole_ob.position.z += (dz * ds) / dst;
          } else {
            this.whole_ob.position.x = this.current.mesh.position.x;
            this.whole_ob.position.z = this.current.mesh.position.z;
            this.state = 2;
          }
          break;
      }
    }
  }
}
