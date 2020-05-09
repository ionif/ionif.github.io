/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define your buildings here - remember, they need to be imported
// into the "main" program
let phObCtr = 0;
export class PlainHouse extends GrObject {
  constructor(params = {}) {
    let geometry = new T.Geometry();
    //
    geometry.vertices.push(
    	new T.Vector3(0, 0, 0),
    	new T.Vector3(0, 5, 0),
    	new T.Vector3(0, 5, 5),
    	new T.Vector3(0, 0, 5),
    	new T.Vector3(-5, 0, 5),
    	new T.Vector3(-5, 5, 5),
    	new T.Vector3(-5, 5, 0),
    	new T.Vector3(-5, 0, 0),
    	new T.Vector3(-5, 0, 0),
    	new T.Vector3(-2.5, 7.5, 2.5)
    );
    //
    geometry.faceVertexUvs = [[]];
    //#3
    let f1 = new T.Face3(0, 1, 2);
    geometry.faces.push(f1);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0.5),
      new T.Vector2(0, 0),
      new T.Vector2(0.5, 0)
    ]);
    let f2 = new T.Face3(0, 2, 3);
    geometry.faces.push(f2);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0.5),
      new T.Vector2(0.5, 0),
      new T.Vector2(0.5, 0.5)
    ]);
    // #5
    let f3 = new T.Face3(3, 2, 5);
    geometry.faces.push(f3);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 1),
      new T.Vector2(0, 0.5),
      new T.Vector2(0.5, 0.5)
    ]);
    let f4 = new T.Face3(3, 5, 4);
    geometry.faces.push(f4);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(0.5, 1)
    ]);
    // #6
    let f6 = new T.Face3(1, 5, 2);
    geometry.faces.push(f6);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.66, 0.33),
      new T.Vector2(1, 0),
      new T.Vector2(0.66, 0)
    ]);
    let f7 = new T.Face3(1, 6, 5);
    geometry.faces.push(f7);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.66, 0.33),
      new T.Vector2(1, 0.33),
      new T.Vector2(1, 0)
    ]);
    // #2
    let f8 = new T.Face3(4, 5, 6);
    geometry.faces.push(f8);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 1),
      new T.Vector2(0, 0.5),
      new T.Vector2(0.5, 0.5)
    ]);
    let f9 = new T.Face3(4, 6, 7);
    geometry.faces.push(f9);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(0.5, 1)
    ]);
    // #4
    let f10 = new T.Face3(0, 7, 6);
    geometry.faces.push(f10);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 0.5),
      new T.Vector2(0, 0.5),
      new T.Vector2(0, 1)
    ]);
    let f11 = new T.Face3(0, 6, 1);
    geometry.faces.push(f11);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 0.5),
      new T.Vector2(0, 1),
      new T.Vector2(0.5, 1)
    ]);
    // #1
    let f12 = new T.Face3(0, 3, 4);
    geometry.faces.push(f12);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.33, 0.66),
      new T.Vector2(0.66, 0.66),
      new T.Vector2(0.66, 0.33)
    ]);
    let f13 = new T.Face3(0, 4, 7);
    geometry.faces.push(f13);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.33, 0.66),
      new T.Vector2(0.66, 0.33),
      new T.Vector2(0.33, 0.33)
    ]);
    //roof
    let f14 = new T.Face3(1, 9, 2);
    geometry.faces.push(f14);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    let f15 = new T.Face3(2, 9, 5);
    geometry.faces.push(f15);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    let f16 = new T.Face3(5, 9, 6);
    geometry.faces.push(f16);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    let f17 = new T.Face3(6, 9, 1);
    geometry.faces.push(f17);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    geometry.computeFaceNormals();
    geometry.uvsNeedUpdate = true;
    //

    let tl = new T.TextureLoader().load("../images/housetex.png");
    let material = new T.MeshStandardMaterial({ map: tl, roughness: 0.75 });
    let mesh = new T.Mesh(geometry, material);
    super(`PlainHouse-${phObCtr++}`, mesh);

    mesh.position.x = params.x ? Number(params.x) : 0;
    mesh.position.y = params.y ? Number(params.y) : 0;
    mesh.position.z = params.z ? Number(params.z) : 0;
    mesh.rotation.y = params.rot ? Number(params.rot) : 0;

    mesh.scale.set(params.size ? Number(params.size) : 1, params.size ? Number(params.size) : 1, params.size ? Number(params.size) : 1);
  }
}

