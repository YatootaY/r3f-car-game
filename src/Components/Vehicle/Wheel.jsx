import { useGLTF, Center } from "@react-three/drei"

const Wheel = () => {
    const {nodes, materials} = useGLTF("./assets/suv.gltf")

    return(
        <group>
            <Center>
                <mesh 
                    geometry={nodes.Mesh_wheel_frontLeft004.geometry} 
                    material={materials["carTire"]}
                />
                <mesh 
                    geometry={nodes.Mesh_wheel_frontLeft004_1.geometry} 
                    material={materials["plastic.001"]}
                />
            </Center>
        </group>
    )

}

export default Wheel