import { useBox } from "@react-three/cannon"
import { useGLTF, Clone } from "@react-three/drei"


const Fence = () => {

    const fence = useGLTF("./assets/fence_planks.glb")

    const [fence1] = useBox(()=>({
        type: "Static",
        args:[10,1,0.4],
        position: [-0.5,1,-7]
    }))

    const [fence2] = useBox(()=>({
        type: "Static",
        args:[10,1,0.4],
        position: [-6,1,-1.5],
        rotation: [0, Math.PI/2, 0]
    }))

    const [fence3] = useBox(()=>({
        type: "Static",
        args:[3,1,0.4],
        position: [-8,1,4],
        rotation: [0, 0, 0]
    }))

    return(
        <>
            <mesh ref={fence1}>
                <Clone object={fence.scene} scale={3} position={[-3.5,-0.3,1.4]}/>
                <Clone object={fence.scene} scale={3} position={[0,-0.3,1.4]}/>
                <Clone object={fence.scene} scale={3} position={[3.5,-0.3,1.4]}/>
            </mesh>

            <mesh ref={fence2}>
                <Clone object={fence.scene} scale={3} position={[-3.5,-0.3,1.4]}/>
                <Clone object={fence.scene} scale={3} position={[0,-0.3,1.4]}/>
                <Clone object={fence.scene} scale={3} position={[3.5,-0.3,1.4]}/>
            </mesh>

            <mesh ref={fence3}>
                <Clone object={fence.scene} scale={3} position={[0,-0.3,1.4]}/>
            </mesh>
        </>
    )
}

export default Fence