import { useBox, useRaycastVehicle } from "@react-three/cannon"
import { useRef } from "react"
import { useGLTF, useKeyboardControls } from "@react-three/drei"
import useWheels from "../useWheels"
import WheelDebug from "../WheelDebug"
import { useFrame } from "@react-three/fiber"

const Vehicle = () => {

    const car = useGLTF("./assets/car.gltf")

    const width = 1.5
    const height = 1
    const front = 1.4
    const position = [0,1,0]
    const wheelRadius = 0.5;

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
        const {forward, backward, leftward, rightward } = getKeys()
        if (forward) {
            vehicleApi.applyEngineForce(150, 2);
            vehicleApi.applyEngineForce(150, 3);
        } else if (backward) {
            vehicleApi.applyEngineForce(-150, 2);
            vehicleApi.applyEngineForce(-150, 3);
        } else {
            vehicleApi.applyEngineForce(0, 2);
            vehicleApi.applyEngineForce(0, 3);
        }

        if (leftward) {
            vehicleApi.setSteeringValue(0.35, 2);
            vehicleApi.setSteeringValue(0.35, 3);
            vehicleApi.setSteeringValue(-0.1, 0);
            vehicleApi.setSteeringValue(-0.1, 1);
        } else if (rightward) {
            vehicleApi.setSteeringValue(-0.35, 2);
            vehicleApi.setSteeringValue(-0.35, 3);
            vehicleApi.setSteeringValue(0.1, 0);
            vehicleApi.setSteeringValue(0.1, 1);
        } else {
            for(let i = 0; i < 4; i++) {
              vehicleApi.setSteeringValue(0, i);
            }
        }
    })

    return(
        <>
            <group ref={vehicle}>
                <group ref={chassisBody}>
                    <primitive object={car.nodes.body004} position={[0,-0.6,0]} rotation-y={Math.PI}/>
                </group>

                <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
            </group>
        </>
    )
}

export default Vehicle