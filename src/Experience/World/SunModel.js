import Experience from "../Experience.js";
import * as THREE from 'three'

export default class SunModel {
    constructor() {
        this.experience = new Experience();
        this.sky = this.experience.sky.sky;
        this.water = this.experience.water.water;
        this.scene = this.experience.scene;

        this.sun = new THREE.Vector3();
        this.renderTarget = undefined;
        this.pmremGenerator = new THREE.PMREMGenerator(this.experience.renderer.instance);
        this.updateSun();
    }

    updateSun ()
    {
        const phi = THREE.MathUtils.degToRad( 90 - 15 );
        const theta = THREE.MathUtils.degToRad( 150 );

        this.sun.setFromSphericalCoords( 1, phi, theta );

        this.sky.material.uniforms[ 'sunPosition' ].value.copy( this.sun );
        this.water.material.uniforms[ 'sunDirection' ].value.copy( this.sun ).normalize();

        if ( this.renderTarget !== undefined ) this.renderTarget.dispose();

        this.renderTarget = this.pmremGenerator.fromScene( this.sky );

        this.scene.environment = this.renderTarget.texture;
    }

}