import {OrbitControls} from "@react-three/drei"
import Ground from "./Components/Ground"
import Lights from "./Components/Lights"
import Vehicle from "./Components/Vehicle/Vehicle"
import { Physics } from "@react-three/cannon"
import Farm from "./Components/Farm"
import Text from "./Components/Text"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import * as THREE from "three"

const Experience = () => {

    const [smoothedCameraPosition] = useState(()=> new THREE.Vector3(150,150,150))
    const [currentCameraPosition] = useState(()=> new THREE.Vector3(30,30,30))

    useFrame((state, delta) => {
        smoothedCameraPosition.lerp(currentCameraPosition, 2*delta)
        state.camera.position.copy(smoothedCameraPosition)
    })

    return(
        <>
            <OrbitControls makeDefault/>
            
            <Lights/>
            <Physics>
                    <Vehicle/>
                    <Farm/>
                    <Text/>
                    <Ground/>
            </Physics>

        </>
    )
}

export default Experience