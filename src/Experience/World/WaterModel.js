import * as THREE from 'three'
import { Water } from 'three/addons/objects/Water.js';
import Experience from "../Experience.js";

export default class WaterModel {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.water = undefined;
        this.setModel();
    }



    setModel() {
        this.waterGeometry = new THREE.PlaneGeometry(100, 100);
        this.water = new Water(
            this.waterGeometry,
            {
                textureWidth: 512,
                textureHeight: 512,
                waterNormals: new THREE.TextureLoader().load( 'textures/water/waternormals.jpg', function ( texture ) {
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                } ),
                sunDirection: new THREE.Vector3(),
                sunColor: 0xffffff,
                waterColor: 0x001e0f,
                distortionScale: 3.7,
            }
        )
        this.water.position.y = .02;
        this.water.rotation.x = - Math.PI / 2;
        this.water.material.uniforms.size.value = 10;
        this.scene.add( this.water );
    }

    update() {
        this.water.material.uniforms[ 'time' ].value += .5 / 60.0;
    }
}