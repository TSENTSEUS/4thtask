import * as THREE from 'three'
import Experience from './Experience.js'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'

export default class Camera
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setInstance()
        this.setControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.set(-.5, .2, 1.5)
        this.scene.add(this.instance)
    }

    setControls()
    {
        this.controls = new PointerLockControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.scene.add(this.controls.getObject())
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }


}