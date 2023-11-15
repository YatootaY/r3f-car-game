/* eslint-disable no-unused-vars */
import { useBox, useRaycastVehicle } from "@react-three/cannon"
import { useRef } from "react"
import { useGLTF, useKeyboardControls, Center } from "@react-three/drei"
import useWheels from "../useWheels"
import { useFrame } from "@react-three/fiber"

const Vehicle = () => {

    const car = useGLTF("./assets/car.gltf")

    const width = 1.5
    const height = 1
    const front = 1.4
    const position = [0,1,0]
    const wheelRadius = 0.3;

    const chassisBodyArgs = [width, height, front * 2]

    const [chassisBody, chassisApi] = useBox(() => ({
        allowSleep: false,
        args: chassisBodyArgs,
        mass: 150,
        position,
    }), useRef())

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius)

    const [vehicle, vehicleApi] = useRaycastVehicle(() => ({
        chassisBody,
        wheelInfos,
        wheels
    }), useRef())

    const [subscribeKey, getKeys] = useKeyboardControls()

    useFrame((state, delta) => {
        const {forward, backward, leftward, rightward, brake } = getKeys()
        if (forward) {
            vehicleApi.applyEngineForce(-300, 1);
            vehicleApi.applyEngineForce(-300, 0);
        } else if (backward) {
            vehicleApi.applyEngineForce(300, 1);
            vehicleApi.applyEngineForce(300, 0);
        } else {
            vehicleApi.applyEngineForce(0, 1);
            vehicleApi.applyEngineForce(0, 0);
        }

        if (leftward) {
            vehicleApi.setSteeringValue(0.35, 2);
            vehicleApi.setSteeringValue(0.35, 3);
        } else if (rightward) {
            vehicleApi.setSteeringValue(-0.35, 2);
            vehicleApi.setSteeringValue(-0.35, 3);
        } else {
            vehicleApi.setSteeringValue(0, 2);
            vehicleApi.setSteeringValue(0, 3);
        }

        const brakeMultipler = brake ? 1e5 : 0;
        vehicleApi.setBrake(brakeMultipler, 1);
        vehicleApi.setBrake(brakeMultipler, 0);
    })

    return(
        <>
            <group ref={vehicle}>
                <group ref={chassisBody}>
                    <primitive object={car.nodes.body004} position={[0,-0.6,0]} />
                </group>


                <group ref={wheels[0]}>
                    <mesh rotation={[0,0, 0]} position={[0,0,0]}>
                        <Center>
                            <primitive object={car.nodes.wheel_frontRight004}/>
                        </Center>
                    </mesh>
                </group>
                <group ref={wheels[1]}>
                    <mesh rotation={[0,0, 0]} position={[0,0,0]}>
                        <Center>
                            <primitive object={car.nodes.wheel_frontLeft004}/>
                        </Center>
                    </mesh>
                </group>
                <group ref={wheels[2]}>
                    <mesh rotation={[0,0, 0]} position={[0,0,0]}>
                        <Center>
                            <primitive object={car.nodes.wheel_backRight004}/>
                        </Center>
                    </mesh>
                </group>

                <group ref={wheels[3]}>
                    <mesh rotation={[0,0, 0]} position={[0,0,0]}>
                        <Center>
                            <primitive object={car.nodes.wheel_backLeft004}/>
                        </Center>
                    </mesh>
                </group>
            </group>
        </>
    )
}

export default Vehicle