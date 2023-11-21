import { useBox } from "@react-three/cannon"

const Walls = () => {

    const color = "#918866"

    const [wall1] = useBox(() => ({
        type: "Static",
        args: [39,4,1],
        position: [0,2,-20]
    }))

    const [wall2] = useBox(() => ({
        type: "Static",
        args: [39,4,1],
        position: [0,2,20]
    }))

    const [wall3] = useBox(() => ({
        type: "Static",
        args: [1,4,39],
        position: [20,2,0]
    }))

    const [wall4] = useBox(() => ({
        type: "Static",
        args: [1,4,39],
        position: [-20,2,0]
    }))

    return(
        <>
            <mesh ref={wall1}>
                <boxGeometry args={[39,4,1]}/>
                <meshStandardMaterial color={color}/>
            </mesh>

            <mesh ref={wall2}>
                <boxGeometry args={[39,4,1]}/>
                <meshStandardMaterial color={color}/>
            </mesh>

            <mesh ref={wall3}>
                <boxGeometry args={[1,4,41]}/>
                <meshStandardMaterial color={color}/>
            </mesh>

            <mesh ref={wall4}>
                <boxGeometry args={[1,4,41]}/>
                <meshStandardMaterial color={color}/>
            </mesh>
        </>
    )
}

export default Walls