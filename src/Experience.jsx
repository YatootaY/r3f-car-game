import {OrbitControls} from "@react-three/drei"
import Ground from "./Components/Ground"
import Lights from "./Components/Lights"
import Vehicle from "./Components/Vehicle/Vehicle"
import { Physics, Debug } from "@react-three/cannon"
import Farm from "./Components/Farm"
import Text from "./Components/Text"

const Experience = () => {

    return(
        <>
            <OrbitControls makeDefault/>
            
            <Lights/>
            <Physics>
                <Debug>
                    <Vehicle/>
                    <Farm/>
                    <Text/>
                    <Ground/>
                </Debug>
            </Physics>

            

        </>
    )
}

export default Experience