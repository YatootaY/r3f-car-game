import {OrbitControls} from "@react-three/drei"
import Ground from "./Components/Ground"
import Lights from "./Components/Lights"
import Vehicle from "./Components/Vehicle"

const Experience = () => {

    return(
        <>
            <OrbitControls makeDefault/>
            
            <Lights/>

            <Vehicle/>

            <Ground/>

        </>
    )
}

export default Experience