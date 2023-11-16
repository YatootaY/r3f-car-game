import { usePlane } from "@react-three/cannon"
import Farm from "./Farm"

const Ground = () => {

    const [ref] = usePlane(() => ({
        type: "Static",
        rotation: [-Math.PI / 2, 0,0]}
    ))

    return(
        <>
            <mesh receiveShadow ref={ref}>
                <planeGeometry args={[50,50]}/>
                <meshStandardMaterial color="orange"/>
            </mesh>
            <Farm/>
        </>
    )
}

export default Ground