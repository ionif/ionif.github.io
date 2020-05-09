/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { OBJLoader } from "../libs/CS559-THREE/examples/jsm/loaders/OBJLoader.js";
import { ObjGrObject, FbxGrObject } from "../libs/CS559-Framework/loaders.js";

// define your vehicles here - remember, they need to be imported
// into the "main" program
let ObCtr = 0;
export class alphaSphere extends GrObject {
  /**
   * @param {SimpleRoundaboutProperties} params
   */
  constructor(params = {}) {

    let geometry = new T.IcosahedronGeometry(3, 5);
    let material = new T.MeshStandardMaterial({ color: "#444", transparent: true, side: T.DoubleSide, alphaTest: 0.5 });
 
    let alphaMap = new T.TextureLoader().load('../images/bars.png');
    material.alphaMap = alphaMap;
    material.alphaMap.magFilter = T.NearestFilter;
    let mesh = new T.Mesh(geometry, material);

    // note that we have to make the Object3D before we can call
    // super and we have to call super before we can use this
    super(`asphere-${ObCtr++}`, mesh);
    this.whole_ob = mesh;

    // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    let scale = params.size ? Number(params.size) : 1;
    mesh.scale.set(scale, scale, scale);

  }
}

let ObCtr2 = 0;
export class Island extends GrObject {
  /**
   * @param {SimpleRoundaboutProperties} params
   */
  constructor(params = {}) {

    let is_geo = new T.SphereBufferGeometry(100,16,16, Math.PI/2, Math.PI*2, 0, 0.5*Math.PI);
    let material = new T.MeshStandardMaterial({ color: "#444", transparent: true, side: T.DoubleSide, alphaTest: 0.5 });
    let map = new T.TextureLoader().load('../images/sand.jpg');
    
    material.map = map;
    material.map.magFilter = T.NearestFilter;
    let mesh = new T.Mesh(is_geo, material);

    // note that we have to make the Object3D before we can call
    // super and we have to call super before we can use this
    super(`island-${ObCtr2++}`, mesh);
    this.whole_ob = mesh;

    // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    let scale = params.size ? Number(params.size) : 1;
    mesh.scale.set(scale, scale, scale);
  }
}

let ObCtr3 = 0;
export class CyIsland extends GrObject {
  /**
   * @param {SimpleRoundaboutProperties} params
   */
  constructor(params = {}) {

    let is_geo = new T.CylinderGeometry(99,99,150, 16, 1, false, 0, Math.PI);
    let material = new T.MeshStandardMaterial({ color: "#444", transparent: true, side: T.DoubleSide, alphaTest: 0.5 });
    let map = new T.TextureLoader().load('../images/sand.jpg');
    material.map = map;
    material.map.magFilter = T.NearestFilter;
    let mesh = new T.Mesh(is_geo, material);

    // note that we have to make the Object3D before we can call
    // super and we have to call super before we can use this
    super(`cyisland-${ObCtr3++}`, mesh);
    this.whole_ob = mesh;
    this.whole_ob.rotation.z = Math.PI / 2;
    // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    this.whole_ob.rotation.y = params.rot ? Number(params.rot) : 0;
    let scale = params.size ? Number(params.size) : 1;
    mesh.scale.set(scale, scale, scale);
  }
}

let ObCtr4 = 0;
export class LCyIsland extends GrObject {
  /**
   * @param {SimpleRoundaboutProperties} params
   */
  constructor(params = {}) {

    let is_geo = new T.CylinderGeometry(98.5,98.5,300, 16, 1, false, 0, Math.PI);
    let material = new T.MeshStandardMaterial({ color: "#444", transparent: true, side: T.DoubleSide, alphaTest: 0.5 });
    let map = new T.TextureLoader().load('../images/sand.jpg');
    material.map = map;
    material.map.magFilter = T.NearestFilter;
    let mesh = new T.Mesh(is_geo, material);

    // note that we have to make the Object3D before we can call
    // super and we have to call super before we can use this
    super(`lisland-${ObCtr4++}`, mesh);
    this.whole_ob = mesh;
    this.whole_ob.rotation.z = Math.PI / 2;
    // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    this.whole_ob.rotation.y = params.rot ? Number(params.rot) : 0;
    let scale = params.size ? Number(params.size) : 1;
    mesh.scale.set(scale, scale, scale);
  }
}

