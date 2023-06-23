import { Sky } from 'three/addons/objects/Sky.js';
import Experience from "../Experience.js";
export default class SkyModel {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene;

        this.sky = new Sky();
        this.sky.scale.setScalar(1000);

        this.scene.add(this.sky);

        this.skyUniforms = this.sky.material.uniforms;

        this.skyUniforms[ 'turbidity' ].value = 10;
        this.skyUniforms[ 'rayleigh' ].value = 2;
        this.skyUniforms[ 'mieCoefficient' ].value = 0.005;
        this.skyUniforms[ 'mieDirectionalG' ].value = 0.8;
    }
}