import { usePlane } from "@react-three/cannon"
import Walls from "./Walls"
import { Text } from "@react-three/drei"

const Ground = () => {

    const [ref] = usePlane(() => ({
        type: "Static",
        rotation: [-Math.PI / 2, 0,0]}
    ))

    const color = "#6a2e00"

    return(
        <>
            <mesh receiveShadow ref={ref}>
                <planeGeometry args={[40,40]}/>
                <meshStandardMaterial color="#f79000"/>
            </mesh>
            <Walls/>
            <mesh
                position={[8,0.01,10]} 
                rotation={[0, Math.PI / 2, 0]}
            >
                <Text
                    font="./assets/kanit-v15-latin-600.woff"
                    rotation={[-Math.PI / 2, 0, 0]}
                    anchorX="center"
                    anchorY="center"
                    fontSize={1}
                    lineHeight={1.2}
                >
                    {`W - Forward\nS - Backward\nA - Turn Left\nD - Turn Right\nSpace - Brake`}
                    <meshBasicMaterial color={color}/>
                </Text>
            </mesh>
        </>
    )
}

export default Ground