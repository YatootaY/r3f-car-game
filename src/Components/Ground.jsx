import { usePlane } from "@react-three/cannon"
import Building from "./Building"

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
            <Building position={[10,2,10]}/>
            <Building position={[-10,2,-10]}/>
            <Building position={[15,2,1]}/>
            <Building position={[-15,2,1]}/>
        </>
    )
}

export default Ground