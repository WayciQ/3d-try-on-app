import * as THREE from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
var modelObj;
let renderer;
let camera;
var container;
let scene;
let windowWidth = 488;
let windowHeight = 375;
let controls;

function setObjToScene(objName) {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(80, 30, 150);
  scene.background = new THREE.Color(0xa0a0a0);
  var mtlLoader = new MTLLoader();
  mtlLoader.setMaterialOptions({ side: THREE.DoubleSide });
  mtlLoader.load(
    process.env.PUBLIC_URL + "/obj/" + objName + ".mtl",
    (materials) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        process.env.PUBLIC_URL + "/obj/" + objName + ".obj",
        (obj) => {
          modelObj = obj;
          modelObj.name = objName;
          modelObj.renderOrder = 3;
          scene.add(modelObj);
        }
      );
    }
  );
}
function setTriangleToScene() {
  const triGeo = new THREE.Geometry();
  triGeo.vertices.push(new THREE.Vector3(1, 0, 0));
  triGeo.vertices.push(new THREE.Vector3(-1, 0, 0));
  triGeo.vertices.push(new THREE.Vector3(0, 0, 1));

  triGeo.faces.push(new THREE.Face3(0, 1, 2));

  const triangle = new THREE.Mesh(
    triGeo,
    new THREE.MeshBasicMaterial({ side: THREE.DoubleSide })
  );
  triangle.visible = false;
  scene.add(triangle);
}

function setTheLights() {
  const light = new THREE.PointLight(0xeeeeee);
  light.position.set(10, 50, 20);
  scene.add(light);
  const lightAmb = new THREE.AmbientLight(0xd1d1e0);
  scene.add(lightAmb);
}

// window.onresize = function () {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize( window.innerWidth, window.innerHeight );
// };

export function displayModelToScence(objName) {
  container = document.getElementById("demo");
  setObjToScene(objName);
  setTheLights();
  setTriangleToScene();
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(windowWidth, windowHeight);
  if (container.childNodes.length === 1) {
    container.removeChild(container.childNodes[0]);
  }
  container.appendChild(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1, 0);
  controls.update();
  controls.enablePan = false;
  controls.enableDamping = true;
  animate();
}

export function cancelDisplayModel() {
  container = document.getElementById("demo");
  container.removeChild(container.childNodes[0]);
}
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}
