/* eslint-disable no-unused-vars */
import { useBox, useRaycastVehicle } from "@react-three/cannon"
import { useRef } from "react"
import { useGLTF, useKeyboardControls, Center, PositionalAudio } from "@react-three/drei"
import useWheels from "./useWheels"
import { useFrame } from "@react-three/fiber"
import { useEffect } from "react"
import { useState } from "react"

const Vehicle = () => {

    const car = useGLTF("./assets/car.gltf")
    const carEngineSound = useRef()
    const [play, setPlay] = useState(false)

    const width = 1.5
    const height = 1
    const front = 1.4
    const position = [12,2,15]
    const wheelRadius = 0.3;

    useEffect(() => {
        const audio = carEngineSound.current;
        let fadeInInterval;
        let fadeOutInterval
    
        if (play) {
            audio.play();
            audio.setVolume(0);
    
            fadeInInterval = setInterval(() => {
                const currentVolume = audio.getVolume();
                if (currentVolume < 0.3) {
                    audio.setVolume(currentVolume + 0.01);
                } else {
                    clearInterval(fadeInInterval);
                }
            }, 200);
        } else {
            fadeOutInterval = setInterval(() => {
                const currentVolume = audio.getVolume();
                if (currentVolume > 0.1) {
                    audio.setVolume(currentVolume - 0.01);
                } else {
                    audio.stop();
                    clearInterval(fadeOutInterval);
                }
            }, 100);
        }
    
        return () => {
            clearInterval(fadeInInterval);
            clearInterval(fadeOutInterval);
        };
    }, [play]);

    const chassisBodyArgs = [width, height, front * 2]

    const [chassisBody, chassisApi] = useBox(() => ({
        allowSleep: false,
        args: chassisBodyArgs,
        mass: 150,
        position,
        rotation: [0, -Math.PI/2, 0]
    }), useRef())

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius)

    const [vehicle, vehicleApi] = useRaycastVehicle(() => ({
        chassisBody,
        wheelInfos,
        wheels,
    }), useRef())

    const [subscribeKey, getKeys] = useKeyboardControls()

    useEffect(() => {
        console.log(chassisApi)
        const unsubscribe = chassisApi.position.subscribe((p) => {
            carEngineSound.current.position.copy({x: p[0], y: p[1], z:p[2]})
        })

        return () => {
            unsubscribe()
        }
    },[])

    useFrame((state, delta) => {
        const {forward, backward, leftward, rightward, brake, boost } = getKeys()

        let enginePower = 300
        let steeringValue = 0.36

        if (boost){
            enginePower = 600
            steeringValue = 0.6
        }

        if (forward) {
            vehicleApi.applyEngineForce(-enginePower, 1);
            vehicleApi.applyEngineForce(-enginePower, 0);
            setPlay(true)
        } else if (backward) {
            vehicleApi.applyEngineForce(enginePower, 1);
            vehicleApi.applyEngineForce(enginePower, 0);
            setPlay(true)
        } else {
            vehicleApi.applyEngineForce(0, 1);
            vehicleApi.applyEngineForce(0, 0);
            setPlay(false)
        }

        if (leftward) {
            vehicleApi.setSteeringValue(steeringValue, 2);
            vehicleApi.setSteeringValue(steeringValue, 3);
        } else if (rightward) {
            vehicleApi.setSteeringValue(-steeringValue, 2);
            vehicleApi.setSteeringValue(-steeringValue, 3);
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
            <PositionalAudio
                url="./assets/engineSound.wav"
                loop
                autoplay={false}
                distance={25}
                ref={carEngineSound}
            />
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