let ph2ObCtr = 0;
export class PlainHouse2 extends GrObject {
  constructor(params = {}) {
    let geometry = new T.Geometry();
    //
    geometry.vertices.push(
    	new T.Vector3(0, 0, 0),
    	new T.Vector3(0, 5, 0),
    	new T.Vector3(0, 5, 5),
    	new T.Vector3(0, 0, 5),
    	new T.Vector3(-5, 0, 5),
    	new T.Vector3(-5, 5, 5),
    	new T.Vector3(-5, 5, 0),
    	new T.Vector3(-5, 0, 0),
    	new T.Vector3(-5, 0, 0),
    	new T.Vector3(-2.5, 7.5, 5),
    	new T.Vector3(-2.5, 7.5, 0)
    );
    //
    geometry.faceVertexUvs = [[]];
    //#3
    let f1 = new T.Face3(0, 1, 2);
    geometry.faces.push(f1);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0.5),
      new T.Vector2(0, 0),
      new T.Vector2(0.5, 0)
    ]);
    let f2 = new T.Face3(0, 2, 3);
    geometry.faces.push(f2);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0.5),
      new T.Vector2(0.5, 0),
      new T.Vector2(0.5, 0.5)
    ]);
    // #5
    let f3 = new T.Face3(3, 2, 5);
    geometry.faces.push(f3);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 1),
      new T.Vector2(0, 0.5),
      new T.Vector2(0.5, 0.5)
    ]);
    let f4 = new T.Face3(3, 5, 4);
    geometry.faces.push(f4);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(0.5, 1)
    ]);
    // #6
    let f6 = new T.Face3(1, 5, 2);
    geometry.faces.push(f6);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.66, 0.33),
      new T.Vector2(1, 0),
      new T.Vector2(0.66, 0)
    ]);
    let f7 = new T.Face3(1, 6, 5);
    geometry.faces.push(f7);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.66, 0.33),
      new T.Vector2(1, 0.33),
      new T.Vector2(1, 0)
    ]);
    // #2
    let f8 = new T.Face3(4, 5, 6);
    geometry.faces.push(f8);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 1),
      new T.Vector2(0, 0.5),
      new T.Vector2(0.5, 0.5)
    ]);
    let f9 = new T.Face3(4, 6, 7);
    geometry.faces.push(f9);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(0.5, 1)
    ]);
    // #4
    let f10 = new T.Face3(0, 7, 6);
    geometry.faces.push(f10);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 0.5),
      new T.Vector2(0, 0.5),
      new T.Vector2(0, 1)
    ]);
    let f11 = new T.Face3(0, 6, 1);
    geometry.faces.push(f11);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 0.5),
      new T.Vector2(0, 1),
      new T.Vector2(0.5, 1)
    ]);
    // #1
    let f12 = new T.Face3(0, 3, 4);
    geometry.faces.push(f12);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.33, 0.66),
      new T.Vector2(0.66, 0.66),
      new T.Vector2(0.66, 0.33)
    ]);
    let f13 = new T.Face3(0, 4, 7);
    geometry.faces.push(f13);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.33, 0.66),
      new T.Vector2(0.66, 0.33),
      new T.Vector2(0.33, 0.33)
    ]);
    //roof
    //front triangle
    let f14 = new T.Face3(1, 9, 2);
    geometry.faces.push(f14);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    //sides
    let f15 = new T.Face3(2, 9, 5);
    geometry.faces.push(f15);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    let f16 = new T.Face3(5, 9, 6);
    geometry.faces.push(f16);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    let f18 = new T.Face3(6, 9, 10);
    geometry.faces.push(f18);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    let f19 = new T.Face3(1, 10, 9);
    geometry.faces.push(f19);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    //end triangle
    let f17 = new T.Face3(6, 10, 1);
    geometry.faces.push(f17);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    geometry.computeFaceNormals();
    geometry.uvsNeedUpdate = true;
    //

    let tl = new T.TextureLoader().load("../images/housetex.png");
    let material = new T.MeshStandardMaterial({ map: tl, roughness: 0.75 });
    let mesh = new T.Mesh(geometry, material);
    super(`PlainHouse2-${ph2ObCtr++}`, mesh);

    mesh.position.x = params.x ? Number(params.x) : 0;
    mesh.position.y = params.y ? Number(params.y) : 0;
    mesh.position.z = params.z ? Number(params.z) : 0;
    mesh.rotation.y = params.rot ? Number(params.rot) : 0;

    mesh.scale.set(params.size ? Number(params.size) : 1, params.size ? Number(params.size) : 1, params.size ? Number(params.size) : 1);

  }
}

