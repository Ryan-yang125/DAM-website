
function initModel() {
    //material = new THREE.MeshLambertMaterial({ color: 0xffefbb });
    var loader = new THREE.OBJLoader();
    var params = new URLSearchParams(location.search)
    loader.load(params.get('obj'), function (obj) {
        // console.log(obj);
        // console.log(obj.children[0].material);
        obj.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = new THREE.MeshLambertMaterial({ color: 0xffffff });
                child.castShadow = true;
                //child.receiveShadow = true;                   
            }
        });
        //obj.rotateZ(Math.PI);
        obj.position.y = 0;
        scene.add(obj);
    })
    
    //立方体
    // var cubeGeometry = new THREE.CubeGeometry(35, 35, 35);
    // var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x00ffff });

    // var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // cube.position.x = 25;
    // cube.position.y = 5;
    // cube.position.z = -5;

    // //告诉立方体需要投射阴影
    // cube.castShadow = true;

    // scene.add(cube);

    //底部平面
    // var planeGeometry = new THREE.PlaneGeometry(100, 100);
    // var planeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

    // var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    // plane.rotation.x = - 0.5 * Math.PI;
    // plane.position.y = -10;

    // //告诉底部平面需要接收阴影
    // plane.receiveShadow = true;

    // scene.add(plane);

}