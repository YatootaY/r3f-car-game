import { useBox } from "@react-three/cannon"
import { useGLTF, Clone } from "@react-three/drei"
import { useState } from "react"
import { playAudio } from "../Util"


const Trees = () => {

    const tree1 = useGLTF("./assets/tree_blocks.glb")
    const tree2 = useGLTF("./assets/tree_detailed.glb")
    const tree3 = useGLTF("./assets/tree_plateau.glb")
    const [audio] = useState(() => new Audio("./assets/hit.mp3"))

    const [tree1Body1] = useBox(() => ({
        mass: 1,
        args: [1,4.6,1],
        position: [16,3,7],
        onCollide: (e) => playAudio(e, audio)
    }))

    const [tree1Body2] = useBox(() => ({
        mass: 1,
        args: [1,4.6,1],
        position: [-4,3,4],
        onCollide: (e) => playAudio(e,audio)
    }))

    const [tree2Body1] = useBox(() => ({
        mass: 1,
        args: [1,5.2,1],
        position: [3,3,1],
        onCollide: (e) => playAudio(e,audio)
    }))

    const [tree3Body1] = useBox(() => ({
        mass: 1,
        args: [1,5.2,1],
        position: [-10,3,-5],
        onCollide: (e) => playAudio(e,audio)
    }))

    return(
        <>
            <mesh ref={tree1Body1}>
                <Clone object={tree1.scene} scale={4} position-y={-2.2}/>
            </mesh>

            <mesh ref={tree1Body2}>
                <Clone object={tree1.scene} scale={4} position-y={-2.2}/>
            </mesh>

            <mesh ref={tree2Body1}>
                <Clone object={tree2.scene} scale={4} position-y={-2.4}/>
            </mesh>

            <mesh ref={tree3Body1}>
                <Clone object={tree3.scene} scale={4} position-y={-2.4}/>
            </mesh>
        </>
    )
}

export default Trees