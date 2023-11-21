import { usePlane } from "@react-three/cannon"
import Walls from "./Walls"
import Trees from "./Trees"
import Fence from "./Fence"
import Camp from "./Camp"
import Keys from "./Keys"

const Ground = () => {

    const [ref] = usePlane(() => ({
        type: "Static",
        rotation: [-Math.PI / 2, 0,0]}
    ))

    return(
        <>
            <mesh receiveShadow ref={ref}>
                <planeGeometry args={[40,40]}/>
                <meshStandardMaterial color="#e5be87"/>
            </mesh>
            <Trees/>
            <Fence/>
            <Camp/>
            <Walls/>
            <Keys/>
        </>
    )
}

export default Ground