let ObCtr5 = 0;
export class Road extends GrObject {
  /**
   * @param {SimpleRoundaboutProperties} params
   */
  constructor(params = {}) {

    let is_geo = new T.BoxGeometry(5, 20, params.length ? Number(params.length) : 200);
    let material = new T.MeshStandardMaterial({ color: "#444", transparent: true, side: T.DoubleSide, alphaTest: 0.5 });
    let map = new T.TextureLoader().load('../images/roads.png');
    map.wrapS = map.wrapT = T.RepeatWrapping;
    map.offset.set( 0, 0 );
    map.repeat.set( 0, 1 );
    material.map = map;
    material.map.magFilter = T.NearestFilter;
    let mesh = new T.Mesh(is_geo, material);

    // note that we have to make the Object3D before we can call
    // super and we have to call super before we can use this
    super(`road-${ObCtr4++}`, mesh);
    this.whole_ob = mesh;
    this.whole_ob.rotation.z = Math.PI / 2;
    // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    this.whole_ob.rotation.y = params.rot ? Number(params.rot) : 0;
    let scale = params.size ? Number(params.size) : 1;
    mesh.scale.set(scale, scale, scale);
  }
}
 
let ObCtr6 = 0;
export class CubeIsland extends GrObject {
  /**
   * @param {SimpleRoundaboutProperties} params
   */
  constructor(params = {}) {

    let is_geo = new T.BoxBufferGeometry(47,299,299);
    let material = new T.MeshStandardMaterial({ color: "#444", transparent: true, side: T.DoubleSide, alphaTest: 0.5 });
    let map = new T.TextureLoader().load('../images/sand.jpg');
    material.map = map;
    material.map.magFilter = T.NearestFilter;
    let mesh = new T.Mesh(is_geo, material);

    // note that we have to make the Object3D before we can call
    // super and we have to call super before we can use this
    super(`cubeisland-${ObCtr6++}`, mesh);
    this.whole_ob = mesh;
    this.whole_ob.rotation.z = Math.PI / 2;
    // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    this.whole_ob.rotation.y = params.rot ? Number(params.rot) : 0;
    let scale = params.size ? Number(params.size) : 1;
    mesh.scale.set(scale, scale, scale);
  }
}

export class Spotlight extends GrObject {
    constructor(params={}) {
        const light = new T.SpotLight(0xffffff);
        light.position.set(0,10,0);
        super("Spotlight", light);
        this.light = light;
        this.light.position.x = params.x ? Number(params.x) : 0;
        this.light.position.y = params.y ? Number(params.y) : 0;
        this.light.position.z = params.z ? Number(params.z) : 0;

    }
}

let drivecount = 0;
export class Driveway extends GrObject {
    constructor(params={}) {
        let geometry = new T.BoxBufferGeometry( 3, 3, 10 );
        let material = new T.MeshBasicMaterial( {color: 0x303030} );
        let cube = new T.Mesh( geometry, material );
        super(`driveway-${drivecount++}`, cube);
    this.whole_ob = cube;
    this.whole_ob.rotation.z = Math.PI / 2;
    // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    this.whole_ob.rotation.y = params.rot ? Number(params.rot) : 0;
    //this.whole_ob.rotation.z = -Math.PI/4;

    }
}

let carouselObCtr = 0;

// A Carousel.
/**
 * @typedef CarouselProperties
 * @type {object}
 * @property {number} [x=0]
 * @property {number} [y=0]
 * @property {number} [z=0]
 * @property {number} [size=1]
 */
