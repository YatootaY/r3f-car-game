import {OrbitControls} from "@react-three/drei"
import Ground from "./Components/Ground"
import Lights from "./Components/Lights"
import Vehicle from "./Components/Vehicle/Vehicle"
import { Physics, Debug } from "@react-three/cannon"

const Experience = () => {

    return(
        <>
            <OrbitControls makeDefault/>
            
            <Lights/>

            <Physics>
                <Debug>
                    <Vehicle/>
                    <Ground/>
                </Debug>
            </Physics>

        </>
    )
}

export default Experience