import { usePlane } from "@react-three/cannon"

const Ground = () => {

    const [ref] = usePlane(() => ({
        type: "Static",
        rotation: [-Math.PI / 2, 0,0]}
    ))

    return(
        <>
            <mesh receiveShadow ref={ref}>
                <planeGeometry args={[40,40]}/>
                <meshStandardMaterial color="#f79000"/>
            </mesh>
        </>
    )
}

export default Ground