import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Floor
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.model = this.resources.items.landscape.scene
        this.setModel()
    }
    setModel()
    {
        this.scene.add(this.model);
        this.setTexture()
    }
    setTexture(){
        this.model.traverse((child) => {
            if(child instanceof THREE.Mesh)
            {
                console.log(child)
                child.material.color.set('orange');

            }
        })
    }


}