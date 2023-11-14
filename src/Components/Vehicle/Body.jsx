import { useGLTF, Center } from "@react-three/drei"

const Body = () => {

    const {nodes, materials} = useGLTF("./assets/suv.gltf")

    return(
        <group>
            <mesh geometry={nodes.Mesh_body001.geometry} material={materials["plastic.001"]}/>
            <mesh geometry={nodes.Mesh_body001_1.geometry} material={materials["paintGreen"]}/>
            <mesh geometry={nodes.Mesh_body001_2.geometry} material={materials["plastic.001"]}/>
            <mesh geometry={nodes.Mesh_body001_3.geometry} material={materials["window.021"]}/>
            <mesh geometry={nodes.Mesh_body001_4.geometry} material={materials["lightBack"]}/>
            <mesh geometry={nodes.Mesh_body001_5.geometry} material={materials["lightFront"]}/>
            <group position={[0,0.7,-1.2]} rotation-y={-Math.PI/2}>
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
        </group>
    )

}

export default Body