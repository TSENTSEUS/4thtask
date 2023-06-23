import Experience from "../Experience.js";
import * as THREE from 'three'

export default class MoveControls {
    constructor() {
        this.experience = new Experience()
        this.blocker = document.getElementById('blocker')
        this.instructions = document.getElementById('instructions')
        this.controls = this.experience.camera.controls
        this.movement  = {
            forward: false,
            backward: false,
            left: false,
            right: false,
        };

        this.inputListeners()
        this.initiateControls()
    }

    inputListeners()
    {
        this.instructions.addEventListener('click', () => {
            this.controls.lock()
        })

        this.controls.addEventListener('lock', () => {
            this.instructions.style.display = 'none'
            this.blocker.style.display = 'none'
        })

        this.controls.addEventListener('unlock', () => {
            this.blocker.style.display = 'block'
            this.instructions.style.display = ''
        })
    }
    initiateControls ()
    {
        document.addEventListener('keydown', this.onKeyDown.bind(this))
        document.addEventListener('keyup', this.onKeyUp.bind(this))
    }
    onKeyDown (event){
        switch (event.code) {
            case 'KeyW':
                this.movement.forward = true;
                break
            case 'KeyA':
                this.movement.left = true;
                break
            case 'KeyS':
                this.movement.backward = true;
                break
            case 'KeyD':
                this.movement.right = true;
                break
        }
    }

    onKeyUp (event) {
        switch ( event.code ) {
            case 'KeyW':
                this.movement.forward = false;
                break
            case 'KeyA':
                this.movement.left = false;
                break
            case 'KeyS':
                this.movement.backward = false;
                break
            case 'KeyD':
                this.movement.right = false;
                break
        }
    }


    update()
    {
        if(this.controls.isLocked){
            if(this.movement.forward) this.controls.moveForward(.05)
            if(this.movement.backward) this.controls.moveForward(-.05)
            if(this.movement.left) this.controls.moveRight(-.05)
            if(this.movement.right) this.controls.moveRight(.05)
        }
    }

}