let ph3ObCtr = 0;
export class PlainHouse3 extends GrObject {
  constructor(params = {}) {
    let geometry = new T.Geometry();
    //
    geometry.vertices.push(
    	new T.Vector3(0, 0, 0),
    	new T.Vector3(0, 7, 0),
    	new T.Vector3(0, 7, 7),
    	new T.Vector3(0, 0, 7),
    	new T.Vector3(-7, 0, 7),
    	new T.Vector3(-7, 7, 7),
    	new T.Vector3(-7, 7, 0),
    	new T.Vector3(-7, 0, 0),
    	new T.Vector3(-7, 0, 0),
    	new T.Vector3(-3.5, 10.5, 4),
    	new T.Vector3(-3.5, 10.5, )
    );
    //
    geometry.faceVertexUvs = [[]];
    //#3
    //#3
    let f1 = new T.Face3(0, 1, 2);
    geometry.faces.push(f1);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0.5),
      new T.Vector2(0, 0),
      new T.Vector2(0.5, 0)
    ]);
    let f2 = new T.Face3(0, 2, 3);
    geometry.faces.push(f2);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0.5),
      new T.Vector2(0.5, 0),
      new T.Vector2(0.5, 0.5)
    ]);
    // #5
    let f3 = new T.Face3(3, 2, 5);
    geometry.faces.push(f3);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 1),
      new T.Vector2(0, 0.5),
      new T.Vector2(0.5, 0.5)
    ]);
    let f4 = new T.Face3(3, 5, 4);
    geometry.faces.push(f4);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(0.5, 1)
    ]);
    // #6
    let f6 = new T.Face3(1, 5, 2);
    geometry.faces.push(f6);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.66, 0.33),
      new T.Vector2(1, 0),
      new T.Vector2(0.66, 0)
    ]);
    let f7 = new T.Face3(1, 6, 5);
    geometry.faces.push(f7);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.66, 0.33),
      new T.Vector2(1, 0.33),
      new T.Vector2(1, 0)
    ]);
    // #2
    let f8 = new T.Face3(4, 5, 6);
    geometry.faces.push(f8);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 1),
      new T.Vector2(0, 0.5),
      new T.Vector2(0.5, 0.5)
    ]);
    let f9 = new T.Face3(4, 6, 7);
    geometry.faces.push(f9);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(0.5, 1)
    ]);
    // #4
    let f10 = new T.Face3(0, 7, 6);
    geometry.faces.push(f10);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 0.5),
      new T.Vector2(0, 0.5),
      new T.Vector2(0, 1)
    ]);
    let f11 = new T.Face3(0, 6, 1);
    geometry.faces.push(f11);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 0.5),
      new T.Vector2(0, 1),
      new T.Vector2(0.5, 1)
    ]);
    // #1
    let f12 = new T.Face3(0, 3, 4);
    geometry.faces.push(f12);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.33, 0.66),
      new T.Vector2(0.66, 0.66),
      new T.Vector2(0.66, 0.33)
    ]);
    let f13 = new T.Face3(0, 4, 7);
    geometry.faces.push(f13);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.33, 0.66),
      new T.Vector2(0.66, 0.33),
      new T.Vector2(0.33, 0.33)
    ]);
    //roof
    //front triangle
    let f14 = new T.Face3(1, 9, 2);
    geometry.faces.push(f14);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    //sides
    let f15 = new T.Face3(2, 9, 5);
    geometry.faces.push(f15);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    let f16 = new T.Face3(5, 9, 6);
    geometry.faces.push(f16);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    let f18 = new T.Face3(6, 9, 10);
    geometry.faces.push(f18);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    let f19 = new T.Face3(1, 10, 9);
    geometry.faces.push(f19);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    //end triangle
    let f17 = new T.Face3(6, 10, 1);
    geometry.faces.push(f17);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0.5, 1),
      new T.Vector2(0.5, 0.5),
      new T.Vector2(1, 0.5)
    ]);
    geometry.computeFaceNormals();
    geometry.uvsNeedUpdate = true;
    //

    let tl = new T.TextureLoader().load("../images/housetex.png");
    let material = new T.MeshStandardMaterial({ map: tl, roughness: 0.75 });
    let mesh = new T.Mesh(geometry, material);
    super(`PlainHouse3-${ph3ObCtr++}`, mesh);

    mesh.position.x = params.x ? Number(params.x) : 0;
    mesh.position.y = params.y ? Number(params.y) : 0;
    mesh.position.z = params.z ? Number(params.z) : 0;
    mesh.scale.set(params.size ? Number(params.size) : 1, params.size ? Number(params.size) : 1, params.size ? Number(params.size) : 1);

  }
}

let treeObCtr = 0;
export class Tree extends GrObject {
  constructor(params = {}) {
    let tree = new T.Group();

    let geometry = new T.ConeGeometry( 1, 2, 32 );
    let tl = new T.TextureLoader().load("../images/tree.jpg");
    let material = new T.MeshStandardMaterial({ map: tl, roughness: 0.75 });
    //var material = new T.MeshBasicMaterial( {color: 0xffff00} );
    let mesh = new T.Mesh(geometry, material);
    mesh.position.y = 2;
    tree.add(mesh);

    let trunkgeo = new T.CylinderGeometry( 0.2, 0.2, 2, 32 );
    let trunkmat = new T.MeshBasicMaterial( {color: "brown"} );
    let tmesh = new T.Mesh(trunkgeo, trunkmat);
    tmesh.position.y = 1;
    tree.add(tmesh);

    super(`Tree-${treeObCtr++}`, tree);

    tree.position.x = params.x ? Number(params.x) : 0;
    tree.position.y = params.y ? Number(params.y) : 0;
    tree.position.z = params.z ? Number(params.z) : 0;
  }
}