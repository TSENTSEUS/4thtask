import * as THREE from 'three'
import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Resources from './Utils/Resources.js'

import sources from './sources.js'
import SunModel from "./World/SunModel.js";
import SkyModel from "./World/SkyModel.js";
import WaterModel from "./World/WaterModel.js";
import MoveControls from "./Utils/MoveControls.js";
import RayCaster from "./Utils/RayCaster.js";

let instance = null

export default class Experience
{
    constructor(_canvas)
    {
        // Singleton
        if(instance)
        {
            return instance
        }
        instance = this
        
        // Global access
        window.experience = this

        // Options
        this.canvas = _canvas

        // Setup

        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World();
        this.water = new WaterModel()
        this.sky = new SkyModel()
        this.sun = new SunModel()
        this.raycaster = new RayCaster()
        this.controls = new MoveControls();


        // Resize event
        this.sizes.on('resize', () =>
        {
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()
        })
    }

    resize()
    {
        this.camera.resize()
        this.renderer.resize()
    }

    update()
    {
        this.raycaster.update()
        this.controls.update()
        this.water.update()
        this.renderer.update()
    }


}