import { useCompoundBody } from "@react-three/cannon";
import { useRef } from "react"


const useWheels = (width, height, front, radius) => {
    const wheels = [useRef(), useRef(), useRef(), useRef()]

    const wheelInfo = {
        radius,
        directionLocal: [0, -1, 0],
        axleLocal: [1, 0, 0],
        suspensionStiffness: 60,
        suspensionRestLength: 0.1,
        frictionSlip: 5,
        dampingRelaxation: 2.3,
        dampingCompression: 4.4,
        maxSuspensionForce: 100000,
        rollInfluence: 0.01,
        maxSuspensionTravel: 0.1,
        customSlidingRotationalSpeed: -30,
        useCustomSlidingRotationalSpeed: true,
    }

    const wheelInfos = [
      
        {
          ...wheelInfo,
          chassisConnectionPointLocal: [-width * 0.4, -height * 0.3, -front * 0.55],
          isFrontWheel: false,
        },
        {
          ...wheelInfo,
          chassisConnectionPointLocal: [width * 0.4, -height * 0.3, -front * 0.55],
          isFrontWheel: false,
        },
        {
          ...wheelInfo,
          chassisConnectionPointLocal: [-width * 0.4, -height * 0.3 , front * 0.6],
          isFrontWheel: true,
        },
        {
          ...wheelInfo,
          chassisConnectionPointLocal: [width * 0.4, -height * 0.3, front * 0.6],
          isFrontWheel: true,
        }
      ];

    const propsFunc = () => ({
        collisionFilterGroup: 0,
        mass: 1,
        shapes: [
            {
                args: [wheelInfo.radius, wheelInfo.radius, 0.3, 16],
                rotation: [0,0,-Math.PI/2],
                type: "Cylinder"
            },
        ],
        type: "Kinematic"
    })

    useCompoundBody(propsFunc, wheels[0])
    useCompoundBody(propsFunc, wheels[1])
    useCompoundBody(propsFunc, wheels[2])
    useCompoundBody(propsFunc, wheels[3])

    return [wheels, wheelInfos]
}

export default useWheels