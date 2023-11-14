import { useBox } from "@react-three/cannon"

const Vehicle = () => {

    const [ref] = useBox(() => ({
        mass: 1,
        position: [0,3,0]
    }))

    return(
        <>
            <mesh castShadow ref={ref}>
                <boxGeometry/>
                <meshStandardMaterial/>
            </mesh>
        </>
    )
}

export default Vehicle