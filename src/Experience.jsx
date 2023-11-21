import {OrbitControls, Sparkles} from "@react-three/drei"
import Ground from "./Components/Ground"
import Lights from "./Components/Lights"
import Vehicle from "./Components/Vehicle/Vehicle"
import { Physics } from "@react-three/cannon"
import Farm from "./Components/Farm"
import Text from "./Components/Text"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import * as THREE from "three"
import { useEffect } from "react"

const Experience = () => {

    const [smoothedCameraPosition] = useState(()=> new THREE.Vector3(150,150,150))
    const [currentCameraPosition] = useState(()=> new THREE.Vector3(30,30,30))
    const [backgroudMusic] = useState(() => new Audio("./assets/backgroundMusic.mp3"))

    useEffect(() => {
        backgroudMusic.loop = true
        backgroudMusic.volume = 0.1
        backgroudMusic.play()
    }, [backgroudMusic])

    useFrame((state, delta) => {
        smoothedCameraPosition.lerp(currentCameraPosition, 2*delta)
        state.camera.position.copy(smoothedCameraPosition)
    })

    return(
        <>
            <OrbitControls makeDefault/>
            
            <Lights/>
            <Sparkles
                count={50}
                size={25}
                speed={2}
                noise={2}
                scale={[30,5,30]}
                position-y={3}
            />
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