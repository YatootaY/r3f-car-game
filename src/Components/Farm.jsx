import { useBox } from "@react-three/cannon"
import { useGLTF } from "@react-three/drei"


const Farm = () => {

    const {nodes} = useGLTF("./assets/farm.gltf")
    
    const [barn] = useBox(() => ({
        args: [3,4,5],
        position:[0,2,0],
        mass:1
    }))

    const [well] = useBox(() => ({
        args: [1.5,2,1.5],
        position: [10,1,0],
        mass:1
    }))

    const [windMill] = useBox(() => ({
        mass:1,
        args: [3,12,3],
        position: [5,6,-5]
    }))

    const [wall1] = useBox(() => ({
        type: "Static",
        args: [0.2,0.8,19.5],
        position: [-4.7,0.4,-2.7]
    }))

    const [wall2] = useBox(() => ({
        type: "Static",
        args: [12.7,0.8,0.2],
        position: [1.7,0.4,-12.35]
    }))

    return(
        <>
            <mesh scale={5} ref={barn}>
                <group>
                    <mesh {...nodes.Barn_01} position={[0,0,0]}/>
                    <mesh {...nodes.Plane} position={[0,0.63,0.5]}/>
                </group>
            </mesh>

            <mesh scale={5}>
                <mesh {...nodes.Fence_White013}/>
                <mesh ref={wall1}/>
                <mesh ref={wall2}/>
            </mesh>
            
            <mesh scale={5} ref={well}>
                <mesh {...nodes.Well} position={[0,0.03,0.02]} />
            </mesh>

            <mesh scale={5} ref={windMill}>
                <group >
                    <mesh {...nodes.WindMill} position={[0,0.4,0.1]}/>
                    <mesh {...nodes.WindMill001}  position={[0,0.7,0.2]}/>
                </group>
            </mesh>
            
        </>
    )
}

export default Farm