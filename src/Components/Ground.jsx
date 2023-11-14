import { usePlane } from "@react-three/cannon"

const Ground = () => {

    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0,0]}))

    return(
        <>
            <mesh receiveShadow ref={ref}>
                <planeGeometry args={[100,100]}/>
                <meshStandardMaterial color="orange"/>
            </mesh>
        </>
    )
}

export default Ground