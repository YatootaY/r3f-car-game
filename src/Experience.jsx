import {OrbitControls} from "@react-three/drei"
import Ground from "./Components/Ground"
import Lights from "./Components/Lights"
import Vehicle from "./Components/Vehicle/Vehicle"
import { Physics } from "@react-three/cannon"
import Farm from "./Components/Farm"
import Text from "./Components/Text"

const Experience = () => {

    return(
        <>
            <OrbitControls makeDefault/>
            
            <Lights/>
            <Physics>
                    <Vehicle/>
                    <Farm/>
                    <Text/>
                    <Ground/>
            </Physics>

            

        </>
    )
}

export default Experience