import { useBox } from "@react-three/cannon"
import { Text3D, Center } from "@react-three/drei"
import * as THREE from 'three'

THREE.ColorManagement.legacyMode = false
const textMaterial = new THREE.MeshStandardMaterial({color:"white"})

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
                        material={textMaterial}
                    >
                        W
                    </Text3D>
                </Center>
            </mesh>

            <mesh ref={text2}>
                <Center>
                    <Text3D 
                        font={"/gt.json"} 
                        height={0.5}
                        material={textMaterial}
                    >
                        E
                    </Text3D>
                </Center>
            </mesh>

            <mesh ref={text3}>
                <Center>
                    <Text3D 
                        font={"/gt.json"} 
                        height={0.5}
                        material={textMaterial}
                    >
                        L
                    </Text3D>
                </Center>
            </mesh>

            <mesh ref={text4}>
                <Center>
                    <Text3D 
                        font={"/gt.json"} 
                        height={0.5}
                        material={textMaterial}
                    >
                        C
                    </Text3D>
                </Center>
            </mesh>

            <mesh ref={text5}>
                <Center>
                    <Text3D 
                        font={"/gt.json"} 
                        height={0.5}
                        material={textMaterial}
                    >
                        O
                    </Text3D>
                </Center>
            </mesh>

            <mesh ref={text6}>
                <Center>
                    <Text3D 
                        font={"/gt.json"} 
                        height={0.5}
                        material={textMaterial}
                    >
                        M
                    </Text3D>
                </Center>
            </mesh>

            <mesh ref={text7}>
                <Center>
                    <Text3D 
                        font={"/gt.json"} 
                        height={0.5}
                        material={textMaterial}
                    >
                        E
                    </Text3D>
                </Center>
            </mesh>

            
        </>
    )
}

export default Text