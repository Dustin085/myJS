import * as THREE from "./three.module.js"

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xeeeeee, 1.0);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerHeight / window.innerHeight,
    0.1,
    100
);
camera.position.set(10, 10, 10);
camera.lookAt(scene.position);

const pointLight = new THREE.PointLight(0xffffff, 1000, 100);
pointLight.position.set(10, 10, -10);
pointLight.castShadow = true;
scene.add(pointLight);

pointLight.shadow.mapSize.width = 512; // default
pointLight.shadow.mapSize.height = 512; // default
pointLight.shadow.camera.near = 0.5; // default
pointLight.shadow.camera.far = 500; // default

const geometry = new THREE.BoxGeometry(1, 1, 1); // 幾何體
const material = new THREE.MeshPhongMaterial({
    color: 0x0000ff
}); // 材質
const cube = new THREE.Mesh(geometry, material); // 建立網格物件
cube.position.set(0, 0, 0);
scene.add(cube);

// 監聽螢幕寬高變化來做簡單 RWD 設定
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function render() {
    animate()
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

function animate() {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
}

render();

console.dir(pointLight);

