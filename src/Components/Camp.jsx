import { useBox } from "@react-three/cannon"
import { useGLTF } from "@react-three/drei"
import { useState } from "react"
import { playAudio } from "../Util"


const Camp = () => {

    const tent = useGLTF("./assets/tent_detailedClosed.glb")
    const statue = useGLTF("./assets/statue_head.glb")
    const [audio] = useState(() => new Audio("./assets/hit.mp3"))

    const [tentBody] = useBox(()=>({
        mass: 1,
        args: [2.5,2.2,2.5],
        position: [12,1.3,-10],
        rotation: [0, -Math.PI, 0],
        onCollide: (e) => playAudio(e,audio)
    }))

    const [statueBody] = useBox(()=>({
        mass:1,
        args: [3,6,3],
        position: [-12,3.2,12],
        rotation: [0, -Math.PI/2, 0],
        onCollide: (e) => playAudio(e,audio)
    }))

    return(
        <>
            <mesh ref={tentBody}>
                <primitive object={tent.scene} scale={4} position-y={-0.9}/>
            </mesh>

            <mesh ref={statueBody}>
                <primitive object={statue.scene} scale={6} position-y={-2.8}/>
            </mesh>
        </>
    )
}

export default Camp