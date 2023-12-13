import { useBox } from "@react-three/cannon"
import { useGLTF } from "@react-three/drei"


const Camp = () => {

    const tent = useGLTF("./assets/tent_detailedClosed.glb")
    const statue = useGLTF("./assets/statue_head.glb")

    const [tentBody] = useBox(()=>({
        mass: 1,
        args: [2.5,2.2,2.5],
        position: [12,1.3,-10],
        rotation: [0, -Math.PI, 0]
    }))

    const [statueBody] = useBox(()=>({
        mass:1,
        args: [3,6,3],
        position: [-12,3.2,12],
        rotation: [0, -Math.PI/2, 0]
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