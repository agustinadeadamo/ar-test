
document.body.appendChild(ARButton.createButton(renderer));

const scene = new THREE.Scene();
const camera =  new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.set(0,0,5)

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    preserveDrawingBuffer: true,
    canvas: canvas,
    context: gl
  });
  renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// Initialize a WebXR session using "immersive-ar".
const session = await navigator.xr.requestSession("immersive-ar");
session.updateRenderState({
  baseLayer: new XRWebGLLayer(session, gl)
});


// A 'local' reference space has a native origin that is located
// near the viewer's position at the time the session was created.
const referenceSpace = await session.requestReferenceSpace('local');



const geometry = new THREE.BoxGeometry( 0.5, 3.5, 0.5 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(-1, 0, -0.5);
scene.add( cube );

const geometry2 = new THREE.BoxGeometry( 0.5, 2.4, 0.5 );
const material2 = new THREE.MeshBasicMaterial( { color: "rgb(253,253,150)" } );
const cube2 = new THREE.Mesh( geometry2, material2 );
cube2.position.set(1, 0, -0.5);
scene.add( cube2 );

const geometry3 = new THREE.BoxGeometry( 0.5, 2, 0.5 );
const material3 = new THREE.MeshBasicMaterial( { color: "rgb(253,253,150)" } );
const cube3 = new THREE.Mesh( geometry3, material3 );
cube3.position.set(2, 0, -0.5);
scene.add( cube3 );

const geometry4 = new THREE.BoxGeometry( 0.5, 3, 0.5 );
const material4 = new THREE.MeshBasicMaterial( { color: "rgb(253,253,150)" } );
const cube4 = new THREE.Mesh( geometry4, material4 );
cube3.position.set(3, 0, -0.5);
scene.add( cube4 );

// scene

function animate() {
    //cube.rotation.x += 0.01
    requestAnimationFrame(animate)
	renderer.render( scene, camera );

}

animate();