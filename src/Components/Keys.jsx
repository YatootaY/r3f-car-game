import { useBox } from "@react-three/cannon"
import {Text} from "@react-three/drei"
import * as THREE from "three"

const material = new THREE.MeshStandardMaterial({color:"white"})
const Keys = () => {

    const [keyW] = useBox(() => ({
        mass: 1,
        args: [1.4,0.8,1.4],
        position: [11,0.4,10]
    }))

    const [keyS] = useBox(() => ({
        mass: 1,
        args: [1.4,0.8,1.4],
        position: [12.6,0.4,10]
    }))

    const [keyD] = useBox(() => ({
        mass: 1,
        args: [1.4,0.8,1.4],
        position: [12.6,0.4,8.4]
    }))

    const [keyA] = useBox(() => ({
        mass: 1,
        args: [1.4,0.8,1.4],
        position: [12.6,0.4,11.6]
    }))

    const [keySpace] = useBox(() => ({
        mass: 1,
        args: [1.4,0.8,4.6],
        position: [14.2,0.4,10]
    }))

    return(
        <>
        
            <mesh
                position={[8,0.01,10]} 
                rotation={[0, Math.PI / 2, 0]}
            >
                <Text
                    font="./assets/kanit-v15-latin-600.woff"
                    rotation={[-Math.PI / 2, 0, 0]}
                    anchorX="center"
                    anchorY="center"
                    fontSize={0.8}
                    lineHeight={1.2}
                >
                    {`Control Guide`}
                    <meshBasicMaterial color="#403e3c"/>
                </Text>
            </mesh>
            <group>
                <mesh
                    material={material}
                    ref={keyW}
                >
                    <Text
                        font="./assets/kanit-v15-latin-600.woff"
                        rotation={[-Math.PI / 2, 0, Math.PI/2]}
                        position-y={0.41}
                        fontSize={0.8}
                    >
                        W
                        <meshBasicMaterial color="#403e3c"/>
                    </Text>
                    <boxGeometry args={[1.4,0.8,1.4]}/>
                </mesh>
                <mesh
                    material={material}
                    ref={keyS}
                >
                    <Text
                        font="./assets/kanit-v15-latin-600.woff"
                        rotation={[-Math.PI / 2, 0, Math.PI/2]}
                        position-y={0.41}
                        fontSize={0.8}
                    >
                        S
                        <meshBasicMaterial color="#403e3c"/>
                    </Text>
                    <boxGeometry args={[1.4,0.8,1.4]}/>
                </mesh>
                <mesh
                    material={material}
                    ref={keyD}
                >
                    <Text
                        font="./assets/kanit-v15-latin-600.woff"
                        rotation={[-Math.PI / 2, 0, Math.PI/2]}
                        position-y={0.41}
                        fontSize={0.8}
                    >
                        D
                        <meshBasicMaterial color="#403e3c"/>
                    </Text>
                    <boxGeometry args={[1.4,0.8,1.4]}/>
                </mesh>
                <mesh
                    material={material}
                    ref={keyA}
                >
                    <Text
                        font="./assets/kanit-v15-latin-600.woff"
                        rotation={[-Math.PI / 2, 0, Math.PI/2]}
                        position-y={0.41}
                        fontSize={0.8}
                    >
                        A
                        <meshBasicMaterial color="#403e3c"/>
                    </Text>
                    <boxGeometry args={[1.4,0.8,1.4]}/>
                </mesh>
                <mesh
                    material={material}
                    ref={keySpace}
                >
                    <Text
                        font="./assets/kanit-v15-latin-600.woff"
                        rotation={[-Math.PI / 2, 0, Math.PI/2]}
                        position-y={0.41}
                        fontSize={0.7}
                    >
                        brake
                        <meshBasicMaterial color="#403e3c"/>
                    </Text>
                    <boxGeometry args={[1.4,0.8,4.6]}/>
                </mesh>
                
            </group>
        </>
    )
}

export default Keys