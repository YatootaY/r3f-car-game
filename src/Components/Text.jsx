import { useBox } from "@react-three/cannon"
import { Text3D, Center } from "@react-three/drei"

const Text = () => {

    const [text1] = useBox(() => ({
        mass: 1,
        position: [-0.2,1,7],
        args: [1.2,1,0.5],
        rotation: [0, Math.PI/4,0]
    }))

    const [text2] = useBox(() => ({
        mass: 1,
        position: [1,1,6],
        args: [0.8,1,0.5],
        rotation: [0, Math.PI/4,0]
    }))

    const [text3] = useBox(() => ({
        mass: 1,
        position: [2,1,5],
        args: [0.8,1,0.5],
        rotation: [-30, Math.PI/4,0]
    }))

    const [text4] = useBox(() => ({
        mass: 1,
        position: [3,1,4],
        args: [0.8,1,0.5],
        rotation: [0, Math.PI/4,0]
    }))

    const [text5] = useBox(() => ({
        mass: 1,
        position: [4.1,1,3],
        args: [1,1,0.5],
        rotation: [0, Math.PI/4,0]
    }))

    const [text6] = useBox(() => ({
        mass: 1,
        position: [5.3,1,2],
        args: [1,1,0.5],
        rotation: [0, Math.PI/4,0]
    }))

    const [text7] = useBox(() => ({
        mass: 1,
        position: [6.3,1,1],
        args: [0.7,1,0.5],
        rotation: [0, Math.PI/4,0]
    }))

    return(
        <>

            <mesh ref={text1}>
                <Center>
                    <Text3D 
                        font={"/gt.json"} 
                        height={0.5}
                    >
                        W
                        <meshStandardMaterial color="white"/>
                    </Text3D>
                </Center>
            </mesh>

            <mesh ref={text2}>
                <Center>
                    <Text3D 
                        font={"/gt.json"} 
                        height={0.5}
                    >
                        E
                        <meshStandardMaterial color="white"/>
                    </Text3D>
                </Center>
            </mesh>

            <mesh ref={text3}>
                <Center>
                    <Text3D 
                        font={"/gt.json"} 
                        height={0.5}
                    >
                        L
                        <meshStandardMaterial color="white"/>
                    </Text3D>
                </Center>
            </mesh>

            <mesh ref={text4}>
                <Center>
                    <Text3D 
                        font={"/gt.json"} 
                        height={0.5}
                    >
                        C
                        <meshStandardMaterial color="white"/>
                    </Text3D>
                </Center>
            </mesh>

            <mesh ref={text5}>
                <Center>
                    <Text3D 
                        font={"/gt.json"} 
                        height={0.5}
                    >
                        O
                        <meshStandardMaterial color="white"/>
                    </Text3D>
                </Center>
            </mesh>

            <mesh ref={text6}>
                <Center>
                    <Text3D 
                        font={"/gt.json"} 
                        height={0.5}
                    >
                        M
                        <meshStandardMaterial color="white"/>
                    </Text3D>
                </Center>
            </mesh>

            <mesh ref={text7}>
                <Center>
                    <Text3D 
                        font={"/gt.json"} 
                        height={0.5}
                    >
                        E
                        <meshStandardMaterial color="white"/>
                    </Text3D>
                </Center>
            </mesh>

            
        </>
    )
}

export default Text