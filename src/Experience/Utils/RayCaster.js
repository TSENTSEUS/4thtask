import * as THREE from 'three'
import Experience from "../Experience.js";

export default class RayCaster {
    constructor() {
        this.experience = new Experience();
        this.raycaster = new THREE.Raycaster();
        this.camera = this.experience.camera.instance;
        this.controls = this.experience.camera.controls;
    }

    setRaycaster()
    {
        this.origin = new THREE.Vector3(this.camera.position.x, this.camera.position.y, this.camera.position.z);
        this.direction = new THREE.Vector3(this.camera.position.x, this.camera.position.y - 5, this.camera.position.z);
        this.raycaster.set(this.origin, this.direction)
        this.cameraPosition()
    }
    cameraPosition() {
        if(this.controls.isLocked === true){
            this.floor = this.experience.world.floor.scene;
            if(this.floor){
                this.intersect = this.raycaster.intersectObject(this.floor);
                if(this.intersect.length)
                {
                    this.camera.position.y = this.intersect[0].point.y + .5
                }
            }
        }
        this.camera.position.copy(this.controls.getObject().position)
    }

    update() {
        this.setRaycaster()
    }

}