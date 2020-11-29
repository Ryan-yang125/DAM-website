function initThree() {
    initRender();
    initScene();
    initCamera();
    initLight();
    initControls();
    //initStats();
}


var renderer;
function initRender() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    //告诉渲染器需要阴影效果
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 默认的是，没有设置的这个清晰 THREE.PCFShadowMap
    renderer.setClearColor(0xffffff);
    document.body.appendChild(renderer.domElement);
}

var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 40, 100);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
}

var scene;
function initScene() {
    scene = new THREE.Scene();
    // var path = "./assets/sky1/";        //设置路径
    // var format = '.jpg';                        //设定格式
    // var urls = [
    //     path + 'posx' + format, path + 'negx' + format,
    //     path + 'posy' + format, path + 'negy' + format,
    //     path + 'posz' + format, path + 'negz' + format
    // ];
    // var textureCube = new THREE.CubeTextureLoader().load(urls);

    // scene.background = textureCube; //作为背景贴图
}

var light, light2, light3;
function initLight() {
    //平行光
    // light = new THREE.DirectionalLight(0xFFFFFF);
    // light.position.set(100, 100, 100).normalize();
    // light.castShadow = true;
    // scene.add(light);
    //点光源
    light3 = new THREE.PointLight(0xCCCCCC);
    light3.position.set(-100, 0, -100);
    light3.castShadow = true;
    scene.add(light3);
    //环境光
    light2 = new THREE.AmbientLight(0x222222);
    scene.add(light2);
    light = new THREE.SpotLight(0xffffff);
    light.position.set(100, 30, 100);
    //告诉平行光需要开启阴影投射
    light.castShadow = true;
    scene.add(light);
}

// //初始化性能插件
// var stats;
// function initStats() {
//     stats = new Stats();
//     document.body.appendChild(stats.dom);
// }

//用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
var controls;
function initControls() {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    //旋转速度
    controls.rotateSpeed = 0.5;
    //变焦速度
    controls.zoomSpeed = 1;
    //平移速度
    controls.panSpeed = 0.8;
    //是否不变焦
    controls.noZoom = false;
    //是否不平移
    controls.noPan = false;
    //是否开启移动惯性
    controls.staticMoving = false;
    //动态阻尼系数 就是灵敏度
    controls.dynamicDampingFactor = 0.3;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.2;
    controls.addEventListener('change', render);
}