export class GrCarousel extends GrObject {
  /**
   * @param {CarouselProperties} params
   */
  constructor(params = {}) {
    let width = 3;
    let carousel = new T.Group();

    let base_geom = new T.CylinderGeometry(width, width, 1, 32);
    let base_mat = new T.MeshStandardMaterial({
      color: "lightblue",
      metalness: 0.3,
      roughness: 0.8
    });
    let base = new T.Mesh(base_geom, base_mat);
    base.translateY(0.5);
    carousel.add(base);

    let platform_group = new T.Group();
    base.add(platform_group);
    platform_group.translateY(0.5);

    let platform_geom = new T.CylinderGeometry(
      0.95 * width,
      0.95 * width,
      0.2,
      32
    );
    let platform_mat = new T.MeshStandardMaterial({
      color: "gold",
      metalness: 0.3,
      roughness: 0.8
    });
    let platform = new T.Mesh(platform_geom, platform_mat);
    platform_group.add(platform);

    let cpole_geom = new T.CylinderGeometry(0.3 * width, 0.3 * width, 3, 16);
    let cpole_mat = new T.MeshStandardMaterial({
      color: "gold",
      metalness: 0.8,
      roughness: 0.5
    });
    let cpole = new T.Mesh(cpole_geom, cpole_mat);
    platform_group.add(cpole);
    cpole.translateY(1.5);

    let top_trim = new T.Mesh(platform_geom, platform_mat);
    platform_group.add(top_trim);
    top_trim.translateY(3);

    let opole_geom = new T.CylinderGeometry(0.03 * width, 0.03 * width, 3, 16);
    let opole_mat = new T.MeshStandardMaterial({
      color: "#aaaaaa",
      metalness: 0.8,
      roughness: 0.5
    });
    let opole;
    let num_poles = 7;
    let poles = [];
    for (let i = 0; i < num_poles; i++) {
      opole = new T.Mesh(opole_geom, opole_mat);
      platform_group.add(opole);
      opole.translateY(1.5);
      opole.rotateY((2 * i * Math.PI) / num_poles);
      opole.translateX(0.8 * width);
      poles.push(opole);
    }

    //horses
    let horse;
    let horses = [];

    var loader = new OBJLoader();
      for (let i = 0; i < num_poles; i++) {
          loader.load(
          '../models/horse.obj',
          // called when resource is loaded
          function ( horse ) {
        //horse = new T.Mesh(horse_geom, horse_mat);
        platform_group.add(horse);
        horse.scale.set(0.01,-0.01,0.01);
        //horse.rotation.x = Math.PI;
        horse.translateY(1.0);

        horse.rotateY((2 * i * Math.PI) / num_poles);
        horse.rotateX(-90);
        horse.translateX(0.8 * width);
        horses.push(horse);
      },
      // called when loading is in progresses
  function ( xhr ) {

    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

  }); 

    }

    let roof_geom = new T.ConeGeometry(width, 0.5 * width, 32, 4);
    let roof = new T.Mesh(roof_geom, base_mat);
    carousel.add(roof);
    roof.translateY(4.8);

    // note that we have to make the Object3D before we can call
    // super and we have to call super before we can use this
    super(`Carousel-${carouselObCtr++}`, carousel);
    this.whole_ob = carousel;
    this.platform = platform;
    this.poles = poles;
    this.horses = horses;

    // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    let scale = params.size ? Number(params.size) : 1;
    carousel.scale.set(scale, scale, scale);
    
    var inc = 0.01;
    var dir = 1;
    this.tick = function(delta, timeOfDay) {
      this.whole_ob.rotateY(0.001 * delta);
      //dir = Math.sin(0.005*delta);
      this.horses.forEach(function(horse) {
        let avg_pos = (horse.position.x + horse.position.z) / 2; 
        if ((horse.position.y + inc + avg_pos/100 > 2.0) || (horse.position.y + inc + avg_pos/100 < 0))  { 
          dir = -1*dir;
        } 
        horse.position.y += dir * (inc + avg_pos/100);});
    };
  }
}