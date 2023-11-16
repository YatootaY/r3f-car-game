import { useBox } from "@react-three/cannon"
import { useGLTF,Clone } from "@react-three/drei"
import { useRef } from "react"


const Building = ({position}) => {

    const house = useGLTF("./assets/house1.gltf")

    const [body, bodyApi] = useBox(()=>({
        type: "Static",
        args: [6,4,4],
        position,
    }), useRef())

    return(
        <>
            <mesh ref={body}>
                <Clone object={house.scene} scale={5} position={[-0.1,-2,0]}/>
            </mesh>
        </>
    )
}

